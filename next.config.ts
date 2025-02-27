import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
    domains: ["raw.githubusercontent.com"],
    minimumCacheTTL: 2592000, // 30 days
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
