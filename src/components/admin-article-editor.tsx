"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { ImageKey } from "@/data/china-content";
import type { CmsArticleRecord } from "@/lib/cms-types";

import styles from "./admin-article-editor.module.css";

type ArticleOption = {
  slug: string;
  title: string;
};

type SiteLinkOption = {
  label: string;
  href: string;
};

type ImageOption = {
  value: ImageKey;
  label: string;
};

type EditorSectionState = {
  title: string;
  image: ImageKey;
  bodyText: string;
  bulletsText: string;
};

type EditorState = {
  slug: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  searchAngle: string;
  heroImage: ImageKey;
  readingTime: string;
  publishedLabel: string;
  keyPointsText: string;
  introText: string;
  sections: EditorSectionState[];
  relatedArticles: string[];
  relatedSiteLinks: string[];
};

type AdminArticleEditorProps = {
  article: CmsArticleRecord | null;
  imageOptions: ImageOption[];
  relatedArticleOptions: ArticleOption[];
  siteLinkOptions: SiteLinkOption[];
};

const DEFAULT_IMAGE: ImageKey = "pudong";

function slugifyTitle(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function joinParagraphs(value: string[]) {
  return value.join("\n\n");
}

function joinLines(value: string[]) {
  return value.join("\n");
}

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitParagraphs(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function createEmptySection(): EditorSectionState {
  return {
    title: "",
    image: DEFAULT_IMAGE,
    bodyText: "",
    bulletsText: "",
  };
}

function createInitialState(article: CmsArticleRecord | null): EditorState {
  if (!article) {
    return {
      slug: "",
      eyebrow: "",
      title: "",
      excerpt: "",
      searchAngle: "",
      heroImage: DEFAULT_IMAGE,
      readingTime: "8 min read",
      publishedLabel: "Draft article",
      keyPointsText: "",
      introText: "",
      sections: [createEmptySection(), createEmptySection()],
      relatedArticles: [],
      relatedSiteLinks: ["/articles", "/historical-places"],
    };
  }

  return {
    slug: article.slug,
    eyebrow: article.eyebrow,
    title: article.title,
    excerpt: article.excerpt,
    searchAngle: article.searchAngle,
    heroImage: article.heroImage,
    readingTime: article.readingTime,
    publishedLabel: article.publishedLabel,
    keyPointsText: joinLines(article.keyPoints),
    introText: joinParagraphs(article.intro),
    sections: article.sections.map((section) => ({
      title: section.title,
      image: section.image,
      bodyText: joinParagraphs(section.body),
      bulletsText: joinLines(section.bullets || []),
    })),
    relatedArticles: article.relatedArticles,
    relatedSiteLinks: article.relatedLinks.map((item) => item.href),
  };
}

export function AdminArticleEditor({
  article,
  imageOptions,
  relatedArticleOptions,
  siteLinkOptions,
}: AdminArticleEditorProps) {
  const router = useRouter();
  const [form, setForm] = useState<EditorState>(() => createInitialState(article));
  const [slugTouched, setSlugTouched] = useState(Boolean(article));
  const [pendingAction, setPendingAction] = useState<"" | "draft" | "published" | "delete">("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleFieldChange = <Key extends keyof EditorState>(field: Key, value: EditorState[Key]) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleTitleChange = (value: string) => {
    setForm((current) => ({
      ...current,
      title: value,
      slug: slugTouched ? current.slug : slugifyTitle(value),
    }));
  };

  const handleSectionChange = (
    index: number,
    field: keyof EditorSectionState,
    value: EditorSectionState[keyof EditorSectionState],
  ) => {
    setForm((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) =>
        sectionIndex === index
          ? {
              ...section,
              [field]: value,
            }
          : section,
      ),
    }));
  };

  const toggleRelatedArticle = (slug: string) => {
    setForm((current) => ({
      ...current,
      relatedArticles: current.relatedArticles.includes(slug)
        ? current.relatedArticles.filter((item) => item !== slug)
        : [...current.relatedArticles, slug],
    }));
  };

  const toggleSiteLink = (href: string) => {
    setForm((current) => ({
      ...current,
      relatedSiteLinks: current.relatedSiteLinks.includes(href)
        ? current.relatedSiteLinks.filter((item) => item !== href)
        : [...current.relatedSiteLinks, href],
    }));
  };

  const addSection = () => {
    setForm((current) => ({
      ...current,
      sections: [...current.sections, createEmptySection()],
    }));
  };

  const removeSection = (index: number) => {
    setForm((current) => ({
      ...current,
      sections:
        current.sections.length > 1
          ? current.sections.filter((_, sectionIndex) => sectionIndex !== index)
          : current.sections,
    }));
  };

  const buildPayload = (status: "draft" | "published") => ({
    slug: form.slug.trim().toLowerCase(),
    eyebrow: form.eyebrow.trim(),
    title: form.title.trim(),
    excerpt: form.excerpt.trim(),
    searchAngle: form.searchAngle.trim(),
    heroImage: form.heroImage,
    readingTime: form.readingTime.trim(),
    publishedLabel: form.publishedLabel.trim(),
    keyPoints: splitLines(form.keyPointsText),
    intro: splitParagraphs(form.introText),
    sections: form.sections.map((section) => ({
      title: section.title.trim(),
      image: section.image,
      body: splitParagraphs(section.bodyText),
      bullets: splitLines(section.bulletsText),
    })),
    relatedArticles: form.relatedArticles,
    relatedLinks: siteLinkOptions
      .filter((option) => form.relatedSiteLinks.includes(option.href))
      .map((option) => ({
        label: option.label,
        href: option.href,
      })),
    status,
  });

  const handleSave = async (status: "draft" | "published") => {
    setPendingAction(status);
    setError("");
    setMessage("");

    try {
      const response = await fetch(article ? `/api/admin/articles/${article.id}` : "/api/admin/articles", {
        method: article ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildPayload(status)),
      });

      const payload = (await response.json()) as {
        error?: string;
        article?: CmsArticleRecord;
      };

      if (!response.ok || !payload.article) {
        throw new Error(payload.error || "The article could not be saved.");
      }

      setMessage(status === "published" ? "Article published." : "Draft saved.");

      if (!article) {
        router.replace(`/admin/articles/${payload.article.id}`);
      } else {
        router.refresh();
      }
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "The article could not be saved.");
    } finally {
      setPendingAction("");
    }
  };

  const handleDelete = async () => {
    if (!article) {
      return;
    }

    const confirmed = window.confirm("Delete this article from MongoDB?");

    if (!confirmed) {
      return;
    }

    setPendingAction("delete");
    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/admin/articles/${article.id}`, {
        method: "DELETE",
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "The article could not be deleted.");
      }

      router.push("/admin");
      router.refresh();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "The article could not be deleted.");
      setPendingAction("");
    }
  };

  const publicUrl = form.slug ? `/articles/${form.slug}` : "";

  return (
    <div className={styles.editor}>
      <div className={styles.topbar}>
        <div>
          <h1>{article ? "Edit article" : "New article"}</h1>
          <div className={styles.statusMeta}>
            <span>Status: {article?.status || "draft"}</span>
            {article?.updatedAt ? <span>Updated: {new Date(article.updatedAt).toLocaleString()}</span> : null}
            {publicUrl ? (
              <span>
                Public URL:{" "}
                <Link href={publicUrl} target="_blank">
                  {publicUrl}
                </Link>
              </span>
            ) : null}
          </div>
        </div>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => handleSave("draft")}
            disabled={Boolean(pendingAction)}
          >
            {pendingAction === "draft" ? "Saving..." : "Save draft"}
          </button>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => handleSave("published")}
            disabled={Boolean(pendingAction)}
          >
            {pendingAction === "published" ? "Publishing..." : "Publish article"}
          </button>
          {article ? (
            <button
              type="button"
              className={styles.dangerButton}
              onClick={handleDelete}
              disabled={Boolean(pendingAction)}
            >
              {pendingAction === "delete" ? "Deleting..." : "Delete"}
            </button>
          ) : null}
        </div>
      </div>

      {message ? <p className={styles.message}>{message}</p> : null}
      {error ? <p className={styles.error}>{error}</p> : null}

      <section className={styles.panel}>
        <h2>Article basics</h2>
        <p>Set the main search framing, slug, hero image, and summary data first.</p>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="article-title">Title</label>
            <input
              id="article-title"
              value={form.title}
              onChange={(event) => handleTitleChange(event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-slug">Slug</label>
            <input
              id="article-slug"
              value={form.slug}
              onChange={(event) => {
                setSlugTouched(true);
                handleFieldChange("slug", slugifyTitle(event.target.value));
              }}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-eyebrow">Eyebrow</label>
            <input
              id="article-eyebrow"
              value={form.eyebrow}
              onChange={(event) => handleFieldChange("eyebrow", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-reading-time">Reading time</label>
            <input
              id="article-reading-time"
              value={form.readingTime}
              onChange={(event) => handleFieldChange("readingTime", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-label">Published label</label>
            <input
              id="article-label"
              value={form.publishedLabel}
              onChange={(event) => handleFieldChange("publishedLabel", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-hero-image">Hero image</label>
            <select
              id="article-hero-image"
              value={form.heroImage}
              onChange={(event) => handleFieldChange("heroImage", event.target.value as ImageKey)}
            >
              {imageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label htmlFor="article-excerpt">Excerpt</label>
            <textarea
              id="article-excerpt"
              value={form.excerpt}
              onChange={(event) => handleFieldChange("excerpt", event.target.value)}
            />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label htmlFor="article-search-angle">Search angle</label>
            <textarea
              id="article-search-angle"
              value={form.searchAngle}
              onChange={(event) => handleFieldChange("searchAngle", event.target.value)}
            />
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <h2>Opening content</h2>
        <p>Use one line per key point. Separate intro paragraphs with blank lines.</p>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="article-key-points">Key points</label>
            <textarea
              id="article-key-points"
              value={form.keyPointsText}
              onChange={(event) => handleFieldChange("keyPointsText", event.target.value)}
            />
            <span className={styles.helper}>One line per key point.</span>
          </div>
          <div className={styles.field}>
            <label htmlFor="article-intro">Intro paragraphs</label>
            <textarea
              id="article-intro"
              value={form.introText}
              onChange={(event) => handleFieldChange("introText", event.target.value)}
            />
            <span className={styles.helper}>Separate paragraphs with a blank line.</span>
          </div>
        </div>
      </section>

      <section className={styles.panel}>
        <div className={styles.topbar}>
          <div>
            <h2>Article sections</h2>
            <p>Each section becomes one visual text band on the public article page.</p>
          </div>
          <button type="button" className={styles.ghostButton} onClick={addSection}>
            Add section
          </button>
        </div>
        <div className={styles.editor}>
          {form.sections.map((section, index) => (
            <article key={`${section.title}-${index}`} className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <h3>Section {index + 1}</h3>
                {form.sections.length > 1 ? (
                  <button
                    type="button"
                    className={styles.ghostButton}
                    onClick={() => removeSection(index)}
                  >
                    Remove
                  </button>
                ) : null}
              </div>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <label htmlFor={`section-title-${index}`}>Section title</label>
                  <input
                    id={`section-title-${index}`}
                    value={section.title}
                    onChange={(event) => handleSectionChange(index, "title", event.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={`section-image-${index}`}>Section image</label>
                  <select
                    id={`section-image-${index}`}
                    value={section.image}
                    onChange={(event) =>
                      handleSectionChange(index, "image", event.target.value as ImageKey)
                    }
                  >
                    {imageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.field} ${styles.fieldWide}`}>
                  <label htmlFor={`section-body-${index}`}>Body paragraphs</label>
                  <textarea
                    id={`section-body-${index}`}
                    value={section.bodyText}
                    onChange={(event) => handleSectionChange(index, "bodyText", event.target.value)}
                  />
                  <span className={styles.helper}>Separate paragraphs with a blank line.</span>
                </div>
                <div className={`${styles.field} ${styles.fieldWide}`}>
                  <label htmlFor={`section-bullets-${index}`}>Bullets</label>
                  <textarea
                    id={`section-bullets-${index}`}
                    value={section.bulletsText}
                    onChange={(event) =>
                      handleSectionChange(index, "bulletsText", event.target.value)
                    }
                  />
                  <span className={styles.helper}>Optional. One line per bullet.</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.panel}>
        <h2>Internal links and backlinks</h2>
        <p>Select related articles and site sections to strengthen internal linking.</p>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Related articles</label>
            <div className={styles.checkboxGrid}>
              {relatedArticleOptions.map((option) => (
                <label key={option.slug} className={styles.checkboxCard}>
                  <span className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={form.relatedArticles.includes(option.slug)}
                      onChange={() => toggleRelatedArticle(option.slug)}
                    />
                    <span>{option.title}</span>
                  </span>
                  <span className={styles.checkboxSlug}>/{option.slug}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.field}>
            <label>Atlas links</label>
            <div className={styles.checkboxGrid}>
              {siteLinkOptions.map((option) => (
                <label key={option.href} className={styles.checkboxCard}>
                  <span className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={form.relatedSiteLinks.includes(option.href)}
                      onChange={() => toggleSiteLink(option.href)}
                    />
                    <span>{option.label}</span>
                  </span>
                  <span className={styles.checkboxSlug}>{option.href}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
