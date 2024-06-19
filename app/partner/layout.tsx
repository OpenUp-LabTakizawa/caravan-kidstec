import { Purpose } from "@/app/components/text/purpose"
import type React from "react"

export default function PartnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <article className="grid gap-6 text-center text-sm sm:px-12">
      {children}
      <Purpose />
    </article>
  )
}
