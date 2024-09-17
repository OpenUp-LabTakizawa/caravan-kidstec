import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Submenu } from "@/app/interfaces/menu"
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

export default function HiroshimaMovie({
  params: { area, date },
}: Readonly<{ params: { area: string; date: string } }>): JSX.Element {
  const eventArea: Submenu = area === "kanto" ? KANTO : HIROSHIMA
  const history: EventDate[] =
    area === "kanto" ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const submenu: Submenu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menu={HISTORY} submenus={[eventArea, submenu]} />
      <Video date={eventDate.date} />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
