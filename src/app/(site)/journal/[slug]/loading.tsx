/**
 * Shown while an entry resolves. Mirrors the hero band, the metadata strip and
 * the first rows of photographs so nothing shifts when the page lands.
 */
function Bar({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-sm bg-muted ${className}`} />;
}

export default function Loading() {
  return (
    <>
      <div className="relative flex min-h-[46dvh] items-end bg-muted">
        <div className="mx-auto w-full max-w-shell px-[clamp(1rem,4vw,3.5rem)] pb-10">
          <Bar className="h-3 w-[min(24rem,70%)] bg-muted-foreground/20" />
          <Bar className="mt-4 h-12 w-[min(26rem,70%)] bg-muted-foreground/20" />
        </div>
      </div>

      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-border py-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <Bar className="h-2.5 w-16" />
              <Bar className="mt-2 h-3.5 w-24" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 pt-14">
          {[
            [3, 4, 4, 3],
            [16, 12, 9],
          ].map((row, r) => (
            <div key={r} className="flex gap-2">
              {row.map((grow, i) => (
                <div key={i} className="min-w-0" style={{ flex: `${grow} 1 0px` }}>
                  <Bar className="h-[clamp(9rem,22vw,20rem)]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
