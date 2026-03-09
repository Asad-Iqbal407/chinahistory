import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { imageCatalog, themes } from "@/data/china-content";
import { warTopicOrder, warTopics, warsHub } from "@/data/wars-content";

import styles from "./wars-hub-page.module.css";

export function WarsHubPage() {
  const theme = themes["wars-and-revolutions"];
  const topicList = warTopicOrder.map((slug) => warTopics[slug]);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: "/themes/wars-and-revolutions" },
  ];

  return (
    <article className={styles.page}>
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.hero}>
        <div className={styles.heroFrame}>
          <div className={styles.heroBackdrop}>
            <Image
              src={imageCatalog["battle-of-shanghai-1937"].src}
              alt={imageCatalog["battle-of-shanghai-1937"].alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className={styles.heroInset}>
            <Image
              src={imageCatalog["chinese-korean-war-poster"].src}
              alt={imageCatalog["chinese-korean-war-poster"].alt}
              fill
              sizes="(max-width: 900px) 100vw, 18vw"
            />
          </div>
          <div className={styles.heroRibbon}>
            <span>Warring States</span>
            <span>Frontier empires</span>
            <span>Taiping</span>
            <span>1937-1945</span>
            <span>Korea</span>
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
            {warsHub.metrics.map((metric) => (
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
          <p className={styles.sectionKicker}>War lens</p>
          <h2>Read Chinese history through logistics, frontiers, rebellion, and mobilization.</h2>
        </div>
        <div className={styles.deckGrid}>
          {warsHub.deck.map((paragraph) => (
            <p key={paragraph} className={styles.deckParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className={styles.logicSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Strategic logics</p>
          <h2>The recurring military pressures that kept remaking the state.</h2>
        </div>
        <div className={styles.logicGrid}>
          {warsHub.logics.map((item) => (
            <article key={item.title} className={styles.logicCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.theatreSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Main theaters</p>
          <h2>Conflict changed character as it moved across very different regions.</h2>
        </div>
        <div className={styles.theatreGrid}>
          {warsHub.theatres.map((theatre) => (
            <article key={theatre.title} className={styles.theatreCard}>
              <span>{theatre.region}</span>
              <h3>{theatre.title}</h3>
              <p>{theatre.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.topicDeckSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Subpages</p>
          <h2>Open the major war topics as dedicated long-form pages.</h2>
        </div>
        <div className={styles.topicDeck}>
          {topicList.map((topic) => {
            const image = imageCatalog[topic.heroImage];

            return (
              <Link
                key={topic.slug}
                href={`/themes/wars-and-revolutions/${topic.slug}`}
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
          <p className={styles.sectionKicker}>Conflict across eras</p>
          <h2>Five major military patterns that kept reshaping the Chinese state.</h2>
        </div>
        <div className={styles.rhythmStack}>
          {warsHub.rhythmBlocks.map((block, index) => {
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
                    href={`/themes/wars-and-revolutions/${block.topicSlug}`}
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
          <p className={styles.sectionKicker}>Chronology</p>
          <h2>The long war timeline from the Warring States to Korea.</h2>
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
