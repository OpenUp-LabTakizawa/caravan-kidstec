import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    isrFlushToDisk: false,
    ppr: true,
    reactCompiler: true,
    viewTransition: true,
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
