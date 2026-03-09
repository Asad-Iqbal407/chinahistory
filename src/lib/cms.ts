import { ObjectId } from "mongodb";

import { articleOrder, articles, getArticle, type Article } from "@/data/article-content";
import { imageCatalog, type ImageKey } from "@/data/china-content";
import type {
  AdminUserRecord,
  CmsArticleInput,
  CmsArticleLinkInput,
  CmsArticleRecord,
  CmsArticleSectionInput,
  CmsArticleStatus,
  FeedbackInput,
  FeedbackKind,
  FeedbackRecord,
  FeedbackStatus,
} from "@/lib/cms-types";
import { getDatabase, hasMongoConfig } from "@/lib/mongodb";

const ADMIN_USERS_COLLECTION = "adminUsers";
const CMS_ARTICLES_COLLECTION = "cmsArticles";
const FEEDBACK_COLLECTION = "feedbackEntries";

type CmsArticleDocument = CmsArticleInput & {
  _id: ObjectId;
  authorEmail: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
};

type AdminUserDocument = {
  _id: ObjectId;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
};

type FeedbackDocument = {
  _id: ObjectId;
  name: string;
  email: string;
  kind: FeedbackKind;
  pagePath: string;
  message: string;
  status: FeedbackStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type PublicArticle = Article & {
  source: "static" | "cms";
  id?: string;
  authorEmail?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string | null;
};

function isImageKey(value: string): value is ImageKey {
  return Object.prototype.hasOwnProperty.call(imageCatalog, value);
}

function normalizeLines(value: unknown, fieldName: string) {
  if (!Array.isArray(value)) {
    throw new Error(`${fieldName} must be a list of lines.`);
  }

  const lines = value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);

  if (lines.length === 0) {
    throw new Error(`${fieldName} must contain at least one line.`);
  }

  return lines;
}

function normalizeOptionalLines(value: unknown) {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const lines = value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);

  return lines.length > 0 ? lines : undefined;
}

function assertString(value: unknown, fieldName: string, maxLength = 280) {
  if (typeof value !== "string") {
    throw new Error(`${fieldName} must be text.`);
  }

  const normalized = value.trim();

  if (!normalized) {
    throw new Error(`${fieldName} is required.`);
  }

  if (normalized.length > maxLength) {
    throw new Error(`${fieldName} is too long.`);
  }

  return normalized;
}

function assertOptionalString(value: unknown, maxLength = 180) {
  if (typeof value !== "string") {
    return "";
  }

  const normalized = value.trim();

  if (!normalized) {
    return "";
  }

  if (normalized.length > maxLength) {
    throw new Error("One of the optional feedback fields is too long.");
  }

  return normalized;
}

function normalizeSlug(value: unknown) {
  const slug = assertString(value, "Slug", 90).toLowerCase();

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Slug must use lowercase letters, numbers, and hyphens only.");
  }

  return slug;
}

function normalizeStatus(value: unknown): CmsArticleStatus {
  if (value === "draft" || value === "published") {
    return value;
  }

  throw new Error("Status must be draft or published.");
}

function normalizeFeedbackKind(value: unknown): FeedbackKind {
  if (
    value === "correction" ||
    value === "idea" ||
    value === "question" ||
    value === "bug" ||
    value === "praise"
  ) {
    return value;
  }

  throw new Error("Feedback kind is invalid.");
}

function normalizeFeedbackStatus(value: unknown): FeedbackStatus {
  if (value === "new" || value === "reviewed" || value === "archived") {
    return value;
  }

  throw new Error("Feedback status is invalid.");
}

function normalizeRelatedLinks(value: unknown): CmsArticleLinkInput[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const entry = item as Record<string, unknown>;
      const label = typeof entry.label === "string" ? entry.label.trim() : "";
      const href = typeof entry.href === "string" ? entry.href.trim() : "";

      if (!label || !href) {
        return null;
      }

      if (!href.startsWith("/")) {
        throw new Error("Related links must point to internal site paths.");
      }

      return { label, href };
    })
    .filter((item): item is CmsArticleLinkInput => Boolean(item));
}

