import type { Metadata } from "next";
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
            <p>Use the map, timelines, and theme pages to move from geography to long-term history.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
