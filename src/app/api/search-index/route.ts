import type { SearchEntry } from "@/app/components/searchBar/SearchPalette";
import CollectionIndex from "@/app/data/collectionIndex";
import { routeToJournalEntry } from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import { NextResponse } from "next/server";

export async function GET() {
  const searchData: Record<string, SearchEntry> = {};

  for (const [key, entry] of Object.entries(CollectionIndex)) {
    searchData[key] = {
      brand: entry.brand,
      legend: entry.legend,
      year: entry.year,
      srcImage: entry.srcImage,
      movementTitle: entry.movementTitle || undefined,
    };
  }

  // Journal entries ride along under their own prefix, so no title can
  // collide with a watch legend. `terms` is what they are found by.
  for (const entry of journalService.getAll()) {
    searchData[`journal/${entry.slug}`] = {
      brand: entry.brand ?? "",
      legend: entry.title,
      year: Number(journalService.getDate(entry)?.slice(0, 4) ?? 0),
      srcImage: entry.cover,
      kind: "journal",
      href: routeToJournalEntry(entry.slug),
      terms: [entry.title, entry.place, entry.brand, journalService.kindLabel(entry)]
        .filter(Boolean)
        .join(" "),
    };
  }

  return NextResponse.json(searchData, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
