import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import { SECRETARIAT } from "@/app/lib/constant"

export const metadata: Metadata = {
  title: SECRETARIAT.name,
}

export default function SecretariatLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6">{children}</article>
  )
}
