import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { imageCatalog, themes } from "@/data/china-content";
import {
  civilizationHub,
  civilizationTopicOrder,
  civilizationTopics,
} from "@/data/civilization-content";

import styles from "./civilization-hub-page.module.css";

export function CivilizationHubPage() {
  const theme = themes.civilization;
  const topicList = civilizationTopicOrder.map((slug) => civilizationTopics[slug]);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: "/themes/civilization" },
  ];

  return (
    <article className={styles.page}>
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <Link href="/" className={styles.backLink}>
            Back to map atlas
          </Link>
          <p className={styles.eyebrow}>{theme.eyebrow}</p>
          <h1>{theme.title}</h1>
          <p className={styles.subtitle}>{theme.subtitle}</p>
          <div className={styles.metrics}>
            {civilizationHub.metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.heroMosaic}>
          <div className={styles.mosaicMain}>
            <Image
              src={imageCatalog["liangzhu-jade-cong"].src}
              alt={imageCatalog["liangzhu-jade-cong"].alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </div>
          <div className={styles.mosaicSmall}>
            <Image
              src={imageCatalog["oracle-bone"].src}
              alt={imageCatalog["oracle-bone"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 18vw"
            />
          </div>
          <div className={styles.mosaicWide}>
            <Image
              src={imageCatalog["suzhou-grand-canal"].src}
              alt={imageCatalog["suzhou-grand-canal"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 22vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Civilization lens</p>
          <h2>Look past dynasties and focus on the systems that kept memory, belief, and movement alive.</h2>
        </div>
        <div className={styles.deckGrid}>
          {civilizationHub.deck.map((paragraph) => (
            <p key={paragraph} className={styles.deckParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.threadSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Civilizational threads</p>
          <h2>Four recurring forces show up in every era of Chinese civilization.</h2>
        </div>
        <div className={styles.threadGrid}>
          {civilizationHub.civilizationalThreads.map((thread) => (
            <article key={thread.title} className={styles.threadCard}>
              <h3>{thread.title}</h3>
              <p>{thread.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.topicDeckSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Subpages</p>
          <h2>Open the important civilization topics as dedicated deep-reading pages.</h2>
        </div>
        <div className={styles.topicDeck}>
          {topicList.map((topic) => {
            const image = imageCatalog[topic.heroImage];

            return (
              <Link
                key={topic.slug}
                href={`/themes/civilization/${topic.slug}`}
                className={styles.topicCard}
              >
                <div className={styles.topicImage}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className={styles.topicBody}>
                  <p>{topic.shortTitle}</p>
                  <h3>{topic.title}</h3>
                  <span>{topic.preview}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.rhythmSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Key continuities</p>
          <h2>Five long-running strands that shaped Chinese civilization across time and space.</h2>
        </div>
        <div className={styles.rhythmStack}>
          {civilizationHub.rhythmBlocks.map((block, index) => {
            const image = imageCatalog[block.image];

            return (
              <article
                key={block.title}
                className={[
                  styles.rhythmBand,
                  index % 2 === 1 ? styles.reverseBand : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <figure className={styles.rhythmImageCard}>
                  <div className={styles.rhythmImage}>
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 42vw" />
                  </div>
                  <figcaption>
                    <strong>{image.creditLabel}</strong>
                  </figcaption>
                </figure>

                <div className={styles.rhythmCopy}>
                  <p className={styles.bandEyebrow}>{block.eyebrow}</p>
                  <h3>{block.title}</h3>
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <ul className={styles.bandList}>
                    {block.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/themes/civilization/${block.topicSlug}`}
                    className={styles.bandLink}
                  >
                    Open detailed subpage
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Long chronology</p>
          <h2>The civilizational story runs from Neolithic settlements to regional high cultures.</h2>
        </div>
        <div className={styles.timelineGrid}>
          {theme.timeline.map((entry) => (
            <article key={`${entry.year}-${entry.title}`} className={styles.timelineCard}>
              <span>{entry.year}</span>
              <h3>{entry.title}</h3>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

    </article>
  );
}
