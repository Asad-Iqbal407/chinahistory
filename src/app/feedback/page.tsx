import type { Metadata } from "next";

import { FeedbackForm } from "@/components/feedback-form";
import { buildPageMetadata } from "@/lib/seo";

import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata({
  title: "Feedback | China Atlas",
  description: "Send corrections, ideas, and questions about the China Atlas website.",
  path: "/feedback",
  keywords: ["China Atlas feedback", "China history site feedback"],
});

export default function FeedbackPage() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroCard}>
          <p className={styles.eyebrow}>Feedback channel</p>
          <h1>Send corrections, ideas, and questions.</h1>
          <p className={styles.lead}>
            If you spot a factual issue, a broken flow, or a topic the archive should cover next,
            send it here. Feedback goes directly into the admin dashboard inbox.
          </p>
          <div className={styles.pillRow}>
            <span className={styles.pill}>Historical corrections</span>
            <span className={styles.pill}>Article ideas</span>
            <span className={styles.pill}>Design issues</span>
            <span className={styles.pill}>Reader questions</span>
          </div>
        </div>
        <aside className={styles.sideCard}>
          <p className={styles.eyebrow}>Useful feedback</p>
          <h2>What helps most</h2>
          <p>
            The most useful submissions point to a page, explain what feels wrong or missing, and
            suggest the detail a reader expected to find.
          </p>
          <ul className={styles.list}>
            <li>Flag factual mistakes or unclear phrasing.</li>
            <li>Suggest article topics readers actually search for.</li>
            <li>Report layout bugs or missing images.</li>
            <li>Share which pages should link to each other more clearly.</li>
          </ul>
        </aside>
      </div>

      <section className={styles.formCard}>
        <p className={styles.eyebrow}>Write it here</p>
        <h2>Feedback form</h2>
        <p>
          The current page path is attached automatically. Name and email are optional unless you
          want a follow-up.
        </p>
        <FeedbackForm initialPath="/feedback" />
      </section>
    </section>
  );
}
