import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  titleElement?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleElement = "h2",
}: SectionHeadingProps) {
  const TitleElement = titleElement;

  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <TitleElement className={styles.title}>{title}</TitleElement>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
