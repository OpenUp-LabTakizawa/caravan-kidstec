import type { Metadata, Route } from "next"
import Image from "next/image"
import type { JSX } from "react"
import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import type { Menu } from "@/app/interfaces/menu"
import type { Picture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  CLOUDFRONT_URL,
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HISTORY,
  KANTO,
  KANTO_HISTORY,
  SITE_TITLE,
} from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"

export const dynamicParams: boolean = false

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string; image: string }>
}>): Promise<Metadata> {
  const { area, date, image } = await params
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) => picture.src.split("/")[5].split(".")[0] === image,
  ) as Picture
  return {
    title: `${picture.alt} | ${SITE_TITLE} - プログラミング×体験学習`,
    description: `${menu.name} ${eventDate.title} こどもテックキャラバンの写真`,
    openGraph: {
      title: `${picture.alt} | ${SITE_TITLE} - プログラミング×体験学習`,
      description: `${menu.name} ${eventDate.title} こどもテックキャラバンの写真`,
      images: [
        {
          url: `${CLOUDFRONT_URL}${picture.src}`,
          width: 1920,
          height: 1280,
          alt: picture.alt,
        },
      ],
    },
  }
}

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
        image: picture.src.split("/")[5].split(".")[0],
      })),
    )
  const hiroshimaArea: string = HIROSHIMA.pathname.split("/")[1]
  const hiroshimaParams: { area: string; date: string; image: string }[] =
    HIROSHIMA_HISTORY.flatMap((eventDate) =>
      eventDate.pictures.map((picture) => ({
        area: hiroshimaArea,
        date: eventDate.date,
        image: picture.src.split("/")[5].split(".")[0],
      })),
    )
  return [...kantoParams, ...hiroshimaParams]
}

export default async function HistoryPicture({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string; image: string }>
}>): Promise<JSX.Element> {
  const { area, date, image }: { area: string; date: string; image: string } =
    await params
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) => picture.src.split("/")[5].split(".")[0] === image,
  ) as Picture
  const movie: Menu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}` as Route,
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
        placeholder="blur"
        blurDataURL={picture.blurDataUrl}
        className="w-full"
      />
      <BackButton href={HISTORY.pathname} name={HISTORY.name} />
    </>
  )
}
