/**
 * Shown while the model route compiles or its chunk arrives. Without it the
 * navigation simply hangs on the previous page — around nine seconds on a cold
 * dev compile, with nothing on screen to say anything is happening.
 *
 * The shape mirrors the real page closely enough that nothing jumps when the
 * content lands: same shell width, same padding, same breadcrumb rule, same
 * two-column hero, same 2x2 glance grid.
 */
function Bar({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-sm bg-muted ${className}`} />;
}

export default function Loading() {
  return (
    <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)] pt-24">
      <div className="flex flex-wrap items-center gap-4 border-b border-border pb-4">
        <Bar className="h-3 w-[min(22rem,70%)]" />
        <Bar className="ml-auto h-6 w-[110px]" />
      </div>

      <section className="grid items-center gap-8 py-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <Bar className="aspect-square max-h-[58vh] w-full" />

        <div>
          <Bar className="h-3 w-40" />
          <Bar className="mt-3 h-10 w-[min(28rem,90%)]" />
          <Bar className="mt-3 h-3 w-32" />

          <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-background p-3">
                <Bar className="h-2.5 w-20" />
                <Bar className="mt-2 h-3.5 w-24" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The specification blocks. */}
      <div className="grid gap-10 pb-24">
        {[9, 5, 4].map((rows, i) => (
          <section key={i} className="border-t border-border pt-6">
            <Bar className="h-5 w-32" />
            <div className="mt-4 grid gap-2">
              {Array.from({ length: rows }, (_, r) => (
                <div key={r} className="flex items-baseline gap-4">
                  <Bar className="h-3 w-[9.5rem] flex-none" />
                  <Bar className="h-3 w-[min(14rem,40%)]" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
