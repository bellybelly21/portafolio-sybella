import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' http://localhost:* ws://localhost:*; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:* https://*.googletagmanager.com https://*.google-analytics.com https://static.cloudflareinsights.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: http:; font-src 'self' data:; frame-src 'self' https://www.google.com https://recaptcha.google.com; connect-src 'self' http://localhost:* ws://localhost:* https://portafolio-sybella-production.up.railway.app https://www.google.com https://*.google.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://cloudflareinsights.com https://static.cloudflareinsights.com https://www.gstatic.com;",
          },
        ],
      },
    ];
  },

  experimental: {
    webpackMemoryOptimizations: true,
    webpackBuildWorker: true,
    optimizePackageImports: ['lucide-react'],
  },
  reactCompiler: true,
};

export default nextConfig;