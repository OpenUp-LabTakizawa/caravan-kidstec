import { Heading } from "@/app/components/layout/heading"
import { HistoryPanels } from "@/app/components/layout/menuPanel"
import { Video } from "@/app/components/media/video"
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

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} title={eventDate.title} />
      <Video
        src={`https://dk75m1tgsot44.cloudfront.net/movie${eventDate.href}`}
      />
      <Link
        href={HISTORY.href + HIROSHIMA.href}
        className="btn max-w-fit mx-auto"
      >
        <ArrowUturnLeftIcon className="rotate-z size-6" />
        {HISTORY.name}に戻る
      </Link>
      <HistoryPanels menu={HISTORY} submenu={HIROSHIMA} />
    </>
  )
}
