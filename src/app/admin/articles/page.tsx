import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getAdminSession } from "@/lib/admin-auth";
import { ensureCmsCollections, listAdminArticles } from "@/lib/cms";
import { buildPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "All Articles | China Atlas Admin",
    description: "Manage all MongoDB-backed articles.",
    path: "/admin/articles",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminArticlesListPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  await ensureCmsCollections();
  const articles = await listAdminArticles();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Articles Library</h1>
          <p className={styles.subtitle}>Manage your published content and drafts.</p>
        </div>
        <Link href="/admin/articles/new" className={styles.primaryAction}>
          + New Article
        </Link>
      </header>

      <div className={styles.content}>
        {articles.length === 0 ? (
          <div className={styles.empty}>
            <p>No articles found. Start by creating your first piece of content.</p>
            <Link href="/admin/articles/new" className={styles.primaryAction}>Create Article</Link>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Title & Slug</th>
                  <th>Status</th>
                  <th>Reading Time</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>
                      <div className={styles.titleCell}>
                        <span className={styles.articleTitle}>{article.title}</span>
                        <span className={styles.articleSlug}>/{article.slug}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[article.status]}`}>
                        {article.status}
                      </span>
                    </td>
                    <td>{article.readingTime}</td>
                    <td>{new Date(article.updatedAt).toLocaleDateString()}</td>
                    <td>
                      <div className={styles.actions}>
                        <Link href={`/admin/articles/${article.id}`} className={styles.editBtn}>Edit</Link>
                        {article.status === 'published' && (
                          <Link href={`/articles/${article.slug}`} className={styles.viewBtn} target="_blank">View</Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
