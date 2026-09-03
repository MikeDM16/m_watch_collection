"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import Link from "next/link";
import { useState } from "react";

import PlateImage from "../common/PlateImage";
import HorizontalRail from "../motion/HorizontalRail";

export interface SpecialItemEntry {
  srcImage: string;
  hoverSrc?: string;
  brand: string;
  legend: string;
  year: number;
  movementTitle?: string;
}

/**
 * One figure in the rail. Split out because the hover crossfade needs state and
 * hooks cannot live inside the map.
 *
 * The rail has always received a `hoverSrc` for every piece and never rendered
 * it. It now behaves like the grid tile: two frames in the DOM, crossfaded, no
 * scale on an object-contain product shot.
 */
function RailTile({ entry, priority }: { entry: SpecialItemEntry; priority: boolean }) {
  const [hovered, setHovered] = useState(false);

  const primary = getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY));
  const alt = entry.hoverSrc
    ? getExternalResource(getImgURLForSizeType(entry.hoverSrc, SizeType.GALLERY))
    : null;

  return (
    <figure className="m-0 w-[min(72vw,17rem)] shrink-0 snap-start px-3">
      <Link
        href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
        className="group block no-underline"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <PlateImage
            src={primary}
            alt={entry.legend}
            width={800}
            height={800}
            sizes="(max-width: 768px) 72vw, 17rem"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            show={!(alt && hovered)}
            className="absolute inset-0 size-full object-contain p-3"
          />
          {alt && hovered && (
            <PlateImage
              src={alt}
              alt=""
              width={800}
              height={800}
              sizes="(max-width: 768px) 72vw, 17rem"
              className="absolute inset-0 size-full object-contain p-3"
            />
          )}

          <span aria-hidden className="tile-cue">
            <span className="lab text-foreground">Details</span>
          </span>
        </div>

        <figcaption className="mt-3">
          <span className="num block text-xs text-brand">{entry.year}</span>
          <span className="mt-1 block text-sm leading-snug transition-colors group-hover:text-brand">
            {entry.legend}
          </span>
          {entry.movementTitle && (
            <span className="mt-0.5 block truncate text-xs text-muted-foreground">
              {entry.movementTitle}
            </span>
          )}
        </figcaption>
      </Link>
    </figure>
  );
}

/**
 * The highlights, as a rail you steer rather than a carousel that steers you.
 * The section keeps the page's normal rhythm; the rail borrows the wheel only
 * while the pointer is over it and it still has somewhere to go.
 */
export default function SpecialTimepieces({ items }: { items: SpecialItemEntry[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-display-m font-medium">Special Timepieces</h2>
          <span className="num ml-auto text-xs text-muted-foreground">{items.length} pieces</span>
        </div>
        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
          The watches worth stopping on. Search or open any one of them for the full record.
        </p>
      </div>

      <HorizontalRail>
        {items.map((entry, i) => (
          <RailTile key={entry.legend} entry={entry} priority={i < 3} />
        ))}
      </HorizontalRail>
    </section>
  );
}
