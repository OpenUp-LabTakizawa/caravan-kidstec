import type { Metadata, Route } from "next"
import type { JSX } from "react"
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
  SITE_TITLE,
} from "@/app/lib/constant"

export const dynamicParams: boolean = false

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string }>
}>): Promise<Metadata> {
  const { area, date } = await params
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  return {
    title: `${menu.name} ${eventDate.title} 動画 | ${SITE_TITLE} - プログラミング×体験学習`,
    description: `${menu.name} ${eventDate.title} こどもテックキャラバンの動画`,
  }
}

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
    pathname: `/${eventDate.date}` as Route,
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
