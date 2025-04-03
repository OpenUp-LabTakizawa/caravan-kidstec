import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"

export const metadata: Metadata = {
  title: "応募フォーム",
}

export default function SecretariatLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="pb-4 space-y-6">{children}</article>
}
