"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface NavLink {
  href: string;
  label: string;
}

/**
 * Mobile navigation as a full-height sheet, replacing the old max-height
 * transition. Adds a focus trap and Escape, which the old toggle never had.
 */
export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;

      const focusable = panel.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => panel.current?.querySelector("a")?.focus(), 20);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
        className="grid size-9 shrink-0 place-items-center rounded-full border border-current/20 text-current transition-colors hover:border-current/50 lg:hidden"
      >
        <Menu aria-hidden strokeWidth={1.5} className="size-[17px]" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-scrim/60 backdrop-blur-sm lg:hidden"
          onMouseDown={(e) => {
            if (!panel.current?.contains(e.target as Node)) setOpen(false);
          }}
        >
          <div
            ref={panel}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="ml-auto flex h-full w-[min(20rem,85vw)] flex-col bg-background"
          >
            <div className="flex h-16 items-center justify-end px-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:border-brand"
              >
                <X aria-hidden strokeWidth={1.5} className="size-[17px]" />
              </button>
            </div>
            <nav className="flex flex-col px-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-display text-lg tracking-tight transition-colors hover:text-brand"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
