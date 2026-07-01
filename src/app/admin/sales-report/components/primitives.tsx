import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import Link from "next/link";

export function WatchLink({ entry }: { entry: CollectionIndexEntry }) {
  return (
    <Link
      href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
      className="underline hover:text-primary"
    >
      {entry.legend}
    </Link>
  );
}

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
    <div className="rounded-md border border-border p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      {sub && <div className="mt-2 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}

export function SectionHeader({ title }: { title: string }) {
  return <h3 className="mb-3 mt-8 border-b border-border pb-1 text-lg font-semibold">{title}</h3>;
}
