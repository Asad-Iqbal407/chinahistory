import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredData } from "@/components/structured-data";
import { imageCatalog } from "@/data/china-content";
import {
  historicalPlaceGroups,
  historicalPlacesHero,
} from "@/data/historical-places";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildItemListSchema,
  buildPageMetadata,
} from "@/lib/seo";

import styles from "./page.module.css";

const historicalPlacesTitle = "Historical Places | China Atlas";
const historicalPlacesDescription =
  "A curated guide to major historical places across China, from ancient cities and capitals to cave temples, canals, and modern memory sites.";
const historicalPlacesKeywords = [
  "historical places in China",
  "China landmarks history",
  "Chinese capitals and heritage sites",
  "China heritage travel guide",
];

function toAnchor(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const metadata = buildPageMetadata({
  title: historicalPlacesTitle,
  description: historicalPlacesDescription,
  path: "/historical-places",
  image: imageCatalog["great-wall-jinshanling"].src,
  keywords: historicalPlacesKeywords,
});

export default function HistoricalPlacesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Historical Places", href: "/historical-places" },
  ];
  const placeEntries = historicalPlaceGroups.flatMap((group) =>
    group.places.map((place) => ({
      name: place.name,
      path: `/historical-places#${toAnchor(`${group.slug}-${place.name}`)}`,
    })),
  );

  return (
    <>
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildCollectionPageSchema({
            title: historicalPlacesTitle,
            description: historicalPlacesDescription,
            path: "/historical-places",
            image: imageCatalog["great-wall-jinshanling"].src,
            keywords: historicalPlacesKeywords,
          }),
          buildItemListSchema("Historical places in China", "/historical-places", placeEntries),
        ]}
      />
      <article className={styles.page}>
        <Breadcrumbs items={breadcrumbs} />
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <Link href="/" className={styles.backLink}>
              Back to map atlas
            </Link>
            <p className={styles.eyebrow}>{historicalPlacesHero.eyebrow}</p>
            <h1>{historicalPlacesHero.title}</h1>
            <p className={styles.subtitle}>{historicalPlacesHero.subtitle}</p>
            <div className={styles.metrics}>
              {historicalPlacesHero.metrics.map((metric) => (
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
                src={imageCatalog["great-wall-jinshanling"].src}
                alt={imageCatalog["great-wall-jinshanling"].alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 34vw"
              />
            </div>
            <div className={styles.mosaicSmall}>
              <Image
                src={imageCatalog["terracotta-army"].src}
                alt={imageCatalog["terracotta-army"].alt}
                fill
                sizes="(max-width: 900px) 100vw, 18vw"
              />
            </div>
            <div className={styles.mosaicWide}>
              <Image
                src={imageCatalog["dunhuang-mural"].src}
                alt={imageCatalog["dunhuang-mural"].alt}
                fill
                sizes="(max-width: 900px) 100vw, 22vw"
              />
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>How to read this page</p>
            <h2>Use it as a fast historical guide to places that carry the largest weight in Chinese memory.</h2>
          </div>
          <div className={styles.introGrid}>
            <p>
              This page is a curated list rather than an exhaustive catalog. It brings
              together places that matter for origins, empire, trade, religion, war, and
              modern transformation.
            </p>
            <p>
              Some are surviving monuments, some are cities layered with several pasts,
              and some are memory sites that became important because major turning points
              happened there.
            </p>
          </div>
        </section>

        {historicalPlaceGroups.map((group, index) => {
          const image = imageCatalog[group.image];

          return (
            <section key={group.slug} className={styles.groupSection}>
              <div
                className={[
                  styles.groupIntro,
                  index % 2 === 1 ? styles.groupIntroReverse : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.groupImage}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 38vw"
                  />
                </div>
                <div className={styles.groupCopy}>
                  <p className={styles.sectionKicker}>Historical places</p>
                  <h2>{group.title}</h2>
                  <p>{group.subtitle}</p>
                </div>
              </div>

              <div className={styles.placeGrid}>
                {group.places.map((place) => (
                  <article
                    key={place.name}
                    id={toAnchor(`${group.slug}-${place.name}`)}
                    className={styles.placeCard}
                  >
                    <div className={styles.placeImage}>
                      <Image
                        src={imageCatalog[place.image].src}
                        alt={imageCatalog[place.image].alt}
                        fill
                        sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw"
                      />
                    </div>
                    <div className={styles.placeBody}>
                      <div className={styles.placeMeta}>
                        <span>{place.location}</span>
                        <span>{place.period}</span>
                      </div>
                      <h3>{place.name}</h3>
                      <p>{place.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className={styles.relatedSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionKicker}>Continue exploring</p>
            <h2>Move from geography to long-term history themes.</h2>
          </div>
          <div className={styles.relatedGrid}>
            <Link href="/articles" className={styles.relatedCard}>
              <h3>Featured Articles</h3>
              <p>Deep dives into specific historical questions and city essays.</p>
            </Link>
            <Link href="/themes/civilization" className={styles.relatedCard}>
              <h3>Civilization Themes</h3>
              <p>Explore the long arc of Chinese culture, belief, and statehood.</p>
            </Link>
            <Link href="/" className={styles.relatedCard}>
              <h3>Interactive Map</h3>
              <p>Navigate the atlas through provinces and historical corridors.</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
