/**
 * The canonical origin, in one place.
 *
 * Everything that has to emit an absolute URL — canonicals, the sitemap,
 * robots.txt, OG image resolution — reads it from here. Never hardcode a host:
 * a literal in one of those files silently points search engines at the wrong
 * site, and nothing in the build complains.
 *
 * Override with NEXT_PUBLIC_SITE_URL (see .env.example). No trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mwatchcollection.com"
).replace(/\/$/, "");

/**
 * Where every catalogue photo, logo and background lives: the master branch of
 * the MWatchCollectionResources repo, through GitHub raw. getExternalResource
 * builds URLs on it directly by default, and the /img proxy route fetches from
 * it when IMAGE_PROXY_ENABLED is on. No trailing slash.
 *
 * next.config.ts repeats this host and path in `images.remotePatterns` and in
 * its /img redirect. It can't import this file (its module resolution is
 * CommonJS-only), so a change here has to be made there too.
 */
export const RESOURCES_ORIGIN =
  "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";

/**
 * Whether photos go through our own /img route handler instead of straight to
 * GitHub raw. Off unless NEXT_PUBLIC_IMAGE_PROXY is exactly "true".
 *
 * Off is the default because the proxy is a Vercel Function, so every photo it
 * serves without a CDN cache hit is billed as Fast Origin Transfer. The Hobby
 * plan includes 10 GB of it. Crawlers walking ~77k photo URLs, plus dev and
 * Playwright runs loading production photos, used 28.6 GB in 30 days, and Vercel
 * paused the whole team on 2026-11-15.
 *
 * What the proxy buys when it is on: our own 30-day Cache-Control instead of
 * GitHub raw's 5-minute one, and no second origin to connect to.
 *
 * NEXT_PUBLIC_ because getExternalResource also runs in the browser. Next
 * inlines the value at build time, so changing it on Vercel needs a redeploy.
 * next.config.ts reads the same variable to decide its /img redirect.
 */
export const IMAGE_PROXY_ENABLED = process.env.NEXT_PUBLIC_IMAGE_PROXY === "true";

export type SocialProfileKey = "catawiki" | "instagram" | "vinted";

/**
 * Where to find me off-site. Read by the About Me section and the footer's
 * "Elsewhere" column, so the two can never drift apart.
 */
export const SOCIAL_PROFILES: {
  key: SocialProfileKey;
  label: string;
  href: string;
}[] = [
  {
    key: "catawiki",
    label: "Catawiki",
    href: "https://www.catawiki.com/en/u/10244258-user-0316269",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/miguel_dm8",
  },
  {
    key: "vinted",
    label: "Vinted",
    href: "https://www.vinted.pt/member/81438201",
  },
];
