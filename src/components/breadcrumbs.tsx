import Link from "next/link";

import type { BreadcrumbItem } from "@/lib/seo";

import styles from "./breadcrumbs.module.css";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length < 2) {
    return null;
  }

  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.href} className={styles.item}>
              {isCurrent ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
              {!isCurrent ? <span className={styles.separator}>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
