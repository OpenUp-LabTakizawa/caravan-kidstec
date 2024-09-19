import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import type { Menu } from "@/app/interfaces/menu"
import type { Picture } from "@/app/interfaces/picture"
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

export default function HistoryPicture({
  params: { area, date, image },
}: Readonly<{
  params: { area: string; date: string; image: string }
}>): JSX.Element {
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) => picture.src.split("/").reverse()[0].split(".")[0] === image,
  ) as Picture
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
        src={picture.src}
        width={256}
        height={256}
        alt={picture.alt}
        className="w-full"
      />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
