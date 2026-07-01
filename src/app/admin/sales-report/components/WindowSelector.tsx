"use client";

import { Button } from "@/components/ui/button";
import { SearchableSelect, SelectOption } from "@/components/ui/select";

import { TimeWindowId, TimeWindowOption } from "../salesStats";

export function WindowSelector({
  value,
  presets,
  years,
  onChange,
}: {
  value: TimeWindowId;
  presets: TimeWindowOption[];
  years: TimeWindowOption[];
  onChange: (id: TimeWindowId) => void;
}) {
  const yearOptions: SelectOption[] = years.map((y) => ({ value: y.id, label: y.label }));
  // Only reflect a selected year in the dropdown when a per-year window is active.
  const yearValue = typeof value === "string" && value.startsWith("y") ? value : "";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="inline-flex flex-wrap gap-1 rounded-md border border-border p-1">
        {presets.map((o) => (
          <Button
            key={o.id}
            size="sm"
            variant={o.id === value ? "default" : "ghost"}
            onClick={() => onChange(o.id)}
          >
            {o.label}
          </Button>
        ))}
      </div>
      {yearOptions.length > 0 && (
        <SearchableSelect
          options={yearOptions}
          value={yearValue}
          onChange={onChange}
          placeholder="Jump to year…"
          className="w-36"
        />
      )}
    </div>
  );
}
