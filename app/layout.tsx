import { ScrollToTop } from "@/app/components/button/scrollToTop"
import { Footer } from "@/app/components/layout/footer"
import { Header } from "@/app/components/layout/header"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import "./globals.css"
import { DESCRIPTION, SITE_TITLE } from "@/app/lib/constant"
import localFont from "next/font/local"

const zenMaruGothic = localFont({
  src: [
    {
      path: "./fonts/ZenMaruGothic-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/ZenMaruGothic-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-zen-maru-gothic",
})

const zenKakuGothicNew = localFont({
  src: [
    {
      path: "./fonts/ZenKakuGothicNew-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/ZenKakuGothicNew-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-zen-kaku-gothic-new",
})

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://caravan-kidstec.com"),
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
