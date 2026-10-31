import {
  background_images_paths,
  getExternalResource,
  IconLabel,
  pickBackground,
  routeToJournal,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import { SOCIAL_PROFILES } from "@/app/siteConfig";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

/**
 * Site footer. A Server Component: the background is chosen during render from
 * a deterministic hash rather than in useEffect, so it no longer swaps after
 * hydration and no longer drags a client boundary into the page.
 */
export default function SiteFooter({
  images,
  seed = "site",
}: {
  images?: string[];
  seed?: string;
}) {
  const bg = pickBackground(images, seed, background_images_paths[1]);

  const columns: {
    title: string;
    links: { href: string; label: string; external?: boolean }[];
  }[] = [
    {
      title: "Collection",
      links: [
        { href: routeToMainPageHeader(), label: "Special Timepieces" },
        { href: routeToMainPageAllBrandListing(), label: "All Brands" },
        { href: routeToJournal(), label: "Journal" },
        { href: "/#PreviousSales", label: "Auctions" },
      ],
    },
    {
      title: "About",
      links: [
        { href: "/#AboutMe", label: "About Me" },
        { href: "/#Contacts", label: "Contacts" },
      ],
    },
    {
      // Same constant the About Me ledger reads, so the two can't drift.
      title: "Elsewhere",
      links: SOCIAL_PROFILES.map((p) => ({ href: p.href, label: p.label, external: true })),
    },
  ];

  return (
    <footer className="band mt-24 min-h-[42dvh]">
      {/* A lazy <img> rather than a CSS background, which downloads with the
          page however far below the fold it sits: on a phone that was up to
          500 KB competing with the hero. Lazy, it waits until the reader nears
          the bottom, and a lazy <img> puts no preload hint in the RSC data the
          way an eager one would. z-0 puts it under the scrim, against
          .band > *'s z-index 1. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getExternalResource(bg)}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="mx-auto w-full max-w-shell px-[clamp(1rem,4vw,3.5rem)] py-14 text-scrim-foreground">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div>
            <p className="font-wordmark text-2xl text-white">M Watch Collection</p>
            <Link
              href="#start"
              className="mt-4 inline-flex font-mono text-[0.68rem] uppercase tracking-[0.1em] no-underline opacity-80 transition-opacity hover:opacity-100"
            >
              <IconLabel icon={ArrowUp} text="To the top" />
            </Link>
          </div>

          {/* Wraps: three columns at gap-12 overflow a ~360px viewport. */}
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            {columns.map((col) => (
              <nav key={col.title}>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] opacity-60">
                  {col.title}
                </p>
                <ul className="mt-3 list-none space-y-2 p-0">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm no-underline opacity-85 transition-opacity hover:opacity-100"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 font-mono text-[0.66rem] tracking-wide opacity-60">
          Copyright © 2018-2026, MWatchCollection. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
