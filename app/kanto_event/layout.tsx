import {
  CLOUDFRONT_URL,
  DESCRIPTION,
  KANTO,
  SITE_TITLE,
  SITE_URL,
} from "@/app/lib/constant.ts"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"

export const metadata: Metadata = {
  title: `${KANTO.name}イベントの応募・スケジュール`,
  openGraph: {
    url: `${SITE_URL}/kanto_event`,
    siteName: SITE_TITLE,
    images: [
      {
        url: `${CLOUDFRONT_URL}/content/202505_kanto_full.webp`,
        width: 1200,
        height: 848,
        alt: `${SITE_TITLE} - プログラミング×体験学習`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${CLOUDFRONT_URL}/content/202505_kanto_full.webp`,
        width: 1200,
        height: 848,
        alt: `${SITE_TITLE} - プログラミング×体験学習`,
      },
    ],
  },
}

export default function EventLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6">{children}</article>
  )
}
