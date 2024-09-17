import { Heading } from "@/app/components/layout/heading"
import { PARTNER, SPECIAL, SPECIAL_PARTNERS } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"
import { Partners } from "../partners.tsx"

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
