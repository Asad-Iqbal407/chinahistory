import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { imageCatalog } from "@/data/china-content";
import {
  dynastyTopicOrder,
  dynastyTopics,
  getDynastyTopic,
} from "@/data/dynasties-content";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return dynastyTopicOrder.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const dynastyTopic = getDynastyTopic(topic);

  if (!dynastyTopic) {
    return { title: "Dynasty topic not found | China Atlas" };
  }

  return {
    title: `${dynastyTopic.title} | China Atlas`,
    description: dynastyTopic.preview,
  };
}

export default async function DynastyTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const dynastyTopic = getDynastyTopic(topic);

  if (!dynastyTopic) {
    notFound();
  }

  const heroImage = imageCatalog[dynastyTopic.heroImage];
  const relatedTopics = dynastyTopic.related.map((slug) => dynastyTopics[slug]);

  return (
    <article className={styles.page} style={{ "--topic-accent": dynastyTopic.accent } as CSSProperties}>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className={styles.heroCopy}>
          <Link href="/themes/dynasties" className={styles.backLink}>
            Back to dynasties hub
          </Link>
          <p className={styles.eyebrow}>{dynastyTopic.shortTitle}</p>
          <h1>{dynastyTopic.title}</h1>
          <p className={styles.subtitle}>{dynastyTopic.subtitle}</p>
          <div className={styles.factGrid}>
            {dynastyTopic.quickFacts.map((fact) => (
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
          <h2>This subpage expands one dynastic phase in depth.</h2>
        </div>
        <div className={styles.introGrid}>
          {dynastyTopic.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.milestoneSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Milestones</p>
          <h2>A dynastic sequence before the long-form chapters.</h2>
        </div>
        <div className={styles.milestoneGrid}>
          {dynastyTopic.milestones.map((milestone) => (
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
          <h2>Follow the institutions, crises, and cultural shifts that defined this phase.</h2>
        </div>
        <div className={styles.chapterStack}>
          {dynastyTopic.chapters.map((chapter, index) => {
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
          <p className={styles.sectionKicker}>Continue reading</p>
          <h2>Move through the rest of the dynasties mini-site.</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedTopics.map((related) => {
            const image = imageCatalog[related.heroImage];

            return (
              <Link
                key={related.slug}
                href={`/themes/dynasties/${related.slug}`}
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
