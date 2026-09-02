"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  showBrand = false,
  priority = false,
}: {
  brand: string;
  legend: string;
  year: number;
  srcImage: string;
  hoverSrc?: string | null;
  group?: string;
  label?: string;
  showBrand?: boolean;
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
        <Image
          src={primary}
          alt={legend}
          width={800}
          height={800}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={`absolute inset-0 size-full object-contain p-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03] ${
            alt && hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {alt && hovered && (
          <Image
            src={alt}
            alt=""
            width={800}
            height={800}
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
            className="absolute inset-0 size-full scale-[1.03] object-contain p-2 transition-opacity duration-500"
          />
        )}
      </div>

      {(group || label) && (
        <div className="series-tags">
          {group && <span className="series-tag series-tag-group">{group}</span>}
          {label && <span className="series-tag">{label}</span>}
        </div>
      )}

      <div className={group || label ? "mt-1" : "mt-3"}>
        {showBrand && <div className="lab">{brand}</div>}
        <div className="text-sm leading-snug transition-colors group-hover:text-brand">
          {display}
        </div>
        <div className="num mt-0.5 text-xs text-muted-foreground">{year}</div>
      </div>
    </Link>
  );
}
