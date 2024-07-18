import { Heading } from "@/app/components/layout/heading"
import { CONTACT, FAQ } from "@/app/lib/constant"
import type React from "react"

export default function Faq(): React.JSX.Element {
  return <Heading menu={CONTACT} submenu={FAQ} />
}
