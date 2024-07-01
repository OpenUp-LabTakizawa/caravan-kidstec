import { Heading } from "@/app/components/layout/heading"
import { TOKYO_CHIBA } from "@/app/lib/constant"
import { PARTNER } from "@/app/lib/constant"
import { Partner } from "@/app/partner/partner"
import type React from "react"

export default function Chiba(): React.JSX.Element {
  return (
    <>
      <Heading content={PARTNER.name} name={TOKYO_CHIBA.name} />
      <Partner area={TOKYO_CHIBA.name} />
    </>
  )
}
