import { PARTNER } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"

export const metadata: Metadata = {
  title: PARTNER.name,
}

export default function PartnerLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6 text-center">
      {children}
    </article>
  )
}
