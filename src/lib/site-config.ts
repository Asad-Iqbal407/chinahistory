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
