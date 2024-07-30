import { QandAs } from "@/app/components/layout/qAndA"
import { EVENT, TOKYO_CHIBA, TOKYO_CHIBA_LINE } from "@/app/lib/constant"
import type { JSX } from "react"

export default function QandA(): JSX.Element {
  return (
    <QandAs lineLink={TOKYO_CHIBA_LINE} menu={EVENT} submenu={TOKYO_CHIBA} />
  )
}
