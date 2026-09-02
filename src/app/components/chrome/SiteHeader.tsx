"use client";

import {
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import Link from "next/link";
import { useEffect, useState } from "react";

import SearchPalette from "../searchBar/SearchPalette";
import ThemeToggle from "../theme/ThemeToggle";
import MobileNav, { type NavLink } from "./MobileNav";

/**
 * Site header. One line at every width, 64px tall, never wraps.
 *
 * Transparent over the hero photograph on load, condensing to a solid surface
 * with a hairline once scrolled past it. Every href and label is byte-identical
 * to the old navbar; search and the theme toggle are additions.
 */
export default function SiteHeader() {
  // Solid by default. Only pages that open with a photo band (home, brand) let
  // the header go transparent, and only while the band is still behind it.
  // Model pages open on the page surface, where light-on-light would be
  // unreadable.
  const [solid, setSolid] = useState(true);

  useEffect(() => {
    // No band on this page: `solid` already starts true, so there is nothing
    // to observe and nothing to set.
    const band = document.querySelector("[data-hero-band]");
    if (!band) return;

    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      // Fires once the band has scrolled up past the 64px header.
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    io.observe(band);
    return () => io.disconnect();
  }, []);

  const links: NavLink[] = [
    { href: routeToMainPageHeader(), label: "Collection" },
    { href: routeToMainPageAllBrandListing(), label: "All Brands" },
    { href: "/#PreviousSales", label: "Auctions" },
    { href: "/#AboutMe", label: "About Me" },
    { href: "/#Contacts", label: "Contacts" },
  ];

  // The local authoring tools, exactly as the old navbar exposed them. Without
  // these the pages still build but there is no way into them.
  if (process.env.NODE_ENV !== "production") {
    links.push(
      { href: "/admin/create-model", label: "Add Model" },
      { href: "/admin/sales-report", label: "Sales Report" },
    );
  }

  return (
    <>
      {/* The anchor target for the footer's "to the top" link. It has to be a
          real element in document flow: while `id="start"` sat on the fixed nav
          below, the browser saw it as permanently in view and scrolled nowhere.
          The nav is `fixed` and so out of flow, which puts this span at the
          very top of the document. */}
      <span id="start" aria-hidden />

      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid
            ? "border-b border-border bg-background/90 text-foreground backdrop-blur-md"
            : "border-b border-transparent bg-transparent text-scrim-foreground"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-shell items-center gap-6 px-[clamp(1rem,4vw,3.5rem)]">
          <Link href={routeToMainPageHeader()} className="shrink-0 no-underline">
            <span className="font-wordmark text-xl tracking-wide">M Watch Collection</span>
          </Link>

          <ul className="ml-auto hidden list-none items-center gap-6 p-0 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-current/75 no-underline transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <SearchPalette />
            <ThemeToggle />
            <MobileNav links={links} />
          </div>
        </div>
      </nav>
    </>
  );
}
