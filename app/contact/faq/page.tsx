import { Heading } from "@/app/components/layout/heading"
import { CONTACT, FAQ } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Faq(): JSX.Element {
  return <Heading menu={CONTACT} submenu={FAQ} />
}
