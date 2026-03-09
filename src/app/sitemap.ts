import type { MetadataRoute } from "next";

import { civilizationTopicOrder } from "@/data/civilization-content";
import { dynastyTopicOrder } from "@/data/dynasties-content";
import { modernTopicOrder } from "@/data/modern-content";
import { scienceTopicOrder } from "@/data/science-content";
import { themeOrder } from "@/data/china-content";
import { listPublicArticleSlugs } from "@/lib/cms";
import { warTopicOrder } from "@/data/wars-content";
import { absoluteUrl } from "@/lib/site-config";

const buildDate = new Date("2026-03-09T00:00:00.000Z");

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const themeRoutes = themeOrder.map((slug) => `/themes/${slug}`);
  const articleSlugs = await listPublicArticleSlugs();

  const topicRoutes = [
    ...articleSlugs.map((slug) => `/articles/${slug}`),
    ...civilizationTopicOrder.map((topic) => `/themes/civilization/${topic}`),
    ...dynastyTopicOrder.map((topic) => `/themes/dynasties/${topic}`),
    ...scienceTopicOrder.map((topic) => `/themes/science-and-innovation/${topic}`),
    ...warTopicOrder.map((topic) => `/themes/wars-and-revolutions/${topic}`),
    ...modernTopicOrder.map((topic) => `/themes/modern-transformation/${topic}`),
  ];

  const routes = [
    "/",
    "/articles",
    "/historical-places",
    "/feedback",
    ...themeRoutes,
    ...topicRoutes,
  ];

  return routes.map((route) => {
    const segmentCount = route.split("/").filter(Boolean).length;
    const priority =
      route === "/"
        ? 1
        : route === "/historical-places"
          ? 0.9
          : route === "/feedback"
            ? 0.6
          : segmentCount === 2
            ? 0.85
            : 0.75;

    return {
      url: absoluteUrl(route),
      lastModified: buildDate,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority,
    };
  });
}
