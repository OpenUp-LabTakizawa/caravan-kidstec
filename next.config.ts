import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
