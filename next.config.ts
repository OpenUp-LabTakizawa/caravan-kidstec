import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
    pprFallbacks: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dk75m1tgsot44.cloudfront.net",
        port: "",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
}

export default nextConfig
