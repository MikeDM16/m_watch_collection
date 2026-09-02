"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

import { THEME_STORAGE_KEY } from "./themeScript";

/**
 * Two-state toggle. Defaults to the system preference on first visit and only
 * persists once an explicit choice is made.
 *
 * Both icons are always in the markup and CSS picks which one shows, so there
 * is no hydration mismatch, no `mounted` guard and no icon flicker.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = useCallback(() => {
    const el = document.documentElement;
    const next = el.classList.contains("dark") ? "light" : "dark";
    el.classList.toggle("dark", next === "dark");
    el.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode, storage blocked: the toggle still works for this page */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className={`grid size-9 shrink-0 place-items-center rounded-full border border-current/20 text-current transition-colors hover:border-current/50 ${className}`}
    >
      <Sun aria-hidden strokeWidth={1.5} className="size-[17px] dark:hidden" />
      <Moon aria-hidden strokeWidth={1.5} className="hidden size-[17px] dark:block" />
    </button>
  );
}