function normalizeRelatedArticles(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function normalizeSections(value: unknown): CmsArticleSectionInput[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error("At least one article section is required.");
  }

  return value.map((section, index) => {
    if (!section || typeof section !== "object") {
      throw new Error(`Section ${index + 1} is invalid.`);
    }

    const entry = section as Record<string, unknown>;
    const image = assertString(entry.image, `Section ${index + 1} image`, 80);

    if (!isImageKey(image)) {
      throw new Error(`Section ${index + 1} image is not in the local image catalog.`);
    }

    return {
      title: assertString(entry.title, `Section ${index + 1} title`, 120),
      image,
      body: normalizeLines(entry.body, `Section ${index + 1} body`),
      bullets: normalizeOptionalLines(entry.bullets),
    };
  });
}

export function validateCmsArticleInput(value: unknown): CmsArticleInput {
  if (!value || typeof value !== "object") {
    throw new Error("Article payload is invalid.");
  }

  const entry = value as Record<string, unknown>;
  const slug = normalizeSlug(entry.slug);

  if (Object.prototype.hasOwnProperty.call(articles, slug)) {
    throw new Error("Slug conflicts with one of the built-in atlas articles.");
  }

  const heroImage = assertString(entry.heroImage, "Hero image", 80);

  if (!isImageKey(heroImage)) {
    throw new Error("Hero image must come from the local image catalog.");
  }

  const relatedArticles = normalizeRelatedArticles(entry.relatedArticles).filter(
    (relatedSlug) => relatedSlug !== slug,
  );

  return {
    slug,
    eyebrow: assertString(entry.eyebrow, "Eyebrow", 60),
    title: assertString(entry.title, "Title", 140),
    excerpt: assertString(entry.excerpt, "Excerpt", 240),
    searchAngle: assertString(entry.searchAngle, "Search angle", 220),
    heroImage,
    readingTime: assertString(entry.readingTime, "Reading time", 40),
    publishedLabel: assertString(entry.publishedLabel, "Published label", 50),
    keyPoints: normalizeLines(entry.keyPoints, "Key points"),
    intro: normalizeLines(entry.intro, "Intro"),
    sections: normalizeSections(entry.sections),
    relatedArticles,
    relatedLinks: normalizeRelatedLinks(entry.relatedLinks),
    status: normalizeStatus(entry.status),
  };
}

export function validateFeedbackInput(value: unknown): FeedbackInput {
  if (!value || typeof value !== "object") {
    throw new Error("Feedback payload is invalid.");
  }

  const entry = value as Record<string, unknown>;
  const pagePath = assertOptionalString(entry.pagePath, 160) || "/";

  if (!pagePath.startsWith("/")) {
    throw new Error("Feedback page path must be an internal path.");
  }

  return {
    name: assertOptionalString(entry.name, 80),
    email: assertOptionalString(entry.email, 120),
    kind: normalizeFeedbackKind(entry.kind),
    pagePath,
    message: assertString(entry.message, "Feedback message", 1800),
  };
}

function serializeCmsArticle(document: CmsArticleDocument): CmsArticleRecord {
  return {
    id: document._id.toString(),
    slug: document.slug,
    eyebrow: document.eyebrow,
    title: document.title,
    excerpt: document.excerpt,
    searchAngle: document.searchAngle,
    heroImage: document.heroImage,
    readingTime: document.readingTime,
    publishedLabel: document.publishedLabel,
    keyPoints: document.keyPoints,
    intro: document.intro,
    sections: document.sections,
    relatedArticles: document.relatedArticles,
    relatedLinks: document.relatedLinks,
    status: document.status,
    authorEmail: document.authorEmail,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
    publishedAt: document.publishedAt ? document.publishedAt.toISOString() : null,
  };
}

function serializeAdminUser(document: AdminUserDocument): AdminUserRecord {
  return {
    id: document._id.toString(),
    email: document.email,
    passwordHash: document.passwordHash,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  };
}

