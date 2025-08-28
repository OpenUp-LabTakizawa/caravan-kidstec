import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"
import { SPONSOR } from "@/app/lib/constant"

export const metadata: Metadata = {
  title: SPONSOR.name,
}

export default function SponsorLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6">{children}</article>
  )
}
