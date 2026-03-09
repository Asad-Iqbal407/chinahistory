import type { ImageKey } from "@/data/china-content";

export type CmsArticleStatus = "draft" | "published";
export type FeedbackStatus = "new" | "reviewed" | "archived";
export type FeedbackKind = "correction" | "idea" | "question" | "bug" | "praise";

export type CmsArticleSectionInput = {
  title: string;
  image: ImageKey;
  body: string[];
  bullets?: string[];
};

export type CmsArticleLinkInput = {
  label: string;
  href: string;
};

export type CmsArticleInput = {
  slug: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  searchAngle: string;
  heroImage: ImageKey;
  readingTime: string;
  publishedLabel: string;
  keyPoints: string[];
  intro: string[];
  sections: CmsArticleSectionInput[];
  relatedArticles: string[];
  relatedLinks: CmsArticleLinkInput[];
  status: CmsArticleStatus;
};

export type CmsArticleRecord = CmsArticleInput & {
  id: string;
  authorEmail: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type AdminSession = {
  userId: string;
  email: string;
  exp: number;
};

export type AdminUserRecord = {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  updatedAt: string;
};

export type FeedbackInput = {
  name: string;
  email: string;
  kind: FeedbackKind;
  pagePath: string;
  message: string;
};

export type FeedbackRecord = FeedbackInput & {
  id: string;
  status: FeedbackStatus;
  createdAt: string;
  updatedAt: string;
};