function serializeFeedback(document: FeedbackDocument): FeedbackRecord {
  return {
    id: document._id.toString(),
    name: document.name,
    email: document.email,
    kind: document.kind,
    pagePath: document.pagePath,
    message: document.message,
    status: document.status,
    createdAt: document.createdAt.toISOString(),
    updatedAt: document.updatedAt.toISOString(),
  };
}

function toPublicCmsArticle(article: CmsArticleRecord): PublicArticle {
  return {
    slug: article.slug,
    eyebrow: article.eyebrow,
    title: article.title,
    excerpt: article.excerpt,
    searchAngle: article.searchAngle,
    heroImage: article.heroImage,
    readingTime: article.readingTime,
    publishedLabel: article.publishedLabel,
    keyPoints: article.keyPoints,
    intro: article.intro,
    sections: article.sections,
    relatedArticles: article.relatedArticles,
    relatedLinks: article.relatedLinks,
    source: "cms",
    id: article.id,
    authorEmail: article.authorEmail,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    publishedAt: article.publishedAt,
  };
}

function toPublicStaticArticle(slug: string): PublicArticle | undefined {
  const article = getArticle(slug);

  if (!article) {
    return undefined;
  }

  return {
    ...article,
    source: "static",
  };
}

export async function ensureCmsCollections() {
  if (!hasMongoConfig()) {
    return;
  }

  const database = await getDatabase();
  await database.collection<AdminUserDocument>(ADMIN_USERS_COLLECTION).createIndex(
    { email: 1 },
    { unique: true },
  );
  await database.collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION).createIndex(
    { slug: 1 },
    { unique: true },
  );
  await database.collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION).createIndex({
    status: 1,
    publishedAt: -1,
  });
  await database.collection<FeedbackDocument>(FEEDBACK_COLLECTION).createIndex({
    status: 1,
    createdAt: -1,
  });
}

export async function getAdminUserByEmail(email: string) {
  if (!hasMongoConfig()) {
    return null;
  }

  const database = await getDatabase();
  const document = await database
    .collection<AdminUserDocument>(ADMIN_USERS_COLLECTION)
    .findOne({ email: email.toLowerCase() });

  return document ? serializeAdminUser(document) : null;
}

export async function upsertAdminUser(email: string, passwordHash: string) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  const database = await getDatabase();
  const now = new Date();

  await database.collection<AdminUserDocument>(ADMIN_USERS_COLLECTION).updateOne(
    { email: email.toLowerCase() },
    {
      $set: {
        email: email.toLowerCase(),
        passwordHash,
        updatedAt: now,
      },
      $setOnInsert: {
        createdAt: now,
      },
    },
    { upsert: true },
  );
}

export async function listAdminArticles() {
  if (!hasMongoConfig()) {
    return [] as CmsArticleRecord[];
  }

  const database = await getDatabase();
  const documents = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .find({})
    .sort({ updatedAt: -1 })
    .toArray();

  return documents.map(serializeCmsArticle);
}

export async function getAdminArticleById(id: string) {
  if (!hasMongoConfig() || !ObjectId.isValid(id)) {
    return null;
  }

  const database = await getDatabase();
  const document = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .findOne({ _id: new ObjectId(id) });

  return document ? serializeCmsArticle(document) : null;
}

export async function createCmsArticle(input: CmsArticleInput, authorEmail: string) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  const database = await getDatabase();
  const now = new Date();
  const document: Omit<CmsArticleDocument, "_id"> = {
    ...input,
    authorEmail,
    createdAt: now,
    updatedAt: now,
    publishedAt: input.status === "published" ? now : null,
  };

  const result = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .insertOne(document as CmsArticleDocument);

  const created = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .findOne({ _id: result.insertedId });

  if (!created) {
    throw new Error("The article was created but could not be loaded back.");
  }

  return serializeCmsArticle(created);
}

