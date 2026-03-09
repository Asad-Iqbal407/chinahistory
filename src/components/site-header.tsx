import Link from "next/link";

import { themeList } from "@/data/china-content";

import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandMark}>China Atlas</span>
        <span className={styles.brandSubline}>
          Civilization, dynasties, wars, science, transformation
        </span>
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        {themeList.map((theme) => (
          <Link key={theme.slug} href={`/themes/${theme.slug}`} className={styles.link}>
            {theme.navLabel}
          </Link>
        ))}
      </nav>
    </header>
  );
}
