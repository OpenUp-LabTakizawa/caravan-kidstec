import type { JSX, ReactNode } from "react"

export default function ContactLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="grid gap-6">{children}</article>
}
