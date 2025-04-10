import { Heading } from "@/app/components/layout/heading"
import {
  HIROSHIMA,
  HIROSHIMA_PARTNERS,
  PARTNER,
  SITE_TITLE,
} from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"
import { Partners } from "../partners.tsx"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}${PARTNER.name} | ${SITE_TITLE} - プログラミング×体験学習`,
}

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menus={[PARTNER, HIROSHIMA]} />
      <Partners partners={HIROSHIMA_PARTNERS} />
    </>
  )
}
