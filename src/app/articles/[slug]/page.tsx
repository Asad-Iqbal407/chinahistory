import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { articleOrder } from "@/data/article-content";
import { imageCatalog } from "@/data/china-content";
import { getPublicArticle, listPublicArticles } from "@/lib/cms";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return articleOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublicArticle(slug);

  if (!article) {
    return { title: "Article not found | China Atlas" };
  }

  return buildPageMetadata({
    title: `${article.title} | China Atlas`,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    image: imageCatalog[article.heroImage].src,
    keywords: [article.title, "China history article", article.eyebrow],
    type: "article",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getPublicArticle(slug);

  if (!article) {
    notFound();
  }

  const heroImage = imageCatalog[article.heroImage];
  const allArticles = await listPublicArticles();
  const relatedArticles = article.relatedArticles
    .map((relatedSlug) => allArticles.find((candidate) => candidate.slug === relatedSlug))
    .filter((candidate): candidate is (typeof allArticles)[number] => Boolean(candidate));
  const articlePath = `/articles/${article.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: article.title, href: articlePath },
  ];

  return (
    <article className={styles.page} style={{ "--article-accent": "#c35a2b" } as CSSProperties}>
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildArticleSchema({
            title: article.title,
            description: article.excerpt,
            path: articlePath,
            image: heroImage.src,
            section: "Articles",
            keywords: [article.title, "China history article", article.eyebrow],
          }),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 42vw"
          />
        </div>
        <div className={styles.heroCopy}>
          <Link href="/articles" className={styles.backLink}>
            Back to articles
          </Link>
          <p className={styles.eyebrow}>{article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>
          <div className={styles.metaRow}>
            <span className={styles.metaChip}>{article.readingTime}</span>
            <span className={styles.metaChip}>{article.publishedLabel}</span>
            <span className={styles.metaChip}>{article.searchAngle}</span>
          </div>
        </div>
      </section>

      <section className={styles.keyPointsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>At a glance</p>
          <h2>Start with the main argument before reading the longer sections.</h2>
        </div>
        <div className={styles.keyPointGrid}>
          {article.keyPoints.map((point) => (
            <article key={point} className={styles.keyPointCard}>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Article</p>
          <h2>The article uses places, systems, and chronology rather than isolated facts.</h2>
        </div>
        <div className={styles.bandStack}>
          {article.sections.map((section, index) => {
            const image = imageCatalog[section.image];

            return (
              <article
                key={section.title}
                className={[
                  styles.sectionBand,
                  index % 2 === 1 ? styles.reverseBand : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <figure className={styles.sectionImageCard}>
                  <div className={styles.sectionImage}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 40vw"
                    />
                  </div>
                  <figcaption className={styles.pullMeta}>{image.creditLabel}</figcaption>
                </figure>
                <div className={styles.sectionCopy}>
                  <h3>{section.title}</h3>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Read next</p>
          <h2>Move laterally across the archive instead of stopping at one article.</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedArticles.map((related) => {
            const image = imageCatalog[related.heroImage];

            return (
              <Link key={related.slug} href={`/articles/${related.slug}`} className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 40vw"
                  />
                </div>
                <div className={styles.relatedBody}>
                  <p className={styles.pullMeta}>{related.eyebrow}</p>
                  <h3>{related.title}</h3>
                  <span>{related.excerpt}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.siteLinksSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Deeper site links</p>
          <h2>Use the article as a gateway into the larger atlas.</h2>
        </div>
        <div className={styles.siteLinkGrid}>
          {article.relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className={styles.siteLinkCard}>
              <h3>{item.label}</h3>
              <p>Open the related atlas section and continue through the linked historical context.</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
