import type React from "react"

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return <article className="grid gap-6">{children}</article>
}
