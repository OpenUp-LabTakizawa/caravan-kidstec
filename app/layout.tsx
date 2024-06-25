import type { Metadata } from "next"
import { Zen_Kaku_Gothic_New, Zen_Maru_Gothic } from "next/font/google"
import type React from "react"
import { ScrollToTop } from "./components/button/scrollToTop"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import "./globals.css"
import { SITE_TITLE } from "./lib/constant"

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru-gothic",
})

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
})

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "こども向けマルチ体験ワークショップイベント",
  metadataBase: new URL("https://caravan-kidstec.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${zenMaruGothic.variable} ${zenKakuGothicNew.variable}`}
    >
      <body className="font-zenKakuGothicNew">
        <Header />
        <main className="text-xs sm:px-12">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
