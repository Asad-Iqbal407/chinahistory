"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

import { themeList } from "@/data/china-content";

import styles from "./site-header.module.css";

const STORAGE_KEY = "darkMode";
const THEME_EVENT = "china-atlas-theme-change";

function readDarkModePreference() {
  if (typeof window === "undefined") {
    return true;
  }

  const savedMode = window.localStorage.getItem(STORAGE_KEY);

  if (savedMode !== null) {
    return savedMode === "true";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribeToThemePreference(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleThemeEvent = () => {
    onStoreChange();
  };

  const handleMediaChange = () => {
    if (window.localStorage.getItem(STORAGE_KEY) === null) {
      onStoreChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(THEME_EVENT, handleThemeEvent);
  mediaQuery.addEventListener("change", handleMediaChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(THEME_EVENT, handleThemeEvent);
    mediaQuery.removeEventListener("change", handleMediaChange);
  };
}

export function SiteHeader() {
  const darkMode = useSyncExternalStore(
    subscribeToThemePreference,
    readDarkModePreference,
    () => true,
  );

  useEffect(() => {
    document.body.classList.toggle("simple-mode", !darkMode);
  }, [darkMode]);

  const toggleMode = () => {
    const newMode = !darkMode;
    window.localStorage.setItem(STORAGE_KEY, String(newMode));
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandMark}>China Atlas</span>
        <span className={styles.brandSubline}>
          Civilization, dynasties, wars, science, transformation
        </span>
      </Link>
      <div className={styles.headerRight}>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/historical-places" className={styles.link}>
            Historical Places
          </Link>
          {themeList.map((theme) => (
            <Link key={theme.slug} href={`/themes/${theme.slug}`} className={styles.link}>
              {theme.navLabel}
            </Link>
          ))}
        </nav>
        <button 
          onClick={toggleMode} 
          className={styles.modeToggle}
          aria-label="Toggle color theme"
        >
          Theme
        </button>
      </div>
    </header>
  );
}
