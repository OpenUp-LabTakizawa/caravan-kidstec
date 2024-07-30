import { QandAs } from "@/app/components/layout/qAndA"
import { TOKYO_CHIBA, TOKYO_CHIBA_LINE } from "@/app/lib/constant"
import type { JSX } from "react"

export default function QandA(): JSX.Element {
  return <QandAs submenu={TOKYO_CHIBA} lineLink={TOKYO_CHIBA_LINE} />
}
