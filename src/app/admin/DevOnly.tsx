import Link from "next/link";

/** Shared production gate for the local authoring tools. */
export default function DevOnly() {
  return (
    <div className="flex min-h-[60dvh] flex-col justify-center pb-24">
      <p className="lab">Local tool</p>
      <h1 className="mt-3 font-display text-display-l font-medium">Development only</h1>
      <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
        This tool writes to the collection data files, so it only runs against a local checkout.
      </p>
      <div className="mt-8">
        <Link href="/" className="series-filter-chip is-active">
          Back to the collection
        </Link>
      </div>
    </div>
  );
}
