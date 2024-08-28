import type { JSX, ReactNode } from "react"

export default function PartnerLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="pb-4 space-y-6 text-center">{children}</article>
}
