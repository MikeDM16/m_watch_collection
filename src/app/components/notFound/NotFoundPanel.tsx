import Link from "next/link";

/**
 * Shared not-found panel. Renders no header or footer: these are returned as
 * the page inside the site layout, so chrome would double up.
 */
export default function NotFoundPanel({
  title,
  message,
  actions,
}: {
  title: string;
  message: string;
  actions: { href: string; label: string }[];
}) {
  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-shell flex-col justify-center px-[clamp(1rem,4vw,3.5rem)] pt-24">
      <p className="lab">Not found</p>
      <h1 className="mt-3 font-display text-display-l font-medium">{title}</h1>
      <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{message}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {actions.map((a) => (
          <Link key={a.href} href={a.href} className="series-filter-chip is-active">
            {a.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
