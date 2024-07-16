import { Purpose } from "@/app/components/layout/purpose"
import type React from "react"

export default function PartnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <article className="grid gap-6 pb-4 text-center">
      {children}
      <Purpose />
    </article>
  )
}
