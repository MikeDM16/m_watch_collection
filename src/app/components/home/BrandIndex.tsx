import type { Brand } from "@/app/data/brands";
import { getExternalResource, routeToCollectionBrandPage } from "@/app/services/commonFunctions";
import Image from "next/image";
import Link from "next/link";

import Reveal from "../motion/Reveal";

export interface BrandRow {
  name: string;
  count: number;
}

/**
 * "Main Brands" logo wall plus the full A-Z index.
 *
 * Logos render monochrome at rest and reveal their true colour on hover, which
 * resolves 90 mismatched PNGs into one system and solves the dark-mode polarity
 * problem at the same time. All 90 carry real alpha, so nothing goes solid.
 *
 * The A-Z list gains a per-brand model count and loses its 90 hairlines.
 */
export default function BrandIndex({
  mainBrands,
  byLetter,
  stats,
}: {
  mainBrands: Brand[];
  byLetter: Record<string, BrandRow[]>;
  stats: { label: string; value: number }[];
}) {
  const letters = Object.keys(byLetter).sort();

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
          <h2 className="font-display text-display-m font-medium">Main Brands</h2>
          {/* Borders live on the cells, not as a painted container background.
              There are 21 main brands, so the last row is always short (4 empty
              cells at lg, 3 at sm) and a painted background would show through
              them as one large lighter block. */}
          <div className="mt-8 grid grid-cols-3 border-l border-t border-border sm:grid-cols-4 lg:grid-cols-5">
            {mainBrands.map((b, i) => (
              <Link
                key={b.name}
                href={routeToCollectionBrandPage(b.name)}
                aria-label={b.name}
                className="relative block aspect-[2.1] border-b border-r border-border"
              >
                {/* The logo is sized by the cell, not by caps of its own.
                    `fill` pins it to the cell box and `object-contain` fits
                    each mark inside, so every one of the 21 comes out as large
                    as its own proportions allow and none can ever be the reason
                    a cell is taller than its neighbours.
                    Caps in rem cannot do this: the cell's height is derived
                    from its width by `aspect-ratio`, so a fixed pixel cap races
                    a height that moves with the column, the zoom and the root
                    font size. A percentage cap does not work either — the
                    aspect-derived height is indefinite, so `max-height: 100%`
                    resolves to none and the squarest mark (Novart, 256x159)
                    overflowed by 6px. The padding lives on the image, where it
                    shrinks the content box that object-contain fits into. */}
                <Image
                  src={getExternalResource(b.logoImg)}
                  alt={b.name}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  priority={i < 5}
                  loading={i < 5 ? undefined : "lazy"}
                  className="logo-mono object-contain p-5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="AllBrandsItems" className="scroll-mt-20 py-16 md:py-24">
        <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
          <h2 className="font-display text-display-m font-medium">All Brands</h2>

          <dl className="mt-8 grid grid-cols-3 gap-px border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-5 text-center">
                <dd className="num text-2xl font-medium">{s.value.toLocaleString("en-GB")}</dd>
                <dt className="lab mt-1">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
            {letters.map((letter, i) => (
              <Reveal key={letter} index={i}>
                {/* `group-has-[a:hover]` rather than `group-hover` so the
                    letter answers a hovered row, not the pointer merely being
                    inside the group's whitespace. */}
                <div className="group flex gap-4">
                  <span
                    aria-hidden
                    className="select-none font-display text-4xl font-medium leading-none text-border transition-colors group-has-[a:hover]:text-brand"
                  >
                    {letter}
                  </span>
                  <ul className="m-0 min-w-0 flex-1 list-none p-0">
                    {byLetter[letter].map((b) => (
                      <li key={b.name} className="border-t border-border/60 first:border-t-0">
                        <Link
                          href={routeToCollectionBrandPage(b.name)}
                          className="flex items-baseline gap-3 py-1.5 no-underline transition-colors hover:text-brand"
                        >
                          <span className="min-w-0 flex-1 truncate text-sm">{b.name}</span>
                          <span className="num shrink-0 text-xs text-muted-foreground">
                            {b.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
