import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import { Footer } from "./footer.tsx"
import { Header } from "./header.tsx"
import { ScrollToTop } from "./scrollToTop.tsx"
import "./globals.css"
import { Zen_Kaku_Gothic_New, Zen_Maru_Gothic } from "next/font/google"
import {
  CLOUDFRONT_URL,
  DESCRIPTION,
  HIROSHIMA,
  SITE_TITLE,
  SITE_URL,
} from "./lib/constant.ts"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-maru-gothic",
})
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku-gothic-new",
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
    videos: [
      {
        url: `${CLOUDFRONT_URL}/movie${HIROSHIMA.pathname}/202407.webm`,
        type: "video/webm",
      },
    ],
  },
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>): JSX.Element {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${zenKakuGothicNew.variable}`}
    >
      <body className="font-[family-name:var(--font-zen-kaku-gothic-new)] text-gray-800">
        <Header />
        <main className="max-w-(--breakpoint-md) mx-auto text-xs sm:px-12 sm:text-sm md:text-base">
          {children}
          {modal}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
