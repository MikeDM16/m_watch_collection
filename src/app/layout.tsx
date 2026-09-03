import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono, Sorts_Mill_Goudy } from "next/font/google";

import { themeScript } from "./components/theme/themeScript";
import { SITE_URL } from "./siteConfig";

import "./globals.css";

/** Body and UI. Already downloaded by the old layout, never actually applied. */
const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

/** Every reference number, calibre, diameter, year and price. */
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

/** Display. Variable on wght and wdth, so hero titles can run wide. */
const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});

/** The wordmark only. A Goudy Old Style revival, which is the face the
    stylesheet has been asking for without ever loading it. 400 italic is the
    only cut that exists, so presence comes from size and tracking. */
const wordmark = Sorts_Mill_Goudy({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "M Watch Collection",
    template: "%s · M Watch Collection",
  },
  description: "Collecting, restoring and documenting watches since 2015.",
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f6" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${display.variable} ${wordmark.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Must track the host in getExternalResource. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body>{children}</body>
    </html>
  );
}
