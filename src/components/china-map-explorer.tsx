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
  const [selectedProvince, setSelectedProvince] = useState<string | null>(
    mapStories[0]?.provinces[0] ?? null,
  );
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const mapLocations = china.locations as MapLocation[];

  const activeStory = mapStories.find((story) => story.id === activeStoryId) ?? mapStories[0];
  const activeTheme = themes[activeStory.themeSlug];
  const selectedLocationName = selectedProvince
    ? mapLocations.find((location) => location.id === selectedProvince)?.name ?? selectedProvince
    : null;
  const focusedProvinceId = hoveredProvince ?? selectedProvince;
  const focusedLocationName = focusedProvinceId
    ? mapLocations.find((location) => location.id === focusedProvinceId)?.name ?? focusedProvinceId
    : null;
  const provinceCopy = focusedProvinceId
    ? provinceHighlights[focusedProvinceId] ?? fallbackProvinceCopy
    : fallbackProvinceCopy;
  const provinceStories = focusedProvinceId
    ? mapStories.filter((story) => story.provinces.includes(focusedProvinceId))
    : [];
  const activeStoryProvinces = activeStory.provinces.map((provinceId) => {
    const location = mapLocations.find((item) => item.id === provinceId);

    return {
      id: provinceId,
      name: location?.name ?? provinceId,
    };
  });

  function handleStoryChange(storyId: string) {
    const nextStory = mapStories.find((story) => story.id === storyId);

    setActiveStoryId(storyId);
    setHoveredProvince(null);

    if (!nextStory) {
      return;
    }

    if (!selectedProvince || !nextStory.provinces.includes(selectedProvince)) {
      setSelectedProvince(nextStory.provinces[0] ?? null);
    }
  }

  function handleProvinceSelect(provinceId: string) {
    const relatedStory = mapStories.find((story) => story.provinces.includes(provinceId));

    setSelectedProvince((currentProvince) =>
      currentProvince === provinceId ? null : provinceId,
    );

    if (relatedStory) {
      setActiveStoryId(relatedStory.id);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mapFrame}>
        <div className={styles.mapOverlay}>
          <div className={styles.overlayCard}>
            <div className={styles.overlayMeta}>
              <p className={styles.kicker}>Interactive atlas lens</p>
              <div className={styles.legendRow}>
                <span className={styles.legendChip}>{activeTheme.navLabel}</span>
                <span className={styles.legendChip}>
                  {activeStory.provinces.length} linked provinces
                </span>
                {selectedLocationName ? (
                  <span className={styles.legendChip}>Pinned: {selectedLocationName}</span>
                ) : null}
              </div>
            </div>
            <h3>{activeStory.title}</h3>
            <p>{activeStory.blurb}</p>
          </div>
          <div className={styles.overlayCard}>
            <p className={styles.kicker}>
              {focusedLocationName ? `Province focus: ${focusedLocationName}` : "How to explore"}
            </p>
            <h3>{focusedLocationName ? provinceCopy.label : "Tap a province, then follow the story."}</h3>
            <p>
              {focusedLocationName
                ? provinceCopy.body
                : "Click or tap any province to pin it, hover to preview, then use the corridor chips below to jump across different historical geographies."}
            </p>
            <div className={styles.inlineActions}>
              {selectedProvince ? (
                <button
                  type="button"
                  className={styles.ghostButton}
                  onClick={() => setSelectedProvince(null)}
                >
                  Clear pinned province
                </button>
              ) : null}
              <Link href={`/themes/${activeStory.themeSlug}`} className={styles.overlayLink}>
                Open {activeTheme.navLabel}
              </Link>
            </div>
          </div>
        </div>

        <svg
          className={styles.map}
          viewBox={china.viewBox}
          role="img"
          aria-label="Interactive map of China"
        >
          {mapLocations.map((location) => {
            const isStoryProvince = activeStory.provinces.includes(location.id);
            const isHoveredProvince = hoveredProvince === location.id;
            const isSelectedProvince = selectedProvince === location.id;

            return (
              <path
                key={location.id}
                d={location.path}
                className={[
                  styles.province,
                  isStoryProvince ? styles.storyProvince : "",
                  isHoveredProvince ? styles.hoveredProvince : "",
                  isSelectedProvince ? styles.selectedProvince : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onMouseEnter={() => setHoveredProvince(location.id)}
                onMouseLeave={() => setHoveredProvince(null)}
                onFocus={() => setHoveredProvince(location.id)}
                onBlur={() => setHoveredProvince(null)}
                onClick={() => handleProvinceSelect(location.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleProvinceSelect(location.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isSelectedProvince}
                aria-label={`Select ${location.name}`}
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
            onMouseEnter={() => handleStoryChange(story.id)}
            onFocus={() => handleStoryChange(story.id)}
            onClick={() => handleStoryChange(story.id)}
            aria-label={`Focus ${story.title}`}
          >
            <span className={styles.hotspotDot} />
            <span className={styles.hotspotLabel}>{story.title}</span>
          </button>
        ))}

        <div className={styles.storyRail}>
          <div className={styles.storyRailHeader}>
            <p className={styles.kicker}>Story corridors</p>
            <span>{activeStory.locationLabel}</span>
          </div>
          <div className={styles.storyChipRow} aria-label="Map story shortcuts">
            {mapStories.map((story) => (
              <button
                key={story.id}
                type="button"
                className={[
                  styles.storyChip,
                  story.id === activeStory.id ? styles.storyChipActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleStoryChange(story.id)}
              >
                {story.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.storyCard}>
          <p className={styles.kicker}>Map-led route</p>
          <h3>{activeStory.title}</h3>
          <p className={styles.locationLabel}>{activeStory.locationLabel}</p>
          <p>{activeStory.blurb}</p>
          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <span>Theme</span>
              <strong>{activeTheme.navLabel}</strong>
            </div>
            <div className={styles.metricCard}>
              <span>Corridor size</span>
              <strong>{activeStory.provinces.length} provinces</strong>
            </div>
          </div>
          <div className={styles.provinceChipRow}>
            {activeStoryProvinces.map((province) => (
              <button
                key={province.id}
                type="button"
                className={[
                  styles.provinceChip,
                  province.id === selectedProvince ? styles.provinceChipActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleProvinceSelect(province.id)}
              >
                {province.name}
              </button>
            ))}
          </div>
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
              onMouseEnter={() => handleStoryChange(story.id)}
              onFocus={() => handleStoryChange(story.id)}
              onClick={() => handleStoryChange(story.id)}
            >
              <span>{story.title}</span>
              <small>{story.locationLabel}</small>
            </button>
          ))}
        </div>

        <div className={styles.provinceCard}>
          <p className={styles.kicker}>
            {focusedLocationName ? `Province focus: ${focusedLocationName}` : "Province note"}
          </p>
          <h3>{focusedLocationName ?? "Click a province to pin it"}</h3>
          <p className={styles.provinceLead}>{provinceCopy.label}</p>
          <p>{provinceCopy.body}</p>
          {provinceStories.length > 0 ? (
            <div className={styles.relatedStories}>
              {provinceStories.map((story) => (
                <button
                  key={story.id}
                  type="button"
                  className={styles.relatedStoryButton}
                  onClick={() => handleStoryChange(story.id)}
                >
                  {story.title}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
