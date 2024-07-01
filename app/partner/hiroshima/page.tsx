import { Heading } from "@/app/components/layout/heading"
import { HIROSHIMA, PARTNER } from "@/app/lib/constant"
import { Partner } from "@/app/partner/partner"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading navigation={PARTNER} content={HIROSHIMA} />
      <Partner area={HIROSHIMA.name} />
    </>
  )
}
