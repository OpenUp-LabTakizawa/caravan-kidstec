import { Footer } from "@/app/components/layout/footer"
import { Header } from "@/app/components/layout/header"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import { ScrollToTop } from "./scrollToTop"
import "./globals.css"
import {
  CLOUDFRONT_URL,
  DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/app/lib/constant"
import { Zen_Kaku_Gothic_New, Zen_Maru_Gothic } from "next/font/google"

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
    template: `%s | ${SITE_TITLE}`,
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
        url: `${CLOUDFRONT_URL}/movie/202407.webm`,
        type: "video/webm",
      },
    ],
  },
  verification: {
    google: "f0yxF04OB_SUGuz90AyIQHbysLxWBKHX_u5X39MKhyM",
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
      <body className="font-zenKakuGothicNew">
        <Header />
        <main className="max-w-screen-md mx-auto text-xs sm:px-12 lg:text-base">
          {children}
          {modal}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
