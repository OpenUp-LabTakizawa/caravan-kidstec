import { Purpose } from "@/app/components/text/purpose"
import type React from "react"

export default function PartnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <article className="grid gap-6 p-4 text-center">
      {children}
      <Purpose />
    </article>
  )
}
