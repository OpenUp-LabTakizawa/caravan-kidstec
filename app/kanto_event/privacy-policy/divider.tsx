import { HashtagIcon } from "@heroicons/react/24/solid"
import type { JSX } from "react"

export function Divider(): JSX.Element {
  return (
    <div className="flex flex-row gap-4 h-4 items-center my-4 self-stretch whitespace-nowrap after:bg-gray-300 after:content-[''] after:flex-grow after:h-0.5 after:w-full before:bg-gray-300 before:content-[''] before:flex-grow before:h-0.5 before:w-full">
      <HashtagIcon className="size-10" />
    </div>
  )
}