export async function updateCmsArticle(id: string, input: CmsArticleInput, authorEmail: string) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Article id is invalid.");
  }

  const database = await getDatabase();
  const collection = database.collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION);
  const existing = await collection.findOne({ _id: new ObjectId(id) });

  if (!existing) {
    throw new Error("Article not found.");
  }

  const nextPublishedAt =
    input.status === "published"
      ? existing.publishedAt ?? new Date()
      : null;

  await collection.updateOne(
    { _id: existing._id },
    {
      $set: {
        ...input,
        authorEmail,
        updatedAt: new Date(),
        publishedAt: nextPublishedAt,
      },
    },
  );

  const updated = await collection.findOne({ _id: existing._id });

  if (!updated) {
    throw new Error("Updated article could not be loaded.");
  }

  return serializeCmsArticle(updated);
}

export async function deleteCmsArticle(id: string) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Article id is invalid.");
  }

  const database = await getDatabase();
  await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .deleteOne({ _id: new ObjectId(id) });
}

export async function listPublishedCmsArticles() {
  if (!hasMongoConfig()) {
    return [] as CmsArticleRecord[];
  }

  const database = await getDatabase();
  const documents = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .find({ status: "published" })
    .sort({ publishedAt: -1, updatedAt: -1 })
    .toArray();

  return documents.map(serializeCmsArticle);
}

export async function getPublishedCmsArticleBySlug(slug: string) {
  if (!hasMongoConfig()) {
    return null;
  }

  const database = await getDatabase();
  const document = await database
    .collection<CmsArticleDocument>(CMS_ARTICLES_COLLECTION)
    .findOne({ slug, status: "published" });

  return document ? serializeCmsArticle(document) : null;
}

export async function createFeedback(input: FeedbackInput) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  const database = await getDatabase();
  const now = new Date();
  const document: Omit<FeedbackDocument, "_id"> = {
    ...input,
    status: "new",
    createdAt: now,
    updatedAt: now,
  };

  const result = await database
    .collection<FeedbackDocument>(FEEDBACK_COLLECTION)
    .insertOne(document as FeedbackDocument);
  const created = await database
    .collection<FeedbackDocument>(FEEDBACK_COLLECTION)
    .findOne({ _id: result.insertedId });

  if (!created) {
    throw new Error("Feedback was created but could not be loaded back.");
  }

  return serializeFeedback(created);
}

export async function listFeedbackEntries() {
  if (!hasMongoConfig()) {
    return [] as FeedbackRecord[];
  }

  const database = await getDatabase();
  const documents = await database
    .collection<FeedbackDocument>(FEEDBACK_COLLECTION)
    .find({})
    .sort({ status: 1, createdAt: -1 })
    .toArray();

  return documents.map(serializeFeedback);
}

export async function updateFeedbackStatus(id: string, status: FeedbackStatus) {
  if (!hasMongoConfig()) {
    throw new Error("MongoDB is not configured.");
  }

  if (!ObjectId.isValid(id)) {
    throw new Error("Feedback id is invalid.");
  }

  const database = await getDatabase();
  const collection = database.collection<FeedbackDocument>(FEEDBACK_COLLECTION);
  const objectId = new ObjectId(id);

  await collection.updateOne(
    { _id: objectId },
    {
      $set: {
        status: normalizeFeedbackStatus(status),
        updatedAt: new Date(),
      },
    },
  );

  const updated = await collection.findOne({ _id: objectId });

  if (!updated) {
    throw new Error("Feedback entry not found.");
  }

  return serializeFeedback(updated);
}

export async function listPublicArticles() {
  const cmsArticles = (await listPublishedCmsArticles()).map(toPublicCmsArticle);
  const staticArticles = articleOrder
    .map((slug) => toPublicStaticArticle(slug))
    .filter((article): article is PublicArticle => Boolean(article));

  return [...cmsArticles, ...staticArticles];
}

export async function getPublicArticle(slug: string) {
  const cmsArticle = await getPublishedCmsArticleBySlug(slug);

  if (cmsArticle) {
    return toPublicCmsArticle(cmsArticle);
  }

  return toPublicStaticArticle(slug);
}

export async function listPublicArticleSlugs() {
  const cmsSlugs = (await listPublishedCmsArticles()).map((article) => article.slug);

  return [...cmsSlugs, ...articleOrder];
}
