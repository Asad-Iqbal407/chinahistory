import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { articleHub } from "@/data/article-content";
import { imageCatalog } from "@/data/china-content";
import { listPublicArticles } from "@/lib/cms";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildItemListSchema,
  buildPageMetadata,
} from "@/lib/seo";

import styles from "./page.module.css";

const pageTitle = "Articles | China Atlas";
const pageDescription =
  "Evergreen China history articles covering dynasties, major places, scientific progress, modern transformation, and key historical questions.";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/articles",
  image: imageCatalog["the-bund"].src,
  keywords: [
    "China history articles",
    "Chinese history blog",
    "China history explainers",
    "articles about Chinese civilization",
  ],
});

export default async function ArticlesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
  ];
  const allArticles = await listPublicArticles();
  const featuredArticle = allArticles[0];
  const featuredImage = imageCatalog[featuredArticle.heroImage];
  const articleItems = allArticles.map((article) => ({
    name: article.title,
    path: `/articles/${article.slug}`,
  }));

  return (
    <>
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildCollectionPageSchema({
            title: pageTitle,
            description: pageDescription,
            path: "/articles",
            image: featuredImage.src,
            keywords: [
              "China history articles",
              "Chinese history blog",
              "China history explainers",
            ],
          }),
          buildItemListSchema("China Atlas articles", "/articles", articleItems),
        ]}
      />
      <article className={styles.page}>
        <Breadcrumbs items={breadcrumbs} />

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href="/" className={styles.backLink}>
              Back to map atlas
            </Link>
            <p className={styles.eyebrow}>{articleHub.eyebrow}</p>
            <h1>{articleHub.title}</h1>
            <p className={styles.subtitle}>{articleHub.subtitle}</p>
            <div className={styles.metrics}>
              {articleHub.metrics.map((metric) => (
                <article key={metric.label} className={styles.metricCard}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.heroFeature}>
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 40vw"
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>Featured article</p>
            <h2>Start with one evergreen question and then move across the related subjects.</h2>
          </div>
          <article className={styles.featureCard}>
            <div className={styles.featureImage}>
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
              />
            </div>
            <div className={styles.featureBody}>
              <p className={styles.cardMeta}>{featuredArticle.eyebrow}</p>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <div className={styles.featureMetaRow}>
                <span className={styles.cardMeta}>{featuredArticle.readingTime}</span>
                <span className={styles.cardMeta}>{featuredArticle.publishedLabel}</span>
              </div>
              <p>{featuredArticle.searchAngle}</p>
              <Link href={`/articles/${featuredArticle.slug}`} className={styles.featureLink}>
                Read featured article
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>Editorial tracks</p>
            <h2>Build article depth around repeatable formats rather than random one-off posts.</h2>
          </div>
          <div className={styles.trackGrid}>
            {articleHub.tracks.map((track) => (
              <article key={track.title} className={styles.trackCard}>
                <h3>{track.title}</h3>
                <p>{track.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>All articles</p>
            <h2>Browse the full archive of {allArticles.length} evergreen pieces.</h2>
          </div>
          <div className={styles.articleGrid}>
            {allArticles.map((article) => {
              const image = imageCatalog[article.heroImage];

              return (
                <Link
                  key={`${article.source}-${article.slug}`}
                  href={`/articles/${article.slug}`}
                  className={styles.articleCard}
                >
                  <div className={styles.articleImage}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 30vw"
                    />
                  </div>
                  <div className={styles.articleBody}>
                    <p className={styles.cardMeta}>{article.eyebrow}</p>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <div className={styles.articleMetaRow}>
                      <span className={styles.cardMeta}>{article.readingTime}</span>
                      <span className={styles.cardMeta}>{article.publishedLabel}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}
