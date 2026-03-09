import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { imageCatalog } from "@/data/china-content";
import { getWarTopic, warTopicOrder, warTopics } from "@/data/wars-content";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ topic: string }>;
};

export function generateStaticParams() {
  return warTopicOrder.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const warTopic = getWarTopic(topic);

  if (!warTopic) {
    return { title: "War topic not found | China Atlas" };
  }

  return {
    title: `${warTopic.title} | China Atlas`,
    description: warTopic.preview,
  };
}

export default async function WarTopicPage({ params }: PageProps) {
  const { topic } = await params;
  const warTopic = getWarTopic(topic);

  if (!warTopic) {
    notFound();
  }

  const heroImage = imageCatalog[warTopic.heroImage];
  const relatedTopics = warTopic.related.map((slug) => warTopics[slug]);

  return (
    <article className={styles.page} style={{ "--topic-accent": warTopic.accent } as CSSProperties}>
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
          <Link href="/themes/wars-and-revolutions" className={styles.backLink}>
            Back to wars hub
          </Link>
          <p className={styles.eyebrow}>{warTopic.shortTitle}</p>
          <h1>{warTopic.title}</h1>
          <p className={styles.subtitle}>{warTopic.subtitle}</p>
          <div className={styles.factGrid}>
            {warTopic.quickFacts.map((fact) => (
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
          <h2>This subpage expands one war topic in depth.</h2>
        </div>
        <div className={styles.introGrid}>
          {warTopic.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.milestoneSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Milestones</p>
          <h2>A war sequence before the long-form chapters.</h2>
        </div>
        <div className={styles.milestoneGrid}>
          {warTopic.milestones.map((milestone) => (
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
          <h2>Follow the campaigns, institutions, and consequences that shaped this conflict.</h2>
        </div>
        <div className={styles.chapterStack}>
          {warTopic.chapters.map((chapter, index) => {
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
          <h2>Move through the rest of the wars mini-site.</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedTopics.map((related) => {
            const image = imageCatalog[related.heroImage];

            return (
              <Link
                key={related.slug}
                href={`/themes/wars-and-revolutions/${related.slug}`}
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
