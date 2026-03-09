import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CivilizationHubPage } from "@/components/civilization-hub-page";
import { DynastiesHubPage } from "@/components/dynasties-hub-page";
import { ModernHubPage } from "@/components/modern-hub-page";
import { ScienceHubPage } from "@/components/science-hub-page";
import { StructuredData } from "@/components/structured-data";
import { WarsHubPage } from "@/components/wars-hub-page";
import { civilizationTopicOrder, civilizationTopics } from "@/data/civilization-content";
import { dynastyTopicOrder, dynastyTopics } from "@/data/dynasties-content";
import { getTheme, imageCatalog, themeOrder, themes } from "@/data/china-content";
import { modernTopicOrder, modernTopics } from "@/data/modern-content";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildItemListSchema,
  buildPageMetadata,
} from "@/lib/seo";
import { scienceTopicOrder, scienceTopics } from "@/data/science-content";
import { warTopicOrder, warTopics } from "@/data/wars-content";

import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return themeOrder.map((slug) => ({ slug }));
}

function getThemeItemList(slug: string) {
  if (slug === "civilization") {
    return civilizationTopicOrder.map((topic) => ({
      name: civilizationTopics[topic].title,
      path: `/themes/civilization/${topic}`,
    }));
  }

  if (slug === "dynasties") {
    return dynastyTopicOrder.map((topic) => ({
      name: dynastyTopics[topic].title,
      path: `/themes/dynasties/${topic}`,
    }));
  }

  if (slug === "science-and-innovation") {
    return scienceTopicOrder.map((topic) => ({
      name: scienceTopics[topic].title,
      path: `/themes/science-and-innovation/${topic}`,
    }));
  }

  if (slug === "wars-and-revolutions") {
    return warTopicOrder.map((topic) => ({
      name: warTopics[topic].title,
      path: `/themes/wars-and-revolutions/${topic}`,
    }));
  }

  if (slug === "modern-transformation") {
    return modernTopicOrder.map((topic) => ({
      name: modernTopics[topic].title,
      path: `/themes/modern-transformation/${topic}`,
    }));
  }

  return undefined;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = getTheme(slug);

  if (!theme) {
    return { title: "Theme not found | China Atlas" };
  }

  return buildPageMetadata({
    title: `${theme.title} | China Atlas`,
    description: theme.preview,
    path: `/themes/${theme.slug}`,
    image: imageCatalog[theme.heroImage].src,
    keywords: [theme.title, theme.navLabel, theme.eyebrow],
  });
}

export default async function ThemePage({ params }: PageProps) {
  const { slug } = await params;
  const theme = getTheme(slug);

  if (!theme) {
    notFound();
  }

  const themePath = `/themes/${theme.slug}`;
  const heroImage = imageCatalog[theme.heroImage];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: theme.title, href: themePath },
  ];
  const themeSchemas: Array<Record<string, unknown>> = [
    buildBreadcrumbSchema(breadcrumbs),
    buildCollectionPageSchema({
      title: `${theme.title} | China Atlas`,
      description: theme.preview,
      path: themePath,
      image: heroImage.src,
      keywords: [theme.title, theme.navLabel, theme.eyebrow],
    }),
  ];
  const themeItemList = getThemeItemList(theme.slug);

  if (themeItemList) {
    themeSchemas.push(buildItemListSchema(`${theme.title} topics`, themePath, themeItemList));
  }

  if (theme.slug === "civilization") {
    return (
      <>
        <StructuredData data={themeSchemas} />
        <CivilizationHubPage />
      </>
    );
  }

  if (theme.slug === "dynasties") {
    return (
      <>
        <StructuredData data={themeSchemas} />
        <DynastiesHubPage />
      </>
    );
  }

  if (theme.slug === "science-and-innovation") {
    return (
      <>
        <StructuredData data={themeSchemas} />
        <ScienceHubPage />
      </>
    );
  }

  if (theme.slug === "wars-and-revolutions") {
    return (
      <>
        <StructuredData data={themeSchemas} />
        <WarsHubPage />
      </>
    );
  }

  if (theme.slug === "modern-transformation") {
    return (
      <>
        <StructuredData data={themeSchemas} />
        <ModernHubPage />
      </>
    );
  }

  const relatedThemes = theme.relatedThemes.map((relatedSlug) => themes[relatedSlug]);

  return (
    <article className={styles.page} style={{ "--accent": theme.accent } as CSSProperties}>
      <StructuredData data={themeSchemas} />
      <Breadcrumbs items={breadcrumbs} />
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/" className={styles.backLink}>
            Back to map atlas
          </Link>
          <p className={styles.eyebrow}>{theme.eyebrow}</p>
          <h1>{theme.title}</h1>
          <p className={styles.heroSubtitle}>{theme.subtitle}</p>
          <div className={styles.factRibbon}>
            {theme.quickFacts.map((fact) => (
              <div key={fact.label} className={styles.factChip}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Orientation</p>
          <h2>{theme.periodLabel}</h2>
        </div>
        <div className={styles.introGrid}>
          {theme.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.insightSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Key ideas</p>
          <h2>The main lenses for reading this theme.</h2>
        </div>
        <div className={styles.insightGrid}>
          {theme.insightCards.map((card) => (
            <article key={card.title} className={styles.insightCard}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Timeline</p>
          <h2>Essential moments in sequence.</h2>
        </div>
        <div className={styles.timelineList}>
          {theme.timeline.map((entry) => (
            <article key={`${entry.year}-${entry.title}`} className={styles.timelineEntry}>
              <span>{entry.year}</span>
              <div>
                <h3>{entry.title}</h3>
                <p>{entry.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionsBlock}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Deep read</p>
          <h2>Long-form sections rather than short notes.</h2>
        </div>
        <div className={styles.storyGrid}>
          {theme.sections.map((section) => (
            <article key={section.title} className={styles.storyCard}>
              <h3>{section.title}</h3>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className={styles.bulletList}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Visuals</p>
          <h2>A visual guide to this theme.</h2>
        </div>
        <div className={styles.galleryGrid}>
          {theme.gallery.map((imageKey) => {
            const image = imageCatalog[imageKey];

            return (
              <figure key={imageKey} className={styles.galleryCard}>
                <div className={styles.galleryImage}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <figcaption>
                  <strong>{image.creditLabel}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionKicker}>Continue</p>
          <h2>Open related pages to connect this theme with the wider site.</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedThemes.map((relatedTheme) => {
            const image = imageCatalog[relatedTheme.heroImage];

            return (
              <Link
                key={relatedTheme.slug}
                href={`/themes/${relatedTheme.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedImage}>
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 30vw" />
                </div>
                <div className={styles.relatedBody}>
                  <p>{relatedTheme.eyebrow}</p>
                  <h3>{relatedTheme.title}</h3>
                  <span>{relatedTheme.periodLabel}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </article>
  );
}
