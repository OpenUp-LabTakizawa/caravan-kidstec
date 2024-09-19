import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import type { Menu } from "@/app/interfaces/menu"
import type { TilePicture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HISTORY,
  KANTO,
  KANTO_HISTORY,
} from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import type { Metadata } from "next"
import Image from "next/image"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: "活動実績",
}

export default function Picture({
  params: { area, date, name },
}: Readonly<{
  params: { area: string; date: string; name: string }
}>): JSX.Element {
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const tilePicture: TilePicture = eventDate.pictures.find(
    (picture) => picture.name === name,
  ) as TilePicture
  const movie: Menu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menus={[HISTORY, menu, movie]} />
      <Image
        loader={cloudfrontLoader}
        src={tilePicture.src}
        width={256}
        height={256}
        alt={tilePicture.alt}
        className="w-full"
      />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
