import { Heading } from "@/app/components/layout/heading"
import { Partner } from "@/app/components/layout/partner"
import { Purpose } from "@/app/components/text/purpose"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center text-sm sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner/hiroshima" />
      <Partner area="Hiroshima" />
      <Purpose />
    </article>
  )
}
