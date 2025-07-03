import type { Metadata } from "next"
import type { JSX } from "react"
import { Heading } from "@/app/components/layout/heading"
import {
  PARTNER,
  SITE_TITLE,
  SPECIAL,
  SPECIAL_PARTNERS,
} from "@/app/lib/constant"
import { Partners } from "../partners.tsx"

export const metadata: Metadata = {
  title: `${SPECIAL.name}${PARTNER.name} | ${SITE_TITLE} - プログラミング×体験学習`,
}

export default function Special(): JSX.Element {
  return (
    <>
      <Heading menus={[PARTNER, SPECIAL]} />
      <Partners partners={SPECIAL_PARTNERS} />
    </>
  )
}
