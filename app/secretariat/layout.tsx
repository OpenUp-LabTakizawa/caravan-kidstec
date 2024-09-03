import type { JSX, ReactNode } from "react"

export default function SecretariatLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="mx-auto pb-4 space-y-6 w-max">{children}</article>
}
