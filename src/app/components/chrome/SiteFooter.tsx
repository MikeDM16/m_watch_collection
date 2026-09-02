import {
  background_images_paths,
  getExternalResource,
  IconLabel,
  pickBackground,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
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

  const columns: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Collection",
      links: [
        { href: routeToMainPageHeader(), label: "Special Timepieces" },
        { href: routeToMainPageAllBrandListing(), label: "All Brands" },
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
  ];

  return (
    <footer
      className="band mt-24 min-h-[42dvh] bg-cover bg-center"
      style={{ backgroundImage: `url(${getExternalResource(bg)})` }}
    >
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

          <div className="flex gap-12">
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
