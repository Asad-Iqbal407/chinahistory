"use client";

import { useState } from "react";

import type { FeedbackRecord, FeedbackStatus } from "@/lib/cms-types";

import styles from "./admin-feedback-inbox.module.css";

type AdminFeedbackInboxProps = {
  initialEntries: FeedbackRecord[];
};

function statusLabel(status: FeedbackStatus) {
  if (status === "new") {
    return "New";
  }

  if (status === "reviewed") {
    return "Reviewed";
  }

  return "Archived";
}

export function AdminFeedbackInbox({ initialEntries }: AdminFeedbackInboxProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [pendingId, setPendingId] = useState("");
  const [error, setError] = useState("");

  const updateStatus = async (id: string, status: FeedbackStatus) => {
    setPendingId(id);
    setError("");

    try {
      const response = await fetch(`/api/admin/feedback/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const payload = (await response.json()) as {
        error?: string;
        feedback?: FeedbackRecord;
      };

      if (!response.ok || !payload.feedback) {
        throw new Error(payload.error || "Feedback could not be updated.");
      }

      setEntries((current) =>
        current.map((entry) => (entry.id === id ? payload.feedback! : entry)),
      );
    } catch (updateError) {
      setError(
        updateError instanceof Error ? updateError.message : "Feedback could not be updated.",
      );
    } finally {
      setPendingId("");
    }
  };

  if (entries.length === 0) {
    return <p className={styles.empty}>No feedback yet. Public submissions will appear here.</p>;
  }

  return (
    <div className={styles.stack}>
      {error ? <p className={styles.error}>{error}</p> : null}
      {entries.map((entry) => (
        <article
          key={entry.id}
          className={[styles.card, entry.status === "new" ? styles.cardNew : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={styles.topline}>
            <div className={styles.titleBlock}>
              <div className={styles.meta}>
                <span className={styles.kindBadge}>{entry.kind}</span>
                <span
                  className={[
                    styles.statusBadge,
                    entry.status === "new"
                      ? styles.statusNew
                      : entry.status === "reviewed"
                        ? styles.statusReviewed
                        : styles.statusArchived,
                  ].join(" ")}
                >
                  {statusLabel(entry.status)}
                </span>
              </div>
              <h3>{entry.name || "Anonymous visitor"}</h3>
              <div className={styles.meta}>
                {entry.email ? <span>{entry.email}</span> : null}
                <span>{entry.pagePath}</span>
                <span>{new Date(entry.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <p className={styles.message}>{entry.message}</p>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.button}
              onClick={() => updateStatus(entry.id, "reviewed")}
              disabled={pendingId === entry.id || entry.status === "reviewed"}
            >
              {pendingId === entry.id ? "Updating..." : "Mark reviewed"}
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={() => updateStatus(entry.id, "archived")}
              disabled={pendingId === entry.id || entry.status === "archived"}
            >
              Archive
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={() => updateStatus(entry.id, "new")}
              disabled={pendingId === entry.id || entry.status === "new"}
            >
              Reopen
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
