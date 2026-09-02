import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import Link from "next/link";

export function WatchLink({ entry }: { entry: CollectionIndexEntry }) {
  return (
    <Link
      href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
      className="underline-offset-4 transition-colors hover:text-brand hover:underline"
    >
      {entry.legend}
    </Link>
  );
}

/**
 * A figure and its label, in the site's hairline-grid dialect: the number in
 * tabular mono, the label as a `.lab` micro-caption. Borders live on the tile
 * so a short trailing row leaves no painted gap.
 */
export function StatTile({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: React.ReactNode;
}) {
  return (
    <div className="border-b border-r border-border p-5">
      <div className="num text-2xl font-medium">{value}</div>
      <div className="lab mt-1">{label}</div>
      {sub && <div className="mt-2 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

/** Shared by both admin pages. Rule above, display face, like the site. */
export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="mb-4 mt-12 border-t border-border pt-6 font-display text-title font-medium">
      {title}
    </h2>
  );
}

/** Table shells, so both admin tables and the site's sales table agree. */
export function AdminTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  );
}

export function Th({ children }: { children: React.ReactNode }) {
  return <th className="lab py-2 pr-4 text-left font-medium">{children}</th>;
}
