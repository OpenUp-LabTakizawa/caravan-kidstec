import type { JSX, ReactNode } from "react"

export default function EventLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="gap-4 grid pb-4">{children}</article>
}
