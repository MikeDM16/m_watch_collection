import Link from "next/link";

import DevOnly from "./DevOnly";

/** Each tool once, under its page's own heading. A new tool is one more row. */
const TOOLS = [
  {
    href: "/admin/create-model",
    title: "Create Watch Model",
    description: "Writes a new watch model file into the collection data.",
  },
  {
    href: "/admin/models",
    title: "Watch Models",
    description:
      "Fields, photo order, cover and hover for any watch, including hidden ones waiting for photos.",
  },
  {
    href: "/admin/journal",
    title: "Journal Captions",
    description:
      "Captions, watches, section titles and text for Journal entries, with the photographs in view.",
  },
  {
    href: "/admin/sales-report",
    title: "Sales Report",
    description:
      "Every sale in the catalogue, with cost, profit and margin once npm run sales:sync has read the private ledger.",
  },
  {
    href: "/admin/sales-report/review",
    title: "Ledger matches",
    description: "How the sync matched each sale to the ledger, to confirm or correct.",
  },
];

/**
 * The index of the local authoring tools, and the header's one link into
 * them. A ledger of rows, like the rest of the site, not a grid of cards.
 */
export default function AdminPage() {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  return (
    <div className="pb-24">
      <div className="mb-2 border-b border-border pb-6">
        <p className="lab">Local tools</p>
        <h1 className="mt-2 font-display text-display-m font-medium">Admin</h1>
        <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
          The authoring tools behind the site. They read and write files in this checkout and are
          never served in production.
        </p>
      </div>

      <ul className="list-none p-0">
        {TOOLS.map((tool) => (
          <li key={tool.href} className="border-b border-border">
            <Link
              href={tool.href}
              className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5 no-underline"
            >
              <span className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-brand">
                {tool.title}
              </span>
              <span className="min-w-0 flex-[1_1_28rem] text-sm text-muted-foreground">
                {tool.description}
              </span>
              <span className="num ml-auto text-xs text-muted-foreground">{tool.href}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
