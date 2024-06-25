import { Heading } from "@/app/components/layout/heading"
import { Partner } from "@/app/partner/partner"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading content="サポーター/パートナー" href="/partner/hiroshima" />
      <Partner area="Hiroshima" />
    </>
  )
}
