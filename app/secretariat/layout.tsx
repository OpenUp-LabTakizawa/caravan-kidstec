import {
  CLOUDFRONT_URL,
  DESCRIPTION,
  SECRETARIAT,
  SITE_TITLE,
} from "@/app/lib/constant.ts"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"

export const metadata: Metadata = {
  title: SITE_TITLE + SECRETARIAT.name,
  openGraph: {
    images: [
      {
        url: `${CLOUDFRONT_URL}/logo/202505_event_ready.webp`,
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
        url: `${CLOUDFRONT_URL}/logo/202505_event_ready.webp`,
        width: 1200,
        height: 848,
        alt: `${SITE_TITLE} - プログラミング×体験学習`,
      },
    ],
  },
}

export default function SecretariatLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6">{children}</article>
  )
}
