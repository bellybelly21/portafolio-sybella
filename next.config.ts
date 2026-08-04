import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    webpackMemoryOptimizations: true,
    webpackBuildWorker: true,
    optimizePackageImports: ['lucide-react'],
  },
  reactCompiler: true,
};

export default nextConfig;
