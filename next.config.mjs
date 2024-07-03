/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "caravan-kidstec.s3.ap-northeast-1.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
