import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Breadcrumb trail. `onPhoto` renders it against the scrim inside a hero band;
 * the default renders it on the page surface.
 */
export default function Breadcrumbs({
  items,
  onPhoto = false,
}: {
  items: Crumb[];
  onPhoto?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0 font-mono text-[0.62rem] uppercase tracking-[0.1em] ${
          onPhoto ? "text-scrim-foreground/75" : "text-muted-foreground"
        }`}
      >
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="no-underline transition-colors hover:text-brand">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
