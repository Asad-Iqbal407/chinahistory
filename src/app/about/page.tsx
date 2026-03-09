import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { contactProfile } from "@/lib/contact-profile";
import {
  buildBreadcrumbSchema,
  buildPageMetadata,
} from "@/lib/seo";
import { absoluteUrl, siteConfig, siteName, siteUrl } from "@/lib/site-config";

import styles from "./page.module.css";

const pageTitle = `About | ${siteName}`;
const pageDescription =
  "Learn how China Atlas approaches long-form historical context, geography-led exploration, and feedback-led publishing, and connect with Asad Iqbal for web development work.";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const contactChannels = [
  {
    label: "Portfolio",
    value: "asadiqbal.vercel.app",
    href: contactProfile.website,
    description: "See web development work, projects, and service details.",
    badge: "PF",
  },
  {
    label: "Email",
    value: contactProfile.email,
    href: `mailto:${contactProfile.email}`,
    description: "Reach out directly for websites, admin panels, and web apps.",
    badge: "@",
  },
  {
    label: "GitHub",
    value: "github.com/Asad-Iqbal407",
    href: contactProfile.github,
    description: "Review code, projects, and public development work.",
    badge: "GH",
  },
  {
    label: "X",
    value: "@ASADIQBAL339383",
    href: contactProfile.twitter,
    description: "Message or follow for updates and project inquiries.",
    badge: "X",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/asad-iqbal-377655282",
    href: contactProfile.linkedin,
    description: "Connect for business inquiries and web development projects.",
    badge: "in",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/about",
  keywords: [
    "about China Atlas",
    "China Atlas editorial approach",
    "Asad Iqbal portfolio",
    "Next.js developer contact",
  ],
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: pageTitle,
            description: pageDescription,
            url: absoluteUrl("/about"),
            isPartOf: {
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            },
          },
        ]}
      />
      <article className={styles.page}>
        <Breadcrumbs items={breadcrumbs} />

        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <SectionHeading
              eyebrow="About China Atlas"
              titleElement="h1"
              title="A publication built around geography, continuity, and practical historical detail."
              description="China Atlas focuses on the systems behind the story: regional shifts, dynastic cycles, scientific change, long-running conflicts, and the places that carry historical weight."
            />
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.asideCard}>
              <span>Coverage</span>
              <strong>Civilization to modern transformation</strong>
            </div>
            <div className={styles.asideCard}>
              <span>Format</span>
              <strong>Maps, theme pages, timelines, and evergreen articles</strong>
            </div>
            <div className={styles.asideCard}>
              <span>Update model</span>
              <strong>Reader feedback, search intent, and structural revision</strong>
            </div>
          </aside>
        </section>

        <section className={styles.valueSection}>
          <SectionHeading
            eyebrow="Why this exists"
            title="The atlas is designed to help readers move from orientation to depth."
            description="Instead of isolated articles, the site organizes material so readers can trace how place, state formation, war, and infrastructure connect across long periods."
          />
          <div className={styles.valueGrid}>
            {siteConfig.values.map((value, index) => (
              <article key={value.title} className={styles.valueCard}>
                <span className={styles.valueNumber}>{`0${index + 1}`}</span>
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.stanceSection}>
          <div className={styles.stanceCard}>
            <div className={styles.stanceCopy}>
              <p className={styles.pill}>Editorial stance</p>
              <h2>The goal is clarity, not hype.</h2>
              <p>
                Pages should help readers understand what changed, why it mattered, and
                where the weak assumptions still are. That applies equally to early
                civilization, imperial governance, frontier conflict, treaty-port
                pressure, scientific development, and contemporary infrastructure.
              </p>
            </div>

            <div className={styles.categoryList}>
              {siteConfig.categoryHighlights.map((category) => (
                <div key={category} className={styles.categoryCard}>
                  <span className={styles.categoryCheck}>+</span>
                  <p>{category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.contactCard}>
            <div className={styles.contactCopy}>
              <p className={styles.pill}>Build with Asad Iqbal</p>
              <h2>Need a website, admin dashboard, or custom web app for your business?</h2>
              <p>
                {siteName} was built by {contactProfile.name}. If you want a modern
                business website, a Next.js application, or a MongoDB-backed platform
                with an admin panel, you can use the contact links on the right to reach
                him directly.
              </p>
              <a
                href={contactProfile.website}
                target="_blank"
                rel="noreferrer"
                className={styles.contactCta}
              >
                Visit portfolio
              </a>
            </div>

            <div className={styles.contactGrid}>
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className={styles.contactLink}
                >
                  <div className={styles.contactTop}>
                    <span className={styles.contactBadge}>{channel.badge}</span>
                    <span className={styles.contactArrow}>↗</span>
                  </div>
                  <p className={styles.contactLabel}>{channel.label}</p>
                  <p className={styles.contactValue}>{channel.value}</p>
                  <p className={styles.contactDescription}>{channel.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
