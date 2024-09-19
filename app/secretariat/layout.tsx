import { SECRETARIAT, SITE_TITLE } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX, ReactNode } from "react"

export const metadata: Metadata = {
  title: SITE_TITLE + SECRETARIAT.name,
}

export default function SecretariatLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <article className="pb-4 space-y-6">{children}</article>
}
