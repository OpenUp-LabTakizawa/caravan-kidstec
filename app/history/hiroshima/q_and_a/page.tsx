import { QandAs } from "@/app/components/layout/qAndA"
import { HIROSHIMA, HIROSHIMA_LINE, HISTORY } from "@/app/lib/constant"
import type { JSX } from "react"

export default function QandA(): JSX.Element {
  return <QandAs lineLink={HIROSHIMA_LINE} menu={HISTORY} submenu={HIROSHIMA} />
}
