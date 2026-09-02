import type { MetadataRoute } from "next";

import brandsService from "./services/brandsService";
import collectionService from "./services/collectionService";
import {
  routeToCollectionBrandModelPage,
  routeToCollectionBrandPage,
} from "./services/commonFunctions";
import { SITE_URL as BASE } from "./siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = Object.values(collectionService.getAllCollectionItems());
  const brands = Object.values(brandsService.getAllBrands()).flat();

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...brands.map((b) => ({
      url: `${BASE}${routeToCollectionBrandPage(b.name)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...entries.map((e) => ({
      url: `${BASE}${routeToCollectionBrandModelPage(e.brand, e.legend)}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
