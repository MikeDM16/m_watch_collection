import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

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
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/MikeDM16/MWatchCollectionResources@master/public/**",
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

  headers: async () => [
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
        },
      ],
    },
  ],

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
