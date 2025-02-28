import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/MikeDM16/MWatchCollectionResources/master/public/**",
      },
    ],
    minimumCacheTTL: 2592000, // 30 days
  },

  eslint: {
    dirs: ["src"],
  },
};

export default nextConfig;
