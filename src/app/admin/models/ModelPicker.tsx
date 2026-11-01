"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

import type { ModelSummary } from "./modelSource";

/**
 * Every model file, to open one in the editor. Watches still waiting for their
 * photos come first; the rest by brand, oldest first. A ledger of rows like
 * the admin index, not a grid of cards.
 */
export default function ModelPicker({ models }: { models: ModelSummary[] }) {
  const [query, setQuery] = useState("");
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const shown = models
    .filter((m) => words.every((w) => `${m.title} ${m.file}`.toLowerCase().includes(w)))
    .sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));

  const groups: { title: string; models: ModelSummary[] }[] = [
    { title: "Hidden: photos to add", models: shown.filter((m) => m.status === "hidden") },
    { title: "Not in the collection", models: shown.filter((m) => m.status === "unregistered") },
    ...[...new Set(shown.filter((m) => m.status === "visible").map((m) => m.brand))]
      .sort()
      .map((brand) => ({
        title: brand.replace(/_/g, " "),
        models: shown.filter((m) => m.status === "visible" && m.brand === brand),
      })),
  ].filter((g) => g.models.length);

  return (
    <div>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by title or file"
        aria-label="Filter watches"
        className="max-w-md"
        autoFocus
      />
      <p className="num mt-3 text-xs text-muted-foreground">
        {shown.length} of {models.length}
      </p>

      {groups.map((g) => (
        <section key={g.title} className="mt-10">
          <h2 className="lab border-b border-border pb-2">{g.title}</h2>
          <ul className="list-none p-0">
            {g.models.map((m) => (
              <li key={m.file} className="border-b border-border">
                <Link
                  href={`/admin/models?file=${encodeURIComponent(m.file)}`}
                  className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-3 no-underline"
                >
                  <span className="text-sm transition-colors group-hover:text-brand">
                    {m.title}
                  </span>
                  <span className="num ml-auto text-xs text-muted-foreground">{m.file}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
