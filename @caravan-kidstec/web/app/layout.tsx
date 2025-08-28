import type { Metadata } from "next"
import { ViewTransitions } from "next-view-transitions"
import type { JSX } from "react"
import { Footer } from "./footer.tsx"
import { Header } from "./header.tsx"
import { ScrollToTop } from "./scrollToTop.tsx"
import "./globals.css"
import { Zen_Maru_Gothic } from "next/font/google"
import {
  CLOUDFRONT_URL,
  DESCRIPTION,
  KANTO,
  SITE_TITLE,
  SITE_URL,
} from "./lib/constant.ts"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_TITLE} - プログラミング×体験学習`,
    template: `%s | ${SITE_TITLE} - プログラミング×体験学習`,
  },
  description: DESCRIPTION,
  metadataBase:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
      ? undefined
      : new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${CLOUDFRONT_URL}/logo/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} - プログラミング×体験学習`,
      },
    ],
    videos: [
      {
        url: `${CLOUDFRONT_URL}/movie${KANTO.pathname}/202410.webm`,
        type: "video/webm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${CLOUDFRONT_URL}/logo/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} - プログラミング×体験学習`,
      },
    ],
  },
}

export default function RootLayout(props: LayoutProps<"/">): JSX.Element {
  return (
    <html lang="ja" className={zenMaruGothic.variable}>
      <body className="font-maru text-gray-800">
        <ViewTransitions>
          <Header />
          <main className="text-xs sm:px-12 sm:text-sm md:text-base">
            {props.children}
            {props.modal}
            <ScrollToTop />
          </main>
          <Footer />
        </ViewTransitions>
      </body>
    </html>
  )
}
