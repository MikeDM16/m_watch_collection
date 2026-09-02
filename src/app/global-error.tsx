"use client";

/**
 * The last boundary: an error thrown by the root layout itself, which the
 * route-level error.tsx sits inside and so cannot catch. Like error.tsx, it is
 * a client boundary — see the note there about what Next does with a Server
 * Component that throws during the initial document render.
 *
 * This file replaces the whole document, which has three consequences worth
 * stating, all of them from the Next docs:
 *   - it must render its own <html> and <body>;
 *   - globals.css is not loaded, so no token, no utility class and no font
 *     variable is available — every style here is inline or in the <style>
 *     block below;
 *   - the app's theme class never reaches it, so the two schemes are done with
 *     prefers-color-scheme rather than the usual `.dark` class.
 *
 * Metadata exports are not supported in a client component, hence React's
 * <title> element.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <title>Something went wrong · M Watch Collection</title>
        <style>{`
          :root { color-scheme: light dark; --bg: #f7f7f6; --fg: #111113; --muted: #6b6b6e; --line: #dcdcd8; }
          @media (prefers-color-scheme: dark) {
            :root { --bg: #111113; --fg: #f2f2f0; --muted: #9a9a9e; --line: #2a2a2d; }
          }
          body {
            margin: 0; min-height: 100dvh; display: flex; align-items: center;
            background: var(--bg); color: var(--fg);
            font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
          }
          .wrap { margin: 0 auto; max-width: 46rem; padding: 0 clamp(1rem, 4vw, 3.5rem); }
          .lab { margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
                 font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
          h1 { margin: 0.75rem 0 0; font-size: clamp(2rem, 5vw, 3rem); font-weight: 500; letter-spacing: -0.02em; }
          p.body { margin: 1rem 0 0; max-width: 52ch; font-size: 0.9rem; line-height: 1.6; color: var(--muted); }
          .ref { margin-top: 1rem; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.75rem; color: var(--muted); }
          .ref span { color: var(--fg); }
          .actions { margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 0.75rem; }
          .chip { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.68rem;
                  letter-spacing: 0.1em; text-transform: uppercase; padding: 0.6rem 1.1rem;
                  border: 1px solid var(--line); background: transparent; color: inherit;
                  text-decoration: none; cursor: pointer; }
          .chip.primary { border-color: var(--fg); }
        `}</style>

        <div className="wrap">
          <p className="lab">Error</p>
          <h1>Something went wrong</h1>
          <p className="body">
            The site failed to load. This is not a problem with the page you asked for.
          </p>

          {error.digest && (
            <p className="ref">
              Reference <span>{error.digest}</span>
            </p>
          )}

          <div className="actions">
            <button type="button" onClick={() => retry()} className="chip primary">
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages --
                the root layout is what failed. A client-side <Link> would try
                to render the broken tree again; this needs a real navigation. */}
            <a href="/" className="chip">
              Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
