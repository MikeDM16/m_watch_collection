"use client";

import { useSyncExternalStore } from "react";

const EVENT = "mwc:querychange";

/**
 * Filter state in the URL, on a prerendered route.
 *
 * `useSearchParams` cannot be used here: on a statically rendered route it opts
 * the client tree up to the nearest Suspense boundary out of prerendering, and
 * with no boundary the production build fails.
 */
function subscribe(onChange: () => void) {
  // Programmatic history calls do not fire popstate, hence the companion event.
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

/**
 * Must return the raw string. React compares snapshots with Object.is, so
 * parsing into a fresh URLSearchParams here would loop forever.
 */
function getSnapshot() {
  return window.location.search;
}

/** "" so the prerender is the unfiltered view and hydration matches it. */
function getServerSnapshot() {
  return "";
}

export function useQueryString(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * replaceState, not pushState: the navigation that matters is filter -> open a
 * watch -> back, and pushState would additionally make every chip click a
 * history entry. Writes the URL without re-running the server or scrolling.
 */
export function setQueryString(next: URLSearchParams) {
  const qs = next.toString();
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  window.dispatchEvent(new Event(EVENT));
}
