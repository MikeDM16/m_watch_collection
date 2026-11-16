import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Same flag and origin as IMAGE_PROXY_ENABLED and RESOURCES_ORIGIN in
// src/app/siteConfig.ts. They are repeated here because next.config.ts module
// resolution is CommonJS-only and can't import that file. Keep them in step.
const IMAGE_PROXY_ENABLED = process.env.NEXT_PUBLIC_IMAGE_PROXY === "true";
const RESOURCES_ORIGIN =
  "https://raw.githubusercontent.com/MikeDM16/MWatchCollectionResources/master";

const nextConfig: NextConfig = {
  // Vercel bills one image transformation per unique (url, w, q, Accept) cache
  // key. The catalogue is ~13.7k unique photos against a 5,000/month quota, so
  // almost everything now resolves to a pregenerated CDN variant through
  // src/app/services/imageLoader.ts and never reaches this optimiser. What is
  // left is the model-page LCP hero and the 34 local spec images.
  images: {
    // `formats` and `qualities` are deliberately unset: ["image/webp"] and [75]
    // are already the Next 16 defaults. AVIF is opt-in, and opting in cached and
    // billed every image twice — once per normalised Accept header.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/MikeDM16/MWatchCollectionResources/master/public/**",
      },
    ],
    // Without this the default is `**`, which allows any /public path.
    localPatterns: [{ pathname: "/assets/**", search: "" }],
    // Trimmed from the 8 + 7 defaults, and every rung is deliberately a value
    // imageLoader.ts can satisfy exactly (200/500/800/1200). Rungs that fall
    // between variants round *up*, so the stray 828 this replaced was pulling a
    // 1200px file for a 272px-wide rail tile.
    //
    // The largest source variant is 1200px, so the defaults' 1920/2048/3840
    // rungs also returned byte-identical images under their own billable cache
    // key — a 110px logo was being requested at w=3840.
    deviceSizes: [640, 800, 1200],
    imageSizes: [128, 200, 500],
    minimumCacheTTL: 2678400, // 31 days, Vercel's documented CDN maximum
  },

  // Photos go straight to GitHub raw by default. The /img proxy below only runs
  // with NEXT_PUBLIC_IMAGE_PROXY=true, because it is a Vercel Function and its
  // Fast Origin Transfer got the Hobby team paused (see IMAGE_PROXY_ENABLED in
  // siteConfig.ts).
  //
  // With the proxy off, any /img URL still out there (crawlers, cached HTML,
  // shared links) is redirected to the same file on GitHub raw. Redirects are
  // checked before the filesystem, so the route handler never runs: Vercel
  // answers it at the CDN routing layer, with no function and no Fast Origin
  // Transfer. It is a 307, not a 308, because browsers cache a 308 forever and
  // that would outlive switching the proxy back on.
  redirects: async () =>
    IMAGE_PROXY_ENABLED
      ? []
      : [
          {
            source: "/img/:path*",
            destination: `${RESOURCES_ORIGIN}/:path*`,
            permanent: false,
          },
        ],

  // With the proxy on, /img/[...path]/route.ts serves the resources repo
  // through our own origin, and getExternalResource builds every image URL as
  // `${SITE_URL}/img/...`.
  // That used to be a plain rewrite here, but a rewrite can only ever forward
  // the upstream's own Cache-Control to the browser, never override it —
  // raw.githubusercontent.com sends max-age=300, and Vercel's documented
  // priority rule is that an origin's own Cache-Control always wins over one
  // set in next.config.ts. The route handler sets its own response headers
  // instead, and decides them per response: 30 days for a photo, no-store for
  // a miss.
  //
  // So no rule below may match /img. A config header is applied before the
  // handler runs, and send-response.js never overwrites a header that is
  // already set, so a matching rule here silently replaces the handler's
  // value. That is how a /img/:path* rule here once stamped 30-day immutable
  // headers on 404s too, and a photo opened before its push stayed broken at
  // the edge and in the browser. The `(?!img/)` lookahead keeps both rules off
  // /img in the runtime matcher and in the routes-manifest regex.

  headers: async () => [
    {
      source: "/:all((?!img/).*)(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/:path((?!img/).*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
        },
      ],
    },
  ],

  // The sales margin pipeline (scripts/sales) keeps purchase prices and margins
  // in the gitignored .sales/ folder, which the dev-only sales report reads with
  // fs at request time. Those runtime reads make the file tracer copy that folder
  // — and, through the workbook check, all of scripts/, the ledger workbook
  // included — into the server bundle of any build made on a machine that has
  // them. Nothing under either folder is ever needed at runtime. The back-office
  // ledger (.ledger/) is private the same way.
  outputFileTracingExcludes: {
    "/*": [".sales/**/*", ".ledger/**/*", "scripts/**/*"],
  },

  // Barrel-file tree shaking. lucide-react in particular exports ~1500 icons.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  webpack: (config, { isServer }) => {
    // Prevent webpack from trying to bundle Node.js modules for client-side code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },

  turbopack: {
    resolveExtensions: [".tsx", ".ts", ".js", ".json"],
  },
};

export default withAnalyzer(nextConfig);
