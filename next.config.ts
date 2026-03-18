import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio-2026',
};

export default nextConfig;
