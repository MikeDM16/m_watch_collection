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
