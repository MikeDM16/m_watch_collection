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
