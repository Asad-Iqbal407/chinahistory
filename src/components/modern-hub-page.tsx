import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { imageCatalog, themes } from "@/data/china-content";
import { modernHub, modernTopicOrder, modernTopics } from "@/data/modern-content";

import styles from "./modern-hub-page.module.css";

export function ModernHubPage() {
  const theme = themes["modern-transformation"];
  const topicList = modernTopicOrder.map((slug) => modernTopics[slug]);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: "/themes/modern-transformation" },
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
            {modernHub.metrics.map((metric) => (
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
              src={imageCatalog.pudong.src}
              alt={imageCatalog.pudong.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </div>
          <div className={styles.mosaicSmall}>
            <Image
              src={imageCatalog["first-train-of-oil-daqing"].src}
              alt={imageCatalog["first-train-of-oil-daqing"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 18vw"
            />
          </div>
          <div className={styles.mosaicWide}>
            <Image
              src={imageCatalog["longyangxia-solar"].src}
              alt={imageCatalog["longyangxia-solar"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 22vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Modern lens</p>
          <h2>Read modern China as a stack of changing development regimes, not one simple growth line.</h2>
        </div>
        <div className={styles.deckGrid}>
          {modernHub.deck.map((paragraph) => (
            <p key={paragraph} className={styles.deckParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Transformation logics</p>
          <h2>Four recurring forces explain most of the modern story.</h2>
        </div>
        <div className={styles.systemGrid}>
          {modernHub.systemCards.map((card) => (
            <article key={card.title} className={styles.systemCard}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.regionSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Regional engines</p>
          <h2>Modern China runs through clusters and corridors rather than one dominant city alone.</h2>
        </div>
        <div className={styles.regionGrid}>
          {modernHub.regionalEngines.map((engine) => (
            <article key={engine.title} className={styles.regionCard}>
              <span>{engine.region}</span>
              <h3>{engine.title}</h3>
              <p>{engine.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.topicDeckSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Subpages</p>
          <h2>Open the major modern-China topics as dedicated deep-reading pages.</h2>
        </div>
        <div className={styles.topicDeck}>
          {topicList.map((topic) => {
            const image = imageCatalog[topic.heroImage];

            return (
              <Link
                key={topic.slug}
                href={`/themes/modern-transformation/${topic.slug}`}
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
          <p className={styles.sectionKicker}>Major transitions</p>
          <h2>Five shifts that define the modern transformation from 1949 to the present.</h2>
        </div>
        <div className={styles.rhythmStack}>
          {modernHub.rhythmBlocks.map((block, index) => {
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
                    href={`/themes/modern-transformation/${block.topicSlug}`}
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
          <p className={styles.sectionKicker}>Modern chronology</p>
          <h2>The sequence from 1949 reconstruction to the current green-industrial push.</h2>
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
