import type { JSX, ReactNode } from "react"

export default function EventLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="grid gap-4 pb-4">{children}</article>
}
