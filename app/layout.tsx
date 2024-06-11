import type { Metadata } from "next"
import type React from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { ScrollToTop } from "./components/scrollToTop"
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
