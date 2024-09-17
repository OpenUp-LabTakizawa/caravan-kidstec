import { Heading } from "@/app/components/layout/heading"
import { PARTNER, SPECIAL, SPECIAL_PARTNERS } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: SPECIAL.name + PARTNER.name,
}

export default function Special(): JSX.Element {
  return (
    <>
      <Heading menu={PARTNER} submenus={[SPECIAL]} />
      <Partners partners={SPECIAL_PARTNERS} />
    </>
  )
}
