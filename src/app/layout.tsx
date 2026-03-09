import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Public_Sans } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { themeList } from "@/data/china-content";
import {
  absoluteUrl,
  defaultKeywords,
  defaultSeoImage,
  defaultSiteDescription,
  siteName,
  siteUrl,
} from "@/lib/site-config";

import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const atlasLinks = [
  { href: "/", label: "Home Atlas" },
  { href: "/articles", label: "Articles" },
  { href: "/historical-places", label: "Historical Places" },
  { href: "/feedback", label: "Feedback" },
];

const themeColumns = [themeList.slice(0, 3), themeList.slice(3)];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: defaultSiteDescription,
  applicationName: siteName,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteName,
    description: defaultSiteDescription,
    siteName,
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(defaultSeoImage),
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultSiteDescription,
    images: [absoluteUrl(defaultSeoImage)],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${cormorant.variable}`}>
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="footer-brand">
              <span className="footer-logo">China Atlas</span>
              <p className="footer-tagline">An immersive journey through Chinese civilization, dynasties, and modern transformation.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Atlas</h4>
                {atlasLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
              {themeColumns.map((column, index) => (
                <div key={index} className="footer-col">
                  <h4>{index === 0 ? "Theme Pages" : "More Themes"}</h4>
                  {column.map((theme) => (
                    <Link key={theme.slug} href={`/themes/${theme.slug}`}>
                      {theme.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <p className="footer-bottom">Use the map, timelines, and theme pages to move from geography to long-term history.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
