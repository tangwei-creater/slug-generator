import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // VPS uses standalone; Cloudflare Workers build (BUILD_TARGET=cloudflare) must not.
  output: process.env.BUILD_TARGET === "cloudflare" ? undefined : "standalone",
  poweredByHeader: false,
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/a7f3e9c2b8d4615f0e2a9c7b3d8f4e61.txt",
        destination: "/api/indexnow",
      },
    ],
    afterFiles: [],
    fallback: [],
  }),
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],
};

export default withNextIntl(nextConfig);
