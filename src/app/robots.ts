import type { MetadataRoute } from "next";

import { SITE_URL } from "./siteConfig";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // /img/ is the photo proxy (or, with it off, a redirect to GitHub raw).
    // Crawlers walking ~77k photo URLs through it were the bulk of the Fast
    // Origin Transfer that got the Hobby team paused on 2026-11-15.
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/img/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
