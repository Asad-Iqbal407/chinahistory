"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./feedback-form.module.css";

const feedbackKinds = [
  { value: "correction", label: "Correction" },
  { value: "idea", label: "Idea" },
  { value: "question", label: "Question" },
  { value: "bug", label: "Bug" },
  { value: "praise", label: "Praise" },
] as const;

type FeedbackFormProps = {
  initialPath?: string;
};

export function FeedbackForm({ initialPath }: FeedbackFormProps) {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kind, setKind] = useState<(typeof feedbackKinds)[number]["value"]>("idea");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const pagePath = initialPath || pathname || "/";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          kind,
          pagePath,
          message,
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Feedback could not be submitted.");
      }

      setSuccess("Feedback sent. It is now visible in the admin dashboard.");
      setName("");
      setEmail("");
      setKind("idea");
      setMessage("");
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : "Feedback could not be submitted.",
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="feedback-name">Name</label>
          <input
            id="feedback-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Optional"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="feedback-email">Email</label>
          <input
            id="feedback-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Optional"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="feedback-kind">Feedback type</label>
          <select
            id="feedback-kind"
            value={kind}
            onChange={(event) => setKind(event.target.value as (typeof feedbackKinds)[number]["value"])}
          >
            {feedbackKinds.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="feedback-page-path">Page</label>
          <input id="feedback-page-path" value={pagePath} readOnly />
          <span className={styles.helper}>The current page is attached automatically.</span>
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="feedback-message">Message</label>
          <textarea
            id="feedback-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Share a correction, idea, question, or issue you noticed."
          />
        </div>
      </div>
      {success ? <p className={styles.success}>{success}</p> : null}
      {error ? <p className={styles.error}>{error}</p> : null}
      <div className={styles.actions}>
        <button type="submit" className={styles.submit} disabled={pending}>
          {pending ? "Sending..." : "Send feedback"}
        </button>
      </div>
    </form>
  );
}
