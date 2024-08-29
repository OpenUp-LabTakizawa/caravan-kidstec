import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Submenu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export default function HiroshimaMovie({
  params: { href },
}: Readonly<{ params: { href: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.href.split("/").pop() === href,
  ) as EventDate
  const submenu: Submenu = {
    name: eventDate.title,
    href: eventDate.href,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA, submenu]} />
      <Video pathname={eventDate.href} />
      <Link href={HISTORY.href + HIROSHIMA.href} className="btn mx-auto">
        <ArrowUturnLeftIcon className="rotate-z size-6" />
        {HISTORY.name}に戻る
      </Link>
    </>
  )
}
