import type { Metadata } from 'next'
import type React from 'react'
import { Footer } from './components/footer'
import './globals.css'
import { Header } from './components/header'

export const metadata: Metadata = {
  title: 'こどもテックキャラバン',
  description: 'こども向けマルチ体験ワークショップイベント',
  metadataBase: new URL('https://caravan-kidstec.com'),
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
