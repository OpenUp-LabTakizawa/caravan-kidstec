import type { JSX, ReactNode } from "react"

export default function SponserLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="gap-6 grid pb-4">{children}</article>
}
