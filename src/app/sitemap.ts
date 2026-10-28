import type { MetadataRoute } from "next";

import brandsService from "./services/brandsService";
import collectionService from "./services/collectionService";
import {
  routeToCollectionBrandModelPage,
  routeToCollectionBrandPage,
  routeToJournal,
  routeToJournalEntry,
} from "./services/commonFunctions";
import journalService from "./services/journalService";
import { SITE_URL as BASE } from "./siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = Object.values(collectionService.getAllCollectionItems());
  const brands = Object.values(brandsService.getAllBrands()).flat();
  const journal = journalService.getAll();

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}${routeToJournal()}`, changeFrequency: "monthly", priority: 0.7 },
    ...brands.map((b) => ({
      url: `${BASE}${routeToCollectionBrandPage(b.name)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...journal.map((j) => ({
      url: `${BASE}${routeToJournalEntry(j.slug)}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...entries.map((e) => ({
      url: `${BASE}${routeToCollectionBrandModelPage(e.brand, e.legend)}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
