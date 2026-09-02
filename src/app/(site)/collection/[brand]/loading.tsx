/**
 * Shown while a brand route resolves. Mirrors the hero band, the metadata strip
 * and the model grid so the layout does not shift when the real page lands.
 */
function Bar({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-sm bg-muted ${className}`} />;
}

export default function Loading() {
  return (
    <>
      {/* Hero band. */}
      <div className="relative flex min-h-[42vh] items-end bg-muted">
        <div className="mx-auto w-full max-w-shell px-[clamp(1rem,4vw,3.5rem)] pb-10">
          <Bar className="h-3 w-[min(24rem,70%)] bg-muted-foreground/20" />
          <Bar className="mt-4 h-12 w-[min(20rem,60%)] bg-muted-foreground/20" />
        </div>
      </div>

      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-border py-6">
          <Bar className="h-7 w-[140px]" />
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <Bar className="h-2.5 w-16" />
              <Bar className="mt-2 h-3.5 w-24" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {Array.from({ length: 10 }, (_, i) => (
            <figure key={i} className="m-0">
              <Bar className="aspect-square w-full" />
              <Bar className="mt-3 h-2.5 w-12" />
              <Bar className="mt-2 h-3.5 w-[80%]" />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
