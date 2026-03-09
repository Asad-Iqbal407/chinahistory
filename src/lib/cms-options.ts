import { imageCatalog, type ImageKey } from "@/data/china-content";

export const adminSiteLinkOptions = [
  { label: "Home Atlas", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Historical Places", href: "/historical-places" },
  { label: "Civilization", href: "/themes/civilization" },
  { label: "Dynasties", href: "/themes/dynasties" },
  { label: "Century of Humiliation", href: "/themes/century-of-humiliation" },
  { label: "Wars and Revolutions", href: "/themes/wars-and-revolutions" },
  { label: "Science and Innovation", href: "/themes/science-and-innovation" },
  { label: "Modern Transformation", href: "/themes/modern-transformation" },
] as const;

export function getAdminImageOptions(): Array<{
  value: ImageKey;
  label: string;
}> {
  return Object.entries(imageCatalog).map(([key, image]) => ({
    value: key as ImageKey,
    label: image.creditLabel,
  }));
}
