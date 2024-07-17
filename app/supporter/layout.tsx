import { Purpose } from "@/app/components/layout/purpose"
import type React from "react"

export default function SupporterLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <article className="grid gap-6 pb-4">
      {children}
      <Purpose />
    </article>
  )
}
