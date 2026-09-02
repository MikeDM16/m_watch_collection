"use client";

import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import SiteHeader from "./components/chrome/SiteHeader";
import brandsService from "./services/brandsService";
import {
  routeToCollectionBrandPage,
  routeToMainPageAllBrandListing,
} from "./services/commonFunctions";

/**
 * Legacy URL support only. The old app used
 *   <domain>/WatchDetails?model=<model name>
 * so a `model` query param is resolved to its brand and redirected.
 *
 * Everything else now renders a real 404 instead of redirecting to "/", which
 * previously turned every unknown URL into a soft 404 across 412 pages.
 */
function LegacyRedirect() {
  const model = useSearchParams().get("model");
  if (!model) return null;

  const words = model.split(" ");
  let brand = words[1];
  if (brandsService.getBrandInformation(brand)) redirect(routeToCollectionBrandPage(brand));

  brand = words.slice(1, 3).join(" ");
  if (brandsService.getBrandInformation(brand)) redirect(routeToCollectionBrandPage(brand));

  return null;
}

export default function NotFound() {
  return (
    <>
      <Suspense fallback={null}>
        <LegacyRedirect />
      </Suspense>

      <SiteHeader />
      <main
        id="main"
        className="mx-auto flex min-h-[70dvh] max-w-shell flex-col justify-center px-[clamp(1rem,4vw,3.5rem)] pt-24"
      >
        <p className="lab">Error 404</p>
        <h1 className="mt-3 font-display text-display-l font-medium">Page not found</h1>
        <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
          That page is not part of the collection. It may have moved, or the link may be older than
          the current site.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="series-filter-chip is-active">
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
