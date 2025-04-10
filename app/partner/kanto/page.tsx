import { Heading } from "@/app/components/layout/heading"
import { KANTO, KANTO_PARTNERS, PARTNER, SITE_TITLE } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"
import { Partners } from "../partners.tsx"

export const metadata: Metadata = {
  title: `${KANTO.name}${PARTNER.name} | ${SITE_TITLE} - プログラミング×体験学習`,
}

export default function Kanto(): JSX.Element {
  return (
    <>
      <Heading menus={[PARTNER, KANTO]} />
      <Partners partners={KANTO_PARTNERS} />
    </>
  )
}
