import { Heading } from "@/app/components/layout/heading"
import { Partner } from "@/app/partner/partner"
import type React from "react"

export default function Chiba(): React.JSX.Element {
  return (
    <>
      <Heading content="サポーター/パートナー" href="/partner/chiba" />
      <Partner area="Chiba" />
    </>
  )
}
