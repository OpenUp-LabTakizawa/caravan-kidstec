import { BackButton } from "@/app/components/button/backButton"
import { Heading } from "@/app/components/layout/heading"
import type { Submenu } from "@/app/interfaces/menu"
import type { TilePicture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import type { Metadata } from "next"
import Image from "next/image"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での活動・実績`,
}

export default function HiroshimaImage({
  params: { date, name },
}: Readonly<{ params: { date: string; name: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.date === date,
  ) as EventDate
  const tilePicture: TilePicture = eventDate.pictures.find(
    (picture) => picture.name === name,
  ) as TilePicture
  const submenu: Submenu = {
    name: eventDate.title,
    pathname: `/${eventDate.date}`,
    textColor: "text-yellow-400",
  }

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA, submenu]} />
      <Image
        loader={cloudfrontLoader}
        src={tilePicture.src}
        height={256}
        width={256}
        alt={tilePicture.alt}
        className="w-full"
      />
      <BackButton
        href={HISTORY.pathname + HIROSHIMA.pathname}
        name={HISTORY.name}
      />
    </>
  )
}
