import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AdminFeedbackInbox } from "@/components/admin-feedback-inbox";
import { getAdminSession } from "@/lib/admin-auth";
import {
  ensureCmsCollections,
  listAdminArticles,
  listFeedbackEntries,
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

  const [adminArticles, feedbackEntries] = await Promise.all([
    listAdminArticles(),
    listFeedbackEntries(),
  ]);

  const publishedCount = adminArticles.filter((article) => article.status === "published").length;
  const draftCount = adminArticles.length - publishedCount;
  const feedbackCount = feedbackEntries.length;
  const newFeedbackCount = feedbackEntries.filter((entry) => entry.status === "new").length;
  const recentArticles = adminArticles.slice(0, 6);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.subtitle}>
            Welcome back, {session.email.split("@")[0]}. Here is what is happening with
            China Atlas.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/admin/articles/new" className={styles.primaryAction}>
            <span className={styles.icon}>+</span> Create New Article
          </Link>
        </div>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>AR</span>
            <span className={styles.statLabel}>Total Articles</span>
          </div>
          <div className={styles.statValue}>{adminArticles.length}</div>
          <p className={styles.statDesc}>Managed in MongoDB Atlas</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>OK</span>
            <span className={styles.statLabel}>Published</span>
          </div>
          <div className={styles.statValue}>{publishedCount}</div>
          <p className={styles.statDesc}>Live on the public site</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>DR</span>
            <span className={styles.statLabel}>Drafts</span>
          </div>
          <div className={styles.statValue}>{draftCount}</div>
          <p className={styles.statDesc}>Currently in progress</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span
              className={`${styles.statIcon} ${newFeedbackCount > 0 ? styles.hasNew : ""}`}
            >
              FB
            </span>
            <span className={styles.statLabel}>Feedback</span>
          </div>
          <div className={styles.statValue}>{feedbackCount}</div>
          <p className={styles.statDesc}>{newFeedbackCount} new submissions</p>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h2>Recent Articles</h2>
            <Link href="/articles" className={styles.viewAll} target="_blank">
              View Public Archive
            </Link>
          </div>

          {recentArticles.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No articles found. Start by creating your first draft.</p>
              <Link href="/admin/articles/new" className={styles.secondaryAction}>
                Create Article
              </Link>
            </div>
          ) : (
            <div className={styles.articleTableWrapper}>
              <table className={styles.articleTable}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentArticles.map((article) => (
                    <tr key={article.id}>
                      <td>
                        <div className={styles.articleTitleCell}>
                          <span className={styles.articleTitle}>{article.title}</span>
                          <span className={styles.articleSlug}>/{article.slug}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[article.status]}`}>
                          {article.status}
                        </span>
                      </td>
                      <td>{new Date(article.updatedAt).toLocaleDateString()}</td>
                      <td>
                        <div className={styles.tableActions}>
                          <Link href={`/admin/articles/${article.id}`} className={styles.editBtn}>
                            Edit
                          </Link>
                          {article.status === "published" ? (
                            <Link
                              href={`/articles/${article.slug}`}
                              className={styles.viewBtn}
                              target="_blank"
                            >
                              View
                            </Link>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className={styles.feedbackSection}>
          <div className={styles.sectionHeader}>
            <h2>Recent Feedback</h2>
          </div>
          <div className={styles.feedbackListWrapper}>
            <AdminFeedbackInbox initialEntries={feedbackEntries.slice(0, 10)} />
          </div>
        </section>
      </div>
    </div>
  );
}
