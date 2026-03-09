import Image from "next/image";
import Link from "next/link";

import { ChinaMapExplorer } from "@/components/china-map-explorer";
import {
  heroStats,
  imageCatalog,
  siteTimeline,
  themeList,
} from "@/data/china-content";

import styles from "./page.module.css";

const archiveKeys = [
  "great-wall-jinshanling",
  "treaty-of-nanking-signing",
  "tiangong",
  "pudong",
] as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Immersive China Knowledge Site</p>
          <h1>China in layers: map, memory, empire, war, science, and modern power.</h1>
          <p className={styles.heroText}>
            This site is built as a long-form atlas rather than a short summary. Use the
            map to move by region, then open deep pages on civilization, dynasties, the
            century of humiliation, wars and revolutions, scientific progress, modern
            transformation, and major historical places.
          </p>
          <div className={styles.heroActions}>
            <Link href="/themes/civilization" className={styles.primaryCta}>
              Start with civilization
            </Link>
            <Link href="/historical-places" className={styles.secondaryCta}>
              Browse historical places
            </Link>
            <Link href="/themes/science-and-innovation" className={styles.secondaryCta}>
              Jump to science and innovation
            </Link>
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.heroPanelImage}>
            <Image
              src={imageCatalog.pudong.src}
              alt={imageCatalog.pudong.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className={styles.heroPanelBody}>
            <p className={styles.panelKicker}>What this covers</p>
            <ul className={styles.panelList}>
              <li>Early farming, writing, belief, and regional civilizational zones</li>
              <li>Historical places, capitals, cave temples, canals, and frontier sites</li>
              <li>Imperial dynasties, capitals, institutions, and collapse patterns</li>
              <li>Nineteenth- and twentieth-century foreign pressure, reform, and recovery</li>
              <li>Military history from frontier strategy to revolutionary warfare</li>
              <li>Scientific traditions, space, rail, telecoms, and modern infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.statGrid}>
        {heroStats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className={styles.mapSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Explore by geography</p>
          <h2>Hover provinces, follow corridors, and open the major themes from the map.</h2>
          <p>
            The map highlights how historical meaning changes by place: classical
            heartland, Silk Road corridors, treaty ports, wartime interiors, and modern
            innovation zones.
          </p>
        </div>
        <ChinaMapExplorer />
      </section>

      <section className={styles.themeSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Theme pages</p>
          <h2>
            Each category has its own dense page with a timeline, narrative sections, and
            rich visuals.
          </h2>
        </div>
        <div className={styles.themeGrid}>
          <Link href="/historical-places" className={styles.themeCard}>
            <div className={styles.themeImage}>
              <Image
                src={imageCatalog["great-wall-jinshanling"].src}
                alt={imageCatalog["great-wall-jinshanling"].alt}
                fill
                sizes="(max-width: 900px) 100vw, 30vw"
              />
            </div>
            <div className={styles.themeBody}>
              <p className={styles.themeEyebrow}>Landmarks and sites</p>
              <h3>Historical Places</h3>
              <p>
                A fast guide to major places across China, with short descriptions of the
                sites that carry the most historical weight.
              </p>
              <span className={styles.themeMeta}>Across all eras</span>
            </div>
          </Link>
          {themeList.map((theme) => {
            const image = imageCatalog[theme.heroImage];

            return (
              <Link key={theme.slug} href={`/themes/${theme.slug}`} className={styles.themeCard}>
                <div className={styles.themeImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 30vw"
                  />
                </div>
                <div className={styles.themeBody}>
                  <p className={styles.themeEyebrow}>{theme.eyebrow}</p>
                  <h3>{theme.title}</h3>
                  <p>{theme.preview}</p>
                  <span className={styles.themeMeta}>{theme.periodLabel}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Long arc</p>
          <h2>A fast chronology before you dive into the detailed pages.</h2>
        </div>
        <div className={styles.timelineGrid}>
          {siteTimeline.map((era) => (
            <article key={era.era} className={styles.timelineCard}>
              <p className={styles.timelineSpan}>{era.span}</p>
              <h3>{era.era}</h3>
              <p>{era.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.archiveSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Visual archive</p>
          <h2>Selected visuals from across the atlas.</h2>
        </div>
        <div className={styles.archiveGrid}>
          {archiveKeys.map((key) => {
            const image = imageCatalog[key];

            return (
              <figure key={key} className={styles.archiveCard}>
                <div className={styles.archiveImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 25vw"
                  />
                </div>
                <figcaption>
                  <strong>{image.creditLabel}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}
