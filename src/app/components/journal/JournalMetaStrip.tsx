import { getExternalResource } from "@/app/services/commonFunctions";
import Image from "next/image";
import Link from "next/link";

export interface MetaItem {
  label: string;
  value: string | number;
  /** Set in the mono numerals face: dates, counts, year spans. */
  num?: boolean;
}

/**
 * The lab-over-value strip under the hero, the same furniture as the brand
 * page's: one hairline below, no cells. Renders only the facts the entry has.
 */
export default function JournalMetaStrip({
  items,
  logo,
  link,
}: {
  items: MetaItem[];
  logo?: { src: string; alt: string };
  link?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-border py-6">
      {/* A sized box with `fill`, as on the brand page: logos come in every
          aspect ratio, and object-contain keeps each one's own. */}
      {logo && (
        <span className="relative block h-7 w-[140px] shrink-0">
          <Image
            src={getExternalResource(logo.src)}
            alt={logo.alt}
            fill
            unoptimized
            className="logo-mono object-contain object-left"
          />
        </span>
      )}
      {items.map((item) => (
        <div key={item.label}>
          <p className="lab">{item.label}</p>
          <p className={`mt-1 text-sm ${item.num ? "num" : ""}`}>{item.value}</p>
        </div>
      ))}
      {link && (
        <Link
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="lab ml-auto text-brand underline-offset-4 hover:underline"
        >
          {link.label}
        </Link>
      )}
    </div>
  );
}
