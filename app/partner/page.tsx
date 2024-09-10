import { Heading } from "@/app/components/layout/heading"
import { PartnerTablist } from "@/app/components/layout/tablist"
import { PARTNER } from "@/app/lib/constant"
import type { JSX } from "react"

export default function SponserPage(): JSX.Element {
  return (
    <>
      <Heading menu={PARTNER} />
      <PartnerTablist />
    </>
  )
}
