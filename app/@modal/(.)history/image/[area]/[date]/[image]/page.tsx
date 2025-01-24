import { Modal } from "@/app/@modal/(.)history/modal"
import type { Picture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  KANTO,
  KANTO_HISTORY,
} from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

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

export default async function PictureModal({
  params,
}: Readonly<{
  params: Promise<{ area: string; date: string; image: string }>
}>): Promise<JSX.Element> {
  const syncParams = await params
  const history: EventDate[] =
    `/${syncParams.area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === syncParams.date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) =>
      picture.src.split("/").reverse()[0].split(".")[0] === syncParams.image,
  ) as Picture

  return (
    <Modal>
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
    </Modal>
  )
}
