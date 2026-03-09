import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Public_Sans } from "next/font/google";

import { SiteHeader } from "@/components/site-header";

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

export const metadata: Metadata = {
  title: "China Atlas",
  description:
    "An immersive Next.js atlas of China's civilization, dynasties, wars, century of humiliation, scientific progress, and modern transformation.",
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
                <h4>Explore</h4>
                <Link href="/historical-places">Historical Places</Link>
                <Link href="/themes/civilization">Civilization</Link>
                <Link href="/themes/dynasties">Dynasties</Link>
                <Link href="/themes/wars-and-revolutions">Wars & Revolutions</Link>
              </div>
              <div className="footer-col">
                <h4>Discover</h4>
                <Link href="/themes/science-and-innovation">Science & Innovation</Link>
                <Link href="/themes/modern-transformation">Modern Transformation</Link>
              </div>
            </div>
            <p className="footer-bottom">Use the map, timelines, and theme pages to move from geography to long-term history.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
