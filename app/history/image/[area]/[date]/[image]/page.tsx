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
export const dynamicParams: boolean = false
export function generateStaticParams(): {
  area: string
  date: string
  image: string
}[] {
  const kantoArea: string = KANTO.pathname.split("/")[1]
  const kantoParams: { area: string; date: string; image: string }[] =
    KANTO_HISTORY.flatMap((eventDate) =>
      eventDate.pictures.map((picture) => ({
        area: kantoArea,
        date: eventDate.date,
        image: picture.src.split("/").reverse()[0].split(".")[0],
      })),
    )
  const hiroshimaArea: string = HIROSHIMA.pathname.split("/")[1]
  const hiroshimaParams: { area: string; date: string; image: string }[] =
    HIROSHIMA_HISTORY.flatMap((eventDate) =>
      eventDate.pictures.map((picture) => ({
        area: hiroshimaArea,
        date: eventDate.date,
        image: picture.src.split("/").reverse()[0].split(".")[0],
      })),
    )
  return [...kantoParams, ...hiroshimaParams]
}

export default async function HistoryPicture({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string; image: string }>
}>): Promise<JSX.Element> {
  const syncParams = await params
  const menu: Menu =
    `/${syncParams.area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${syncParams.area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === syncParams.date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) =>
      picture.src.split("/").reverse()[0].split(".")[0] === syncParams.image,
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
        width={1920}
        height={1280}
        alt={picture.alt}
        className="w-full"
      />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
