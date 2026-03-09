import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AdminArticleEditor } from "@/components/admin-article-editor";
import { getAdminSession } from "@/lib/admin-auth";
import { ensureCmsCollections, listPublicArticles } from "@/lib/cms";
import { adminSiteLinkOptions, getAdminImageOptions } from "@/lib/cms-options";
import { buildPageMetadata } from "@/lib/seo";

import styles from "../editor-page.module.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "New Article | China Atlas Admin",
    description: "Create a new MongoDB-backed article in the China Atlas admin panel.",
    path: "/admin/articles/new",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function NewAdminArticlePage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  await ensureCmsCollections();

  const relatedArticleOptions = (await listPublicArticles()).map((article) => ({
    slug: article.slug,
    title: article.title,
  }));

  return (
    <section className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/admin" className={styles.backLink}>
          Back to dashboard
        </Link>
        <p className={styles.intro}>Create a new draft or publish it immediately.</p>
      </div>
      <AdminArticleEditor
        article={null}
        imageOptions={getAdminImageOptions()}
        relatedArticleOptions={relatedArticleOptions}
        siteLinkOptions={[...adminSiteLinkOptions]}
      />
    </section>
  );
}
