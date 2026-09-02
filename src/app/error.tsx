"use client";

import Link from "next/link";

import SiteHeader from "./components/chrome/SiteHeader";
import { routeToMainPageAllBrandListing } from "./services/commonFunctions";

/**
 * The route-level error boundary.
 *
 * What it covers, verified against a production build: anything that throws on
 * the client — a Client Component failing to render (the pinned viewer, the
 * rail, the search palette, the lightbox) and any error during a client-side
 * navigation. That is where this site's runtime failures actually surface,
 * since every page is prerendered.
 *
 * What it does not cover: a Server Component throwing while Next produces the
 * initial document for an on-demand render. Next answers that with a bare
 * `500 Internal Server Error` as text/plain and never reaches a React
 * boundary — a trivial error.tsx does not catch it either, so this is Next's
 * behaviour rather than something this file can fix.
 *
 * It renders its own header because it replaces the page, not the layout above
 * it, and the layouts that own the footer sit below this boundary.
 *
 * `retry` (stable in Next 16.3, and not the older `reset`) re-fetches and
 * re-renders the segment, which is worth offering: the most common failure
 * here is a chunk that did not arrive, and a second attempt usually fixes it.
 */
export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="mx-auto flex min-h-[70dvh] max-w-shell flex-col justify-center px-[clamp(1rem,4vw,3.5rem)] pt-24"
      >
        <p className="lab">Error</p>
        <h1 className="mt-3 font-display text-display-l font-medium">Something went wrong</h1>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
          This page failed to render. The rest of the collection is unaffected.
        </p>

        {error.digest && (
          <p className="num mt-4 text-xs text-muted-foreground">
            Reference <span className="text-foreground">{error.digest}</span>
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => retry()} className="series-filter-chip is-active">
            Try again
          </button>
          <Link href="/" className="series-filter-chip">
            Home
          </Link>
          <Link href={routeToMainPageAllBrandListing()} className="series-filter-chip">
            All brands
          </Link>
        </div>
      </main>
    </>
  );
}
