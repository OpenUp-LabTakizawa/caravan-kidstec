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
  const kantoArea: string = KANTO.pathname.split("/")[1]
  const kantoParams: { area: string; date: string }[] = KANTO_HISTORY.map(
    (eventDate) => ({
      area: kantoArea,
      date: eventDate.date,
    }),
  )
  const hiroshimaArea: string = HIROSHIMA.pathname.split("/")[1]
  const hiroshimaParams: { area: string; date: string }[] =
    HIROSHIMA_HISTORY.map((eventDate) => ({
      area: hiroshimaArea,
      date: eventDate.date,
    }))
  return [...kantoParams, ...hiroshimaParams]
}

export default async function Movie({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string }>
}>): Promise<JSX.Element> {
  const { area, date }: { area: string; date: string } = await params
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const movie: Menu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menus={[HISTORY, menu, movie]} />
      <Video date={eventDate.date} pathname={menu.pathname} />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
