import { Modal } from "@/app/@modal/(.)history/modal"
import type { Picture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA_HISTORY, KANTO, KANTO_HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

export default function PictureModal({
  params: { area, date, image },
}: Readonly<{
  params: { area: string; date: string; image: string }
}>): JSX.Element {
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) => picture.src.split("/").reverse()[0].split(".")[0] === image,
  ) as Picture

  return (
    <Modal>
      <Image
        loader={cloudfrontLoader}
        src={picture.src}
        width={256}
        height={256}
        alt={picture.alt}
        className="pt-6 w-full"
      />
    </Modal>
  )
}
