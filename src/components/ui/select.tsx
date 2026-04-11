"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface SelectOption {
  value: string;
  label: string;
  image?: string;
}

interface SearchableSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
  label,
  className,
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);
  const selectedLabel = selectedOption?.label || "";

  const filtered = search
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(search.toLowerCase()) ||
          o.value.toLowerCase().includes(search.toLowerCase()),
      )
    : options;

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {label && (
        <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <span className={cn("flex items-center gap-2", !selectedLabel && "text-muted-foreground")}>
          {selectedOption?.image && (
            <img
              src={selectedOption.image}
              alt=""
              className="h-5 w-5 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}
          {selectedLabel || placeholder}
        </span>
        <span className="ml-2 text-xs">&#9662;</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-hidden rounded-md border bg-popover shadow-lg">
          <div className="p-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-sm border-0 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.length === 0 && (
              <div className="px-3 py-2 text-sm text-muted-foreground">No results</div>
            )}
            {filtered.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  setSearch("");
                }}
                className={cn(
                  "flex w-full items-center px-3 py-1.5 text-left text-sm hover:bg-accent",
                  option.value === value && "bg-accent font-medium",
                )}
              >
                {option.image && (
                  <img
                    src={option.image}
                    alt=""
                    className="mr-2 h-5 w-5 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface MultiSelectProps {
  options: SelectOption[];
  values: string[];
  onChange: (values: string[]) => void;
  label?: string;
  className?: string;
}

function MultiSelect({ options, values, onChange, label, className }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);

  const filtered = search
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(search.toLowerCase()) ||
          o.value.toLowerCase().includes(search.toLowerCase()),
      )
    : options;

  React.useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  const selectedLabels = values
    .map((v) => options.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(", ");

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {label && (
        <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <span className={selectedLabels ? "truncate" : "text-muted-foreground"}>
          {selectedLabels || "Select multiple..."}
        </span>
        <span className="ml-2 text-xs">&#9662;</span>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-hidden rounded-md border bg-popover shadow-lg">
          <div className="p-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-sm border-0 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
          <div className="max-h-48 overflow-y-auto">
            {filtered.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => toggle(option.value)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-accent",
                  values.includes(option.value) && "bg-accent font-medium",
                )}
              >
                <span className="w-4 text-center">{values.includes(option.value) ? "✓" : ""}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { SearchableSelect, MultiSelect };
export type { SelectOption };
