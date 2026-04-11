import CollectionIndex from "@/app/data/collectionIndex";
import { NextResponse } from "next/server";

export async function GET() {
  const searchData: Record<
    string,
    { brand: string; legend: string; year: number; srcImage: string; movementTitle?: string }
  > = {};

  for (const [key, entry] of Object.entries(CollectionIndex)) {
    searchData[key] = {
      brand: entry.brand,
      legend: entry.legend,
      year: entry.year,
      srcImage: entry.srcImage,
      movementTitle: entry.movementTitle || undefined,
    };
  }

  return NextResponse.json(searchData, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
