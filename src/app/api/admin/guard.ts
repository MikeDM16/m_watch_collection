import { NextResponse } from "next/server";

/**
 * The admin API is a local authoring tool, exactly like the two pages it serves
 * (both of which render <DevOnly /> in production). It had no such check.
 *
 * Two of these routes write files under src/app/data/. Vercel's filesystem is
 * read-only so those writes would fail there, but the read routes still hand
 * over every enum, every model file path and the raw source of any model file
 * to anyone who asks, and the write routes are reachable and unauthenticated.
 *
 * 404 rather than 403: in production these routes do not exist, and saying so
 * is not something a caller needs confirmed.
 *
 * Usage, as the first statement of every handler:
 *   const blocked = devOnly();
 *   if (blocked) return blocked;
 */
export function devOnly(): NextResponse | null {
  if (process.env.NODE_ENV !== "production") return null;
  return new NextResponse(null, { status: 404 });
}
