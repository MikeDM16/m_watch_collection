"use client";

import { useSyncExternalStore } from "react";

const EVENT = "mwc:querychange";

/**
 * Filter state that lives in the URL, on a route that is prerendered.
 *
 * `useSearchParams` cannot be used here. On a statically rendered route it
 * opts the client tree up to the nearest Suspense boundary out of prerendering
 * — and with no boundary the production build fails outright. Wrapping the
 * brand grid in Suspense would mean the 72 Tissot tiles are no longer in the
 * static HTML, which costs the SEO and the priority LCP image that the whole
 * image pipeline exists to protect.
 *
 * `useSyncExternalStore` over `location.search` keeps the grid in the static
 * HTML. The server snapshot is "", so the prerender is the unfiltered view and
 * hydration matches it; React then re-renders once with the real query string.
 */
function subscribe(onChange: () => void) {
  // Programmatic history calls do not fire popstate, per spec — that event
  // only covers user navigation. Hence the self-dispatched companion event.
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

/**
 * Must return the raw string. React compares snapshots with Object.is, so
 * parsing into a fresh URLSearchParams here would return a new identity on
 * every call and loop forever.
 */
function getSnapshot() {
  return window.location.search;
}

function getServerSnapshot() {
  return "";
}

export function useQueryString(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * replaceState rather than pushState, deliberately. The back-navigation that
 * matters is filter -> open a watch -> back, and replaceState serves that
 * exactly: the filtered URL is what the browser returns to. pushState would
 * additionally make every chip click a history entry, so leaving a page you
 * filtered five times would take six presses of Back.
 *
 * This is the supported way to write the URL without re-running the server or
 * scrolling the page.
 */
export function setQueryString(next: URLSearchParams) {
  const qs = next.toString();
  window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  window.dispatchEvent(new Event(EVENT));
}
