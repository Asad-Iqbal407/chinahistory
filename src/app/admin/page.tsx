import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AdminFeedbackInbox } from "@/components/admin-feedback-inbox";
import { AdminLogoutButton } from "@/components/admin-logout-button";
import { getAdminSession } from "@/lib/admin-auth";
import {
  ensureCmsCollections,
  listAdminArticles,
  listFeedbackEntries,
  listPublicArticles,
} from "@/lib/cms";
import { buildPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Admin Dashboard | China Atlas",
    description: "Manage MongoDB-backed China Atlas articles.",
    path: "/admin",
    keywords: ["China Atlas admin dashboard"],
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  await ensureCmsCollections();

  const [adminArticles, publicArticles, feedbackEntries] = await Promise.all([
    listAdminArticles(),
    listPublicArticles(),
    listFeedbackEntries(),
  ]);

  const publishedCount = adminArticles.filter((article) => article.status === "published").length;
  const draftCount = adminArticles.length - publishedCount;
  const feedbackCount = feedbackEntries.length;
  const newFeedbackCount = feedbackEntries.filter((entry) => entry.status === "new").length;
  const recentArticles = adminArticles.slice(0, 6);

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Private publishing room</p>
          <h1>Write, publish, and respond from one admin workspace.</h1>
          <p>
            Signed in as {session.email}. Mongo-backed posts go live in the article archive, and
            public feedback lands here as an inbox instead of getting lost.
          </p>
          <div className={styles.heroRibbon}>
            <span>Hidden from public navigation</span>
            <span>Mongo-backed publishing</span>
            <span>Reader feedback inbox</span>
          </div>
        </div>
        <div className={styles.heroActions}>
          <Link href="/admin/articles/new" className={styles.primaryLink}>
            New article
          </Link>
          <Link href="/articles" className={styles.secondaryLink}>
            View public archive
          </Link>
          <AdminLogoutButton className={styles.logoutButton} />
        </div>
      </div>

      <div className={styles.stats}>
        <article className={styles.statCard}>
          <span>Mongo articles</span>
          <strong>{adminArticles.length}</strong>
          <p>All drafts and published posts stored in Atlas.</p>
        </article>
        <article className={styles.statCard}>
          <span>Published</span>
          <strong>{publishedCount}</strong>
          <p>Live public posts merged into the archive immediately.</p>
        </article>
        <article className={styles.statCard}>
          <span>Drafts</span>
          <strong>{draftCount}</strong>
          <p>Posts still being shaped before public release.</p>
        </article>
        <article className={styles.statCard}>
          <span>Feedback inbox</span>
          <strong>{feedbackCount}</strong>
          <p>{newFeedbackCount} still marked new.</p>
        </article>
        <article className={styles.statCard}>
          <span>Total public archive</span>
          <strong>{publicArticles.length}</strong>
          <p>Static atlas essays plus published Mongo articles.</p>
        </article>
      </div>

      <div className={styles.contentGrid}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Publishing system</h2>
              <p>Use this as the writing queue for new articles and revisions.</p>
            </div>
            <Link href="/admin/articles/new" className={styles.secondaryLink}>
              Create article
            </Link>
          </div>
          <div className={styles.workflowGrid}>
            <article className={styles.workflowCard}>
              <span className={styles.workflowStep}>1</span>
              <h3>Draft</h3>
              <p>Write the structure, choose atlas visuals, and set internal backlinks.</p>
            </article>
            <article className={styles.workflowCard}>
              <span className={styles.workflowStep}>2</span>
              <h3>Review</h3>
              <p>Check slug clarity, article angle, and whether the page fits the archive.</p>
            </article>
            <article className={styles.workflowCard}>
              <span className={styles.workflowStep}>3</span>
              <h3>Publish</h3>
              <p>The post appears in `/articles` without needing a rebuild or code edit.</p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Feedback inbox</h2>
              <p>Reader comments, corrections, and ideas land here.</p>
            </div>
            <Link href="/feedback" className={styles.secondaryLink}>
              Open public form
            </Link>
          </div>
          <AdminFeedbackInbox initialEntries={feedbackEntries} />
        </section>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Recent article library</h2>
            <p>Drafts stay private. Published posts appear immediately in the public archive.</p>
          </div>
          <Link href="/articles" className={styles.secondaryLink}>
            View archive
          </Link>
        </div>
        {recentArticles.length === 0 ? (
          <p className={styles.emptyState}>
            No Mongo articles yet. Create the first draft to start publishing from the admin panel.
          </p>
        ) : (
          <div className={styles.articleList}>
            {recentArticles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleTopline}>
                  <span className={styles.articleStatus}>{article.status}</span>
                  <span className={styles.articleSlug}>/articles/{article.slug}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className={styles.articleMeta}>
                  <span>Updated {new Date(article.updatedAt).toLocaleString()}</span>
                  <span>{article.readingTime}</span>
                </div>
                <div className={styles.articleActions}>
                  <Link href={`/admin/articles/${article.id}`} className={styles.secondaryLink}>
                    Edit
                  </Link>
                  {article.status === "published" ? (
                    <Link href={`/articles/${article.slug}`} className={styles.secondaryLink}>
                      Open public page
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
