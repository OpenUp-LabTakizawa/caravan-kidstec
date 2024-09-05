import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Submenu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での活動・実績`,
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
      <BackButton
        href={HISTORY.pathname + HIROSHIMA.pathname}
        name={HISTORY.name}
      />
    </>
  )
}
