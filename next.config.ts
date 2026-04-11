import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/MikeDM16/MWatchCollectionResources/master/public/**",
      },
    ],
    minimumCacheTTL: 2592000, // 30 days
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

  eslint: {
    dirs: ["src"],
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
