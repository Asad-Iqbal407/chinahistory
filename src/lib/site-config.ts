export const siteName = "China Atlas";

export const defaultSiteDescription =
  "An immersive atlas of China covering civilization, dynasties, historical places, wars, scientific progress, and modern transformation.";

export const defaultSeoImage = "/images/china/pudong-shanghai-panorama.jpg";

export const defaultKeywords = [
  "China history",
  "China civilization",
  "Chinese dynasties",
  "historical places in China",
  "China wars",
  "China science and innovation",
  "modern China history",
];

export const siteConfig = {
  values: [
    {
      title: "Context before shortcuts",
      description:
        "China Atlas is designed to connect maps, timelines, and narrative pages so readers can place events inside the larger systems that shaped them.",
    },
    {
      title: "Depth over thin summaries",
      description:
        "The site favors dense, evergreen explainers that move from broad historical patterns to specific places, institutions, conflicts, and turning points.",
    },
    {
      title: "Feedback-led publishing",
      description:
        "Reader questions, corrections, and search intent help shape new pages, tighter internal links, and clearer explanations across the atlas.",
    },
  ],
  categoryHighlights: [
    "Civilization, landscapes, and belief worlds",
    "Dynasties, institutions, and imperial change",
    "Wars, revolutions, and foreign pressure",
    "Scientific traditions, infrastructure, and modern transformation",
  ],
};

export const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://chinahistory.vercel.app").replace(
    /\/$/,
    "",
  );

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, `${siteUrl}/`).toString();
}
