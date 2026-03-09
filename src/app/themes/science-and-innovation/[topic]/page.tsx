import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { imageCatalog } from "@/data/china-content";
import {
  getScienceTopic,
  scienceTopicOrder,
  scienceTopics,
} from "@/data/science-content";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return scienceTopicOrder.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const scienceTopic = getScienceTopic(topic);

  if (!scienceTopic) {
    return { title: "Science topic not found | China Atlas" };
  }

  return buildPageMetadata({
    title: `${scienceTopic.title} | China Atlas`,
    description: scienceTopic.preview,
    path: `/themes/science-and-innovation/${scienceTopic.slug}`,
    image: imageCatalog[scienceTopic.heroImage].src,
    keywords: [scienceTopic.shortTitle, "China science", "Chinese scientific progress"],
    type: "article",
  });
}

export default async function ScienceTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const scienceTopic = getScienceTopic(topic);

  if (!scienceTopic) {
    notFound();
  }

  const heroImage = imageCatalog[scienceTopic.heroImage];
  const relatedTopics = scienceTopic.related.map((slug) => scienceTopics[slug]);
  const topicPath = `/themes/science-and-innovation/${scienceTopic.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Science and Innovation", href: "/themes/science-and-innovation" },
    { label: scienceTopic.title, href: topicPath },
  ];

  return (
    <article className={styles.page} style={{ "--topic-accent": scienceTopic.accent } as CSSProperties}>
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildArticleSchema({
            title: scienceTopic.title,
            description: scienceTopic.preview,
            path: topicPath,
            image: heroImage.src,
            section: "Science and Innovation",
            keywords: [
              scienceTopic.shortTitle,
              "China science",
              "Chinese scientific progress",
            ],
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
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className={styles.heroCopy}>
          <Link href="/themes/science-and-innovation" className={styles.backLink}>
            Back to science hub
          </Link>
          <p className={styles.eyebrow}>{scienceTopic.shortTitle}</p>
          <h1>{scienceTopic.title}</h1>
          <p className={styles.subtitle}>{scienceTopic.subtitle}</p>
          <div className={styles.factGrid}>
            {scienceTopic.quickFacts.map((fact) => (
              <article key={fact.label} className={styles.factCard}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Orientation</p>
          <h2>Why this topic matters inside the wider science story.</h2>
        </div>
        <div className={styles.introGrid}>
          {scienceTopic.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.milestoneSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Milestones</p>
          <h2>Anchor points for the long explanation below.</h2>
        </div>
        <div className={styles.milestoneGrid}>
          {scienceTopic.milestones.map((milestone) => (
            <article key={`${milestone.year}-${milestone.title}`} className={styles.milestoneCard}>
              <span>{milestone.year}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.chapterSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Detailed chapters</p>
          <h2>Follow the topic through its major stages, institutions, and breakthroughs.</h2>
        </div>
        <div className={styles.chapterStack}>
          {scienceTopic.chapters.map((chapter, index) => {
            const image = imageCatalog[chapter.image];

            return (
              <article
                key={chapter.title}
                className={[
                  styles.chapterCard,
                  index % 2 === 1 ? styles.chapterReverse : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <figure className={styles.chapterImageCard}>
                  <div className={styles.chapterImage}>
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 40vw" />
                  </div>
                  <figcaption>
                    <strong>{image.creditLabel}</strong>
                  </figcaption>
                </figure>
                <div className={styles.chapterCopy}>
                  <h3>{chapter.title}</h3>
                  {chapter.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {chapter.bullets ? (
                    <ul className={styles.bulletList}>
                      {chapter.bullets.map((bullet) => (
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
          <p className={styles.sectionKicker}>Next reads</p>
          <h2>Move sideways through the science mini-site.</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedTopics.map((related) => {
            const image = imageCatalog[related.heroImage];
            return (
              <Link
                key={related.slug}
                href={`/themes/science-and-innovation/${related.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className={styles.relatedBody}>
                  <p>{related.shortTitle}</p>
                  <h3>{related.title}</h3>
                  <span>{related.preview}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </article>
  );
}
