import type { JSX, ReactNode } from "react"

export default function HistoryLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6 text-center">
      {children}
    </article>
  )
}
