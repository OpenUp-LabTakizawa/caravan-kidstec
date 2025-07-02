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
    remotePatterns: [new URL("https://dk75m1tgsot44.cloudfront.net/**")],
  },
  output: "standalone",
}

export default nextConfig
