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
    localPatterns: [
      {
        pathname: "/caravan-kidstec_logo_line.avif",
        search: "",
      },
      {
        pathname: "/handshake.avif",
        search: "",
      },
      {
        pathname: "/Instagram_Glyph_Gradient.avif",
        search: "",
      },
      {
        pathname: "/line_add_friends.avif",
        search: "",
      },
    ],
    remotePatterns: [new URL("https://dk75m1tgsot44.cloudfront.net/**")],
  },
  output: "standalone",
  typedRoutes: true,
}

export default nextConfig
