const ORIGIN = "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";

/**
 * Proxies the resources repo through our own origin, same as the /img rewrite
 * this replaces — but as a real Route Handler rather than a next.config.ts
 * rewrite, because a rewrite can only ever forward the upstream's OWN
 * Cache-Control to the browser, never override it (Vercel's documented
 * priority: an origin's own Cache-Control always wins over one set in
 * next.config.ts/vercel.json). raw.githubusercontent.com sends `max-age=300`;
 * these photos never change once published, so we want the browser's own
 * cache to go quiet for a long time, not re-ask every 5 minutes.
 *
 * Here, our own code is "the origin," so the header we set in this Response
 * is what wins — nothing upstream is forwarded except body and Content-Type.
 *
 * getExternalResource (commonFunctions.tsx) builds every image URL as
 * `${SITE_URL}/img/...`, so this file's location is load-bearing.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ path: string[] }> }) {
  const { path } = await params;

  // Next decodes each dynamic segment for us, so a literal space in a folder
  // name (the catalogue has plenty) survives here as a space, not `%20` — it
  // has to be re-encoded per segment, not on the joined string, or
  // encodeURIComponent would also escape the "/" separators between them.
  //
  // No ".." guard needed: Next's own router normalizes ".." out of a catch-all
  // segment before params is ever populated — confirmed directly, a request
  // for ".../Brands_Logos/../Brands_Logos/x.PNG" arrives here already
  // collapsed to ".../Brands_Logos/x.PNG". `path` can't contain one.
  const upstream = await fetch(`${ORIGIN}/${path.map(encodeURIComponent).join("/")}`);
  if (!upstream.ok || !upstream.body) {
    return new Response(null, { status: upstream.status });
  }

  // Deliberately not forwarding upstream's own Cache-Control or ETag — that's
  // the entire reason this is a Route Handler and not a plain rewrite.
  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/octet-stream",
      "Cache-Control": "public, max-age=2592000, immutable",
      "CDN-Cache-Control": "public, max-age=2592000",
      "Vercel-CDN-Cache-Control": "public, max-age=2592000",
    },
  });
}
