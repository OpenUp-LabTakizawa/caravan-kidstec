import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export default function HiroshimaVideo({
  params: { key },
}: Readonly<{ params: { key: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.date === key,
  ) as EventDate

  return (
    <>
      <Heading eventDate={eventDate} menu={HISTORY} submenu={HIROSHIMA} />
      <Video src={`https://dk75m1tgsot44.cloudfront.net/movie/${key}`} />
      <Link
        href={HISTORY.href + HIROSHIMA.href}
        className="btn max-w-fit mx-auto"
      >
        <ArrowUturnLeftIcon className="size-6 rotate-z" />
        過去の実績に戻る
      </Link>
    </>
  )
}
