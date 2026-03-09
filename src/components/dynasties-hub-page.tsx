import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { imageCatalog, themes } from "@/data/china-content";
import {
  dynastiesHub,
  dynastyTopicOrder,
  dynastyTopics,
} from "@/data/dynasties-content";

import styles from "./dynasties-hub-page.module.css";

export function DynastiesHubPage() {
  const theme = themes.dynasties;
  const topicList = dynastyTopicOrder.map((slug) => dynastyTopics[slug]);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: "/themes/dynasties" },
  ];

  return (
    <article className={styles.page}>
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.hero}>
        <div className={styles.heroFrame}>
          <div className={styles.heroBackdrop}>
            <Image
              src={imageCatalog[theme.heroImage].src}
              alt={imageCatalog[theme.heroImage].alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
          <div className={styles.heroInset}>
            <Image
              src={imageCatalog["shang-bronze-ding"].src}
              alt={imageCatalog["shang-bronze-ding"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 18vw"
            />
          </div>
          <div className={styles.heroRibbon}>
            <span>Shang</span>
            <span>Qin-Han</span>
            <span>Tang-Song</span>
            <span>Yuan-Qing</span>
          </div>
        </div>

        <div className={styles.heroCopy}>
          <Link href="/" className={styles.backLink}>
            Back to map atlas
          </Link>
          <p className={styles.eyebrow}>{theme.eyebrow}</p>
          <h1>{theme.title}</h1>
          <p className={styles.subtitle}>{theme.subtitle}</p>
          <div className={styles.metrics}>
            {dynastiesHub.metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Dynastic lens</p>
          <h2>Read dynasties as changing solutions to the same imperial problem.</h2>
        </div>
        <div className={styles.deckGrid}>
          {dynastiesHub.deck.map((paragraph) => (
            <p key={paragraph} className={styles.deckParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.mechanicsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Imperial mechanics</p>
          <h2>The recurring forces that made dynasties durable or fragile.</h2>
        </div>
        <div className={styles.mechanicsGrid}>
          {dynastiesHub.mechanics.map((item) => (
            <article key={item.title} className={styles.mechanicCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.topicDeckSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Subpages</p>
          <h2>Open the key dynastic phases as dedicated long-form pages.</h2>
        </div>
        <div className={styles.topicDeck}>
          {topicList.map((topic) => {
            const image = imageCatalog[topic.heroImage];

            return (
              <Link
                key={topic.slug}
                href={`/themes/dynasties/${topic.slug}`}
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
          <p className={styles.sectionKicker}>Turning points</p>
          <h2>Five major shifts in how dynasties built, ruled, and lost empire.</h2>
        </div>
        <div className={styles.rhythmStack}>
          {dynastiesHub.rhythmBlocks.map((block, index) => {
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
                  <Link href={`/themes/dynasties/${block.topicSlug}`} className={styles.bandLink}>
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
          <p className={styles.sectionKicker}>Dynastic chronology</p>
          <h2>The imperial sequence from Shang to Qing at a glance.</h2>
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
