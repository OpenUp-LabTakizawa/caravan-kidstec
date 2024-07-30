import { QandAs } from "@/app/components/layout/qAndA"
import { HIROSHIMA, HIROSHIMA_LINE } from "@/app/lib/constant"
import type { JSX } from "react"

export default function QandA(): JSX.Element {
  return <QandAs submenu={HIROSHIMA} lineLink={HIROSHIMA_LINE} />
}
