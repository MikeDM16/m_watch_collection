"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import collectionImageLoader from "@/app/services/imageLoader";
import Image from "next/image";
import Link from "next/link";

import HorizontalRail from "../motion/HorizontalRail";

export interface SpecialItemEntry {
  srcImage: string;
  hoverSrc?: string;
  brand: string;
  legend: string;
  year: number;
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
          <span className="lab ml-auto">{items.length} pieces</span>
        </div>
        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
          The watches worth stopping on. Search or open any one of them for the full record.
        </p>
      </div>

      <HorizontalRail>
        {items.map((entry, i) => (
          <figure key={entry.legend} className="m-0 w-[min(72vw,17rem)] shrink-0 snap-start px-3">
            <Link
              href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
              className="group block no-underline"
            >
              <Image
                loader={collectionImageLoader}
                src={getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY))}
                alt={entry.legend}
                width={800}
                height={800}
                sizes="(max-width: 768px) 72vw, 17rem"
                priority={i < 3}
                loading={i < 3 ? undefined : "lazy"}
                className="plate p-3 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
              />
              <figcaption className="mt-3">
                <span className="num block text-xs text-brand">{entry.year}</span>
                <span className="mt-1 block text-sm leading-snug transition-colors group-hover:text-brand">
                  {entry.legend}
                </span>
              </figcaption>
            </Link>
          </figure>
        ))}
      </HorizontalRail>
    </section>
  );
}
