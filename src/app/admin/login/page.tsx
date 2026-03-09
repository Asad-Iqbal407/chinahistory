import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AdminLoginForm } from "@/components/admin-login-form";
import { getAdminSession } from "@/lib/admin-auth";
import { buildPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Admin Login | China Atlas",
    description: "Sign in to the China Atlas publishing panel.",
    path: "/admin/login",
    keywords: ["China Atlas admin", "China Atlas CMS"],
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Private route</p>
          <h1>Sign in to the atlas newsroom.</h1>
          <p className={styles.lead}>
            This route is not exposed in the public navigation. It opens the internal publishing
            room for Mongo-backed articles and the reader feedback inbox.
          </p>
          <div className={styles.pillRow}>
            <span className={styles.pill}>Hidden entry</span>
            <span className={styles.pill}>Mongo-backed writing</span>
            <span className={styles.pill}>Feedback inbox</span>
          </div>
          <AdminLoginForm />
        </div>
        <aside className={styles.aside}>
          <p className={styles.eyebrow}>Inside the panel</p>
          <h2>Editorial workflow</h2>
          <p>
            Draft articles, select local atlas visuals, build backlinks, publish into the public
            archive, and review reader feedback from one place.
          </p>
          <ul className={styles.list}>
            <li>Create draft and published posts.</li>
            <li>Reuse the existing local image catalog.</li>
            <li>Wire internal backlinks into themes and article pages.</li>
            <li>Review public feedback and archive resolved messages.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
