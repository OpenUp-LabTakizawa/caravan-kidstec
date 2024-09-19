import { HashtagIcon } from "@heroicons/react/24/solid"
import type { JSX } from "react"

export function Divider(): JSX.Element {
  return (
    <div className="divider">
      <HashtagIcon className="size-10" />
    </div>
  )
}
