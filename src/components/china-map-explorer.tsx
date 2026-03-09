"use client";

import { useState } from "react";
import Link from "next/link";
import china from "@svg-maps/china";

import { mapStories, provinceHighlights, themes } from "@/data/china-content";

import styles from "./china-map-explorer.module.css";

type MapLocation = {
  id: string;
  name: string;
  path: string;
};

const fallbackProvinceCopy = {
  label: "Province mosaic",
  body: "Every province belongs to a larger historical pattern of ecology, transport, migration, and state formation. Hover several to see how the map changes from core to frontier and coast to interior.",
};

export function ChinaMapExplorer() {
  const [activeStoryId, setActiveStoryId] = useState(mapStories[0]?.id ?? "");
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const mapLocations = china.locations as MapLocation[];

  const activeStory = mapStories.find((story) => story.id === activeStoryId) ?? mapStories[0];
  const activeTheme = themes[activeStory.themeSlug];
  const hoveredLocationName = hoveredProvince
    ? mapLocations.find((location) => location.id === hoveredProvince)?.name ?? hoveredProvince
    : null;
  const provinceCopy = hoveredProvince
    ? provinceHighlights[hoveredProvince] ?? fallbackProvinceCopy
    : fallbackProvinceCopy;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapFrame}>
        <svg
          className={styles.map}
          viewBox={china.viewBox}
          role="img"
          aria-label="Interactive map of China"
        >
          {mapLocations.map((location) => {
            const isStoryProvince = activeStory.provinces.includes(location.id);
            const isHoveredProvince = hoveredProvince === location.id;

            return (
              <path
                key={location.id}
                d={location.path}
                className={[
                  styles.province,
                  isStoryProvince ? styles.storyProvince : "",
                  isHoveredProvince ? styles.hoveredProvince : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onMouseEnter={() => setHoveredProvince(location.id)}
                onMouseLeave={() => setHoveredProvince(null)}
              >
                <title>{location.name}</title>
              </path>
            );
          })}
        </svg>

        {mapStories.map((story) => (
          <button
            key={story.id}
            type="button"
            className={[
              styles.hotspot,
              story.id === activeStory.id ? styles.activeHotspot : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ left: `${story.x}%`, top: `${story.y}%` }}
            onMouseEnter={() => setActiveStoryId(story.id)}
            onFocus={() => setActiveStoryId(story.id)}
            onClick={() => setActiveStoryId(story.id)}
            aria-label={`Focus ${story.title}`}
          >
            <span className={styles.hotspotDot} />
            <span className={styles.hotspotLabel}>{story.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.sidebar}>
        <div className={styles.storyCard}>
          <p className={styles.kicker}>Map-led route</p>
          <h3>{activeStory.title}</h3>
          <p className={styles.locationLabel}>{activeStory.locationLabel}</p>
          <p>{activeStory.blurb}</p>
          <Link href={`/themes/${activeStory.themeSlug}`} className={styles.themeLink}>
            Open {activeTheme.navLabel}
          </Link>
        </div>

        <div className={styles.storyList} aria-label="Explore by corridor">
          {mapStories.map((story) => (
            <button
              key={story.id}
              type="button"
              className={[
                styles.storyButton,
                story.id === activeStory.id ? styles.storyButtonActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onMouseEnter={() => setActiveStoryId(story.id)}
              onFocus={() => setActiveStoryId(story.id)}
              onClick={() => setActiveStoryId(story.id)}
            >
              <span>{story.title}</span>
              <small>{story.locationLabel}</small>
            </button>
          ))}
        </div>

        <div className={styles.provinceCard}>
          <p className={styles.kicker}>
            {hoveredLocationName ? `Hovered province: ${hoveredLocationName}` : "Province note"}
          </p>
          <h3>{provinceCopy.label}</h3>
          <p>{provinceCopy.body}</p>
        </div>
      </div>
    </div>
  );
}
