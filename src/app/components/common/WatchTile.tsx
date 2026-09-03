"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import Link from "next/link";
import { useState } from "react";

import PlateImage from "./PlateImage";

/**
 * One watch in a grid. Borderless, as the old tiles were: depth comes from the
 * square plate behind the photograph, not from a card.
 *
 * The hover image crossfades instead of hard-swapping, and both frames are in
 * the DOM so the alternate is already decoded when the pointer arrives.
 */
export default function WatchTile({
  brand,
  legend,
  year,
  srcImage,
  hoverSrc,
  group,
  label,
  movement,
  priority = false,
}: {
  brand: string;
  legend: string;
  year: number;
  srcImage: string;
  hoverSrc?: string | null;
  group?: string;
  label?: string;
  movement?: string;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  // On a single-brand page the legend's leading brand name is redundant.
  const display = legend.startsWith(`${brand} `) ? legend.slice(brand.length + 1) : legend;
  const primary = getExternalResource(getImgURLForSizeType(srcImage, SizeType.GALLERY));
  const alt = hoverSrc
    ? getExternalResource(getImgURLForSizeType(hoverSrc, SizeType.GALLERY))
    : null;

  return (
    <Link
      href={routeToCollectionBrandModelPage(brand, legend)}
      className="group block text-center no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <PlateImage
          src={primary}
          alt={legend}
          width={800}
          height={800}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          show={!(alt && hovered)}
          className="absolute inset-0 size-full object-contain p-2"
        />
        {alt && hovered && (
          <PlateImage
            src={alt}
            alt=""
            width={800}
            height={800}
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            className="absolute inset-0 size-full object-contain p-2"
          />
        )}

        {/* aria-hidden: the Link takes its accessible name from the caption. */}
        <span aria-hidden className="tile-cue">
          <span className="lab text-foreground">Details</span>
        </span>
      </div>

      {(group || label) && (
        <div className="series-tags">
          {group && <span className="series-tag series-tag-group">{group}</span>}
          {label && <span className="series-tag">{label}</span>}
        </div>
      )}

      <div className={group || label ? "mt-1" : "mt-3"}>
        <div className="text-sm leading-snug transition-colors group-hover:text-brand">
          {display}
        </div>
        <div className="mt-0.5 truncate text-xs text-muted-foreground">
          <span className="num">{year}</span>
          {movement && ` · ${movement}`}
        </div>
      </div>
    </Link>
  );
}
