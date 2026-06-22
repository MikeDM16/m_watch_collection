"use client";

import type { CollectionIndexEntry } from "@/app/data/collectionIndex";
import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import { cn } from "@/lib/utils";
import { MultiSelect } from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import ImageComponent from "../common/ImageComponent";

export interface CardData {
  entry: CollectionIndexEntry;
  group: string;
  label: string;
}

interface BrandCollectionGridProps {
  brand: string;
  cards: CardData[];
  groups: string[];
}

export default function BrandCollectionGrid({ brand, cards, groups }: BrandCollectionGridProps) {
  // "All" mode = no individual groups chosen (empty selection). It shows every model and is the
  // default. Selecting one or more groups narrows the grid to just those; selecting every group
  // individually is the same as "All", so we collapse back to it.
  const [selected, setSelected] = useState<string[]>([]);

  const allActive = selected.length === 0;

  // "All" shows everything; otherwise only the chosen groups (group-less cards have nothing to
  // filter on, so they only appear in "All" mode — non-series brands never render the filter).
  const visible = allActive ? cards : cards.filter((c) => selected.includes(c.group));

  const toggle = (group: string) => {
    setSelected((prev) => {
      const next = prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group];
      // Choosing every group individually is equivalent to "All" — reset to it.
      return next.length === groups.length ? [] : next;
    });
  };

  const showFilter = groups.length > 1;

  return (
    <div className="centered-text">
      {showFilter && (
        <div className="bottom-margin-m">
          <p className="series-filter-label">Filter by series</p>

          {/* Desktop: always-visible chip row. */}
          <div className="series-filter hidden lg:flex">
            <button
              type="button"
              onClick={() => setSelected([])}
              className={cn("series-filter-chip", allActive && "is-active")}
            >
              All
            </button>
            {groups.map((group) => (
              <button
                key={`filter_chip_${group}`}
                type="button"
                onClick={() => toggle(group)}
                className={cn("series-filter-chip", selected.includes(group) && "is-active")}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Mobile: collapse into a multi-select dropdown. */}
          <div className="lg:hidden mx-auto max-w-xs">
            <MultiSelect
              options={groups.map((g) => ({ value: g, label: g }))}
              values={selected}
              onChange={(vals) => setSelected(vals.length === groups.length ? [] : vals)}
            />
          </div>
        </div>
      )}

      {visible.length === 0 ? (
        <p className="info-text">No series selected.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {visible.map(({ entry, group, label }, idx) => {
            // On a single-brand page the legend's leading brand name is redundant.
            const displayLegend = entry.legend.startsWith(`${entry.brand} `)
              ? entry.legend.slice(entry.brand.length + 1)
              : entry.legend;
            return (
              <div
                key={`brand_${brand}_model_${idx}`}
                className="hover-animation bottom-margin-m w-[calc(50%-0.5rem)] sm:w-[calc(33%-0.5rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
              >
                <Link
                  href={routeToCollectionBrandModelPage(brand, entry.legend)}
                  className="info-text link"
                >
                  <ImageComponent
                    src={getExternalResource(getImgURLForSizeType(entry.srcImage, SizeType.GALLERY))}
                    hoverSrc={getExternalResource(
                      getImgURLForSizeType(
                        entry.hoverSrc ? entry.hoverSrc : entry.srcImage,
                        SizeType.GALLERY,
                      ),
                    )}
                    alt={`${entry.legend}`}
                    priority={idx < 4}
                  />
                  {(group !== "" || label !== "") && (
                    <div className="series-tags">
                      {group !== "" && <span className="series-tag series-tag-group">{group}</span>}
                      {label !== "" && <span className="series-tag">{label}</span>}
                    </div>
                  )}
                  <div className="upper-text">{entry.brand}</div>
                  <em>{displayLegend}</em>
                  <div>
                    <b>{entry.year}</b>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
