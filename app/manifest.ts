import type { MetadataRoute } from "next"
import { DESCRIPTION, SITE_TITLE } from "./lib/constant.ts"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_TITLE} アプリ`,
    short_name: SITE_TITLE,
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
