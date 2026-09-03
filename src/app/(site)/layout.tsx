import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import SiteHeader from "../components/chrome/SiteHeader";

/**
 * Site chrome. Everything public lives under this group; /admin deliberately
 * sits outside it and stays bare, exactly as it does today.
 *
 * The footer is NOT here: a nested layout renders inside its parent's children
 * slot and so cannot replace a parent's footer, and the brand routes need a
 * brand-specific one. Each leaf group owns its footer instead.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-brand-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />
      {/* Grain lives here rather than in the root layout so /admin stays bare,
          same reasoning as the header. A sibling of <main>, so ScrollTrigger's
          pin-spacer on the model route never interacts with it. */}
      <div aria-hidden className="grain" />
      <main id="main">{children}</main>

      {process.env.NODE_ENV === "production" && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </>
  );
}
