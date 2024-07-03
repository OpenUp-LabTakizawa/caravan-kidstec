/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
}

export default nextConfig
