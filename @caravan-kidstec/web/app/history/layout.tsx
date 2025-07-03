import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import { HISTORY } from "@/app/lib/constant"

export const metadata: Metadata = {
  title: HISTORY.name,
}

export default function HistoryLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6 text-center">
      {children}
    </article>
  )
}
