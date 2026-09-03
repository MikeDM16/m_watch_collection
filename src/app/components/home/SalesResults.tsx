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

export interface SoldEntry {
  brand: string;
  legend: string;
  year: number;
  srcImage: string;
  price: number;
  date: string;
  url?: string;
}

const INITIAL = 12;

/**
 * Auction results, as results.
 *
 * The old design showed 240 sale records as an autoplaying image carousel,
 * which is decoration. Nobody is expected to read the whole history, so it
 * opens at 12 rows behind a button rather than an endless scroll; each press
 * commits to a bigger batch than the last, on the assumption that pressing it
 * twice means you actually want the archive.
 */
export default function SalesResults({ sales }: { sales: SoldEntry[] }) {
  const [shown, setShown] = useState(INITIAL);
  const [step, setStep] = useState(INITIAL);

  const rows = sales.slice(0, shown);
  const remaining = sales.length - shown;
  const nextBatch = Math.min(step, remaining);

  const showMore = () => {
    setShown((s) => s + step);
    setStep((s) => s * 2);
  };

  return (
    <section id="PreviousSales" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="font-display text-display-m font-medium">Previous Sales</h2>
          <span className="num ml-auto text-xs text-muted-foreground">{sales.length} lots</span>
        </div>
        <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">
          Pieces that have moved on, sold at auction through Catawiki.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="lab py-2 text-left font-medium">Timepiece</th>
                <th className="lab py-2 text-left font-medium">Year</th>
                <th className="lab py-2 text-left font-medium">Sold</th>
                <th className="lab py-2 text-right font-medium">Price</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => (
                <tr key={`${s.legend}-${s.date}`} className="border-b border-border/60">
                  <td className="py-2.5 pr-4">
                    <Link
                      href={routeToCollectionBrandModelPage(s.brand, s.legend)}
                      className="flex items-center gap-3 no-underline transition-colors hover:text-brand"
                    >
                      <PlateImage
                        src={getExternalResource(
                          getImgURLForSizeType(s.srcImage, SizeType.THUMBNAIL),
                        )}
                        alt=""
                        width={32}
                        height={32}
                        loading="lazy"
                        className="size-8 shrink-0 bg-muted object-contain"
                      />
                      <span className="min-w-0">{s.legend}</span>
                    </Link>
                  </td>
                  <td className="num py-2.5 pr-4 text-xs text-muted-foreground">{s.year}</td>
                  <td className="num py-2.5 pr-4 text-xs text-muted-foreground">{s.date}</td>
                  <td className="num py-2.5 text-right text-brand">
                    {s.url ? (
                      <Link
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline underline-offset-4 hover:underline"
                      >
                        €{s.price.toLocaleString("en-GB")}
                      </Link>
                    ) : (
                      <>€{s.price.toLocaleString("en-GB")}</>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {remaining > 0 && (
          <button type="button" onClick={showMore} className="series-filter-chip mt-6">
            Show {nextBatch} more · {remaining} remaining
          </button>
        )}
      </div>
    </section>
  );
}
