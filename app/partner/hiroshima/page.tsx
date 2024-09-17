import { Heading } from "@/app/components/layout/heading"
import { HIROSHIMA, HIROSHIMA_PARTNERS, PARTNER } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"
import { Partners } from "../partners.tsx"

export const metadata: Metadata = {
  title: HIROSHIMA.name + PARTNER.name,
}

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={PARTNER} submenus={[HIROSHIMA]} />
      <Partners partners={HIROSHIMA_PARTNERS} />
    </>
  )
}
