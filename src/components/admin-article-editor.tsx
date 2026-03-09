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
      <header className={styles.topbar}>
        <div>
          <h1>{article ? "Edit Article" : "Create New Article"}</h1>
          <div className={styles.statusMeta}>
            <span>Status: <strong>{article?.status || "draft"}</strong></span>
            {article?.updatedAt ? <span>Last updated: {new Date(article.updatedAt).toLocaleString()}</span> : null}
            {publicUrl ? (
              <span>
                Live link:{" "}
                <Link href={publicUrl} target="_blank">
                  {publicUrl}
                </Link>
              </span>
            ) : null}
          </div>
        </div>
        <div className={styles.actions}>
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
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => handleSave("draft")}
            disabled={Boolean(pendingAction)}
          >
            {pendingAction === "draft" ? "Saving..." : "Save Draft"}
          </button>
          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => handleSave("published")}
            disabled={Boolean(pendingAction)}
          >
            {pendingAction === "published" ? "Publishing..." : "Publish Now"}
          </button>
        </div>
      </header>

      {message ? <div className={styles.messageBanner}>{message}</div> : null}
      {error ? <div className={styles.errorBanner}>{error}</div> : null}

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Basic Information</h2>
          <p>Core metadata for the article identity and SEO.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="article-title">Display Title</label>
            <input
              id="article-title"
              placeholder="e.g. The Silk Road's Golden Age"
              value={form.title}
              onChange={(event) => handleTitleChange(event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-slug">URL Slug</label>
            <input
              id="article-slug"
              placeholder="the-silk-road-golden-age"
              value={form.slug}
              onChange={(event) => {
                setSlugTouched(true);
                handleFieldChange("slug", slugifyTitle(event.target.value));
              }}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-eyebrow">Eyebrow Text</label>
            <input
              id="article-eyebrow"
              placeholder="e.g. TANG DYNASTY TRADE"
              value={form.eyebrow}
              onChange={(event) => handleFieldChange("eyebrow", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-reading-time">Reading Time Estimate</label>
            <input
              id="article-reading-time"
              placeholder="e.g. 8 min read"
              value={form.readingTime}
              onChange={(event) => handleFieldChange("readingTime", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-label">Published Label</label>
            <input
              id="article-label"
              placeholder="e.g. Special Feature"
              value={form.publishedLabel}
              onChange={(event) => handleFieldChange("publishedLabel", event.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="article-hero-image">Hero Background Image</label>
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
            <label htmlFor="article-excerpt">Short Excerpt (SEO Summary)</label>
            <textarea
              id="article-excerpt"
              placeholder="A brief summary for card previews..."
              value={form.excerpt}
              onChange={(event) => handleFieldChange("excerpt", event.target.value)}
            />
          </div>
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label htmlFor="article-search-angle">Search Angle (Internal Context)</label>
            <textarea
              id="article-search-angle"
              placeholder="How this article fits into search results..."
              value={form.searchAngle}
              onChange={(event) => handleFieldChange("searchAngle", event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Intro & Highlights</h2>
          <p>The first impression of the article.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label htmlFor="article-key-points">Key Points (Bullet Points)</label>
            <textarea
              id="article-key-points"
              placeholder="One point per line..."
              value={form.keyPointsText}
              onChange={(event) => handleFieldChange("keyPointsText", event.target.value)}
            />
            <span className={styles.helper}>Displayed as a highlighted list.</span>
          </div>
          <div className={styles.field}>
            <label htmlFor="article-intro">Intro Paragraphs</label>
            <textarea
              id="article-intro"
              placeholder="Enter text here. Use blank lines for new paragraphs..."
              value={form.introText}
              onChange={(event) => handleFieldChange("introText", event.target.value)}
            />
            <span className={styles.helper}>The opening text of the article.</span>
          </div>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Content Sections</h2>
            <p>Visual blocks with text and images.</p>
          </div>
          <button type="button" className={styles.secondaryButton} onClick={addSection}>
            + Add Section
          </button>
        </div>
        
        <div className={styles.sectionsList}>
          {form.sections.map((section, index) => (
            <article key={`${section.title}-${index}`} className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <h3>Section #{index + 1}</h3>
                {form.sections.length > 1 ? (
                  <button
                    type="button"
                    className={styles.ghostButton}
                    onClick={() => removeSection(index)}
                  >
                    Remove Section
                  </button>
                ) : null}
              </div>
              <div className={styles.grid}>
                <div className={styles.field}>
                  <label htmlFor={`section-title-${index}`}>Section Title</label>
                  <input
                    id={`section-title-${index}`}
                    placeholder="Section Heading"
                    value={section.title}
                    onChange={(event) => handleSectionChange(index, "title", event.target.value)}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor={`section-image-${index}`}>Section Image</label>
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
                  <label htmlFor={`section-body-${index}`}>Body Text</label>
                  <textarea
                    id={`section-body-${index}`}
                    placeholder="Enter section content..."
                    value={section.bodyText}
                    onChange={(event) => handleSectionChange(index, "bodyText", event.target.value)}
                  />
                  <span className={styles.helper}>Separate paragraphs with blank lines.</span>
                </div>
                <div className={`${styles.field} ${styles.fieldWide}`}>
                  <label htmlFor={`section-bullets-${index}`}>Section Bullets (Optional)</label>
                  <textarea
                    id={`section-bullets-${index}`}
                    placeholder="One bullet per line..."
                    value={section.bulletsText}
                    onChange={(event) =>
                      handleSectionChange(index, "bulletsText", event.target.value)
                    }
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Navigation & Connectivity</h2>
          <p>Link this article to other parts of the Atlas.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>Related Articles</label>
            <div className={styles.checkboxGrid}>
              {relatedArticleOptions.length === 0 ? (
                <p className={styles.helper}>No other Mongo articles available to link.</p>
              ) : (
                relatedArticleOptions.map((option) => (
                  <label key={option.slug} className={styles.checkboxCard}>
                    <div className={styles.checkboxRow}>
                      <input
                        type="checkbox"
                        checked={form.relatedArticles.includes(option.slug)}
                        onChange={() => toggleRelatedArticle(option.slug)}
                      />
                      <div className={styles.checkboxLabel}>
                        <span className={styles.checkboxTitle}>{option.title}</span>
                        <span className={styles.checkboxSlug}>/{option.slug}</span>
                      </div>
                    </div>
                  </label>
                ))
              )}
            </div>
          </div>
          <div className={styles.field}>
            <label>Atlas Site Links</label>
            <div className={styles.checkboxGrid}>
              {siteLinkOptions.map((option) => (
                <label key={option.href} className={styles.checkboxCard}>
                  <div className={styles.checkboxRow}>
                    <input
                      type="checkbox"
                      checked={form.relatedSiteLinks.includes(option.href)}
                      onChange={() => toggleSiteLink(option.href)}
                    />
                    <div className={styles.checkboxLabel}>
                      <span className={styles.checkboxTitle}>{option.label}</span>
                      <span className={styles.checkboxSlug}>{option.href}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
