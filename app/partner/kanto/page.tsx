import { Heading } from "@/app/components/layout/heading"
import { KANTO, KANTO_PARTNERS, PARTNER } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: KANTO.name + PARTNER.name,
}

export default function Kanto(): JSX.Element {
  return (
    <>
      <Heading menu={PARTNER} submenus={[KANTO]} />
      <Partners partners={KANTO_PARTNERS} />
    </>
  )
}
