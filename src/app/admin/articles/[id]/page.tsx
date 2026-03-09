import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { AdminArticleEditor } from "@/components/admin-article-editor";
import { getAdminSession } from "@/lib/admin-auth";
import {
  ensureCmsCollections,
  getAdminArticleById,
  listPublicArticles,
} from "@/lib/cms";
import { adminSiteLinkOptions, getAdminImageOptions } from "@/lib/cms-options";
import { buildPageMetadata } from "@/lib/seo";

import styles from "../editor-page.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    ...buildPageMetadata({
      title: `Edit Article ${id} | China Atlas Admin`,
      description: "Edit a MongoDB-backed article in the China Atlas admin panel.",
      path: `/admin/articles/${id}`,
    }),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function AdminArticleEditPage({ params }: PageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  await ensureCmsCollections();

  const { id } = await params;
  const [article, publicArticles] = await Promise.all([
    getAdminArticleById(id),
    listPublicArticles(),
  ]);

  if (!article) {
    notFound();
  }

  const relatedArticleOptions = publicArticles
    .filter((entry) => entry.slug !== article.slug)
    .map((entry) => ({
      slug: entry.slug,
      title: entry.title,
    }));

  return (
    <section className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/admin" className={styles.backLink}>
          Back to dashboard
        </Link>
        <p className={styles.intro}>
          Update the article, then save as draft or publish it into the public archive.
        </p>
      </div>
      <AdminArticleEditor
        article={article}
        imageOptions={getAdminImageOptions()}
        relatedArticleOptions={relatedArticleOptions}
        siteLinkOptions={[...adminSiteLinkOptions]}
      />
    </section>
  );
}
