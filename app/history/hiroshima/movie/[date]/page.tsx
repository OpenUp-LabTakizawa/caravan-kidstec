import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Submenu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Link from "next/link"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での実績`,
}

export default function HiroshimaMovie({
  params: { date },
}: Readonly<{ params: { date: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.date === date,
  ) as EventDate
  const submenu: Submenu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA, submenu]} />
      <Video date={eventDate.date} />
      <Link
        href={HISTORY.pathname + HIROSHIMA.pathname}
        className="btn mx-auto"
      >
        <ArrowUturnLeftIcon className="rotate-z size-6" />
        {HISTORY.name}に戻る
      </Link>
    </>
  )
}
