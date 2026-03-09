import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { imageCatalog, themes } from "@/data/china-content";
import { scienceHub, scienceTopicOrder, scienceTopics } from "@/data/science-content";

import styles from "./science-hub-page.module.css";

export function ScienceHubPage() {
  const theme = themes["science-and-innovation"];
  const topicList = scienceTopicOrder.map((slug) => scienceTopics[slug]);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: "/themes/science-and-innovation" },
  ];

  return (
    <article className={styles.page}>
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.hero}>
        <div className={styles.heroOrb}>
          <div className={styles.heroImageWrap}>
            <Image
              src={imageCatalog.tiangong.src}
              alt={imageCatalog.tiangong.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className={styles.orbitRing} />
          <div className={styles.orbitRingSecondary} />
        </div>

        <div className={styles.heroCopy}>
          <Link href="/" className={styles.backLink}>
            Back to map atlas
          </Link>
          <p className={styles.eyebrow}>{theme.eyebrow}</p>
          <h1>{theme.title}</h1>
          <p className={styles.subtitle}>{theme.subtitle}</p>
          <div className={styles.metrics}>
            {scienceHub.metrics.map((metric) => (
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
          <p className={styles.sectionKicker}>Science lens</p>
          <h2>Read China’s scientific rise as a sequence of technical regimes.</h2>
        </div>
        <div className={styles.deckGrid}>
          {scienceHub.deck.map((paragraph) => (
            <p key={paragraph} className={styles.deckParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.topicDeckSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Deep topics</p>
          <h2>Open the major science subjects as dedicated subpages.</h2>
        </div>
        <div className={styles.topicDeck}>
          {topicList.map((topic) => {
            const image = imageCatalog[topic.heroImage];
            return (
              <Link
                key={topic.slug}
                href={`/themes/science-and-innovation/${topic.slug}`}
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
          <p className={styles.sectionKicker}>Major transformations</p>
          <h2>Key breakthroughs and institutions across the long scientific story.</h2>
        </div>
        <div className={styles.rhythmStack}>
          {scienceHub.rhythmBlocks.map((block, index) => {
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
                    href={`/themes/science-and-innovation/${block.topicSlug}`}
                    className={styles.bandLink}
                  >
                    Read the full topic page
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Expanded chronology</p>
          <h2>The science timeline connects ancient craft, state science, and systems deployment.</h2>
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

      <section className={styles.capabilitySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Capability map</p>
          <h2>Four recurring capabilities appear across the entire history.</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {scienceHub.capabilityCards.map((card) => (
            <article key={card.title} className={styles.capabilityCard}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

    </article>
  );
}
