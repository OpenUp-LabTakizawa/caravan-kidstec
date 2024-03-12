import type { Metadata } from 'next'
import type React from 'react'
import { Footer } from './footer'
import './globals.css'
import { Navbar } from './navbar'

export const metadata: Metadata = {
  title: 'こどもテックキャラバン',
  description: 'こども向けマルチ体験ワークショップイベント',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
