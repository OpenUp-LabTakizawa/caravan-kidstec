import { Purpose } from "@/app/components/layout/purpose"
import type { JSX, ReactNode } from "react"

export default function SupporterLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="grid gap-6 pb-4">
      {children}
      <Purpose />
    </article>
  )
}
