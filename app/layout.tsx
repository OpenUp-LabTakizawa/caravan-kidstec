import type { Metadata } from "next"
import type React from "react"
import { ScrollToTop } from "./components/button/scrollToTop"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import "./globals.css"
import { SITE_TITLE } from "./lib/constant"

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
    <html lang="ja">
      <body>
        <Header />
        <main className="bg-gray-50 p-4">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
