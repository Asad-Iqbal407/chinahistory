import type { Metadata } from "next";

import {
  absoluteUrl,
  defaultKeywords,
  defaultSeoImage,
  defaultSiteDescription,
  siteName,
  siteUrl,
} from "@/lib/site-config";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

type ItemListEntry = {
  name: string;
  path: string;
};

type CollectionPageSchemaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

type ArticleSchemaOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  section: string;
  keywords?: string[];
};

function mergeKeywords(keywords: string[] = []) {
  return Array.from(new Set([...defaultKeywords, ...keywords]));
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultSeoImage,
  keywords,
  type = "website",
}: MetadataOptions): Metadata {
  const mergedKeywords = mergeKeywords(keywords);

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: absoluteUrl(path),
      title,
      description,
      siteName,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(image),
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    description: defaultSiteDescription,
    url: siteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildCollectionPageSchema({
  title,
  description,
  path,
  image = defaultSeoImage,
  keywords,
}: CollectionPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en",
    image: absoluteUrl(image),
    keywords: mergeKeywords(keywords).join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  image = defaultSeoImage,
  section,
  keywords,
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    articleSection: section,
    inLanguage: "en",
    image: [absoluteUrl(image)],
    keywords: mergeKeywords(keywords).join(", "),
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };
}

export function buildItemListSchema(
  title: string,
  path: string,
  items: ItemListEntry[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
