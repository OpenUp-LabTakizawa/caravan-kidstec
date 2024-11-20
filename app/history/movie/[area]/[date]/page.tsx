import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Menu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HISTORY,
  KANTO,
  KANTO_HISTORY,
} from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: "活動実績",
}
export const dynamicParams: boolean = false
export function generateStaticParams(): { area: string; date: string }[] {
  const hiroshimaArea: string = HIROSHIMA.pathname.split("/")[1]
  return HIROSHIMA_HISTORY.map((eventDate) => ({
    area: hiroshimaArea,
    date: eventDate.date,
  }))
}

export default async function Movie({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string }>
}>): Promise<JSX.Element> {
  const syncParams = await params
  const menu: Menu =
    `/${syncParams.area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${syncParams.area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === syncParams.date,
  ) as EventDate
  const movie: Menu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menus={[HISTORY, menu, movie]} />
      <Video pathname={menu.pathname} date={eventDate.date} />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
