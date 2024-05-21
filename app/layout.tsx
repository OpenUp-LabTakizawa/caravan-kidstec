import type { Metadata } from 'next'
import type React from 'react'
import { Footer } from './components/footer'
import './globals.css'
import { Navbar } from './components/navbar'

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
