import { Modal } from "@/app/@modal/(.)history/hiroshima/modal"
import type { TilePicture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA_HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

export default function Picture({
  params: { date, name },
}: Readonly<{ params: { date: string; name: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.date === date,
  ) as EventDate
  const tilePicture: TilePicture = eventDate.pictures.find(
    (picture) => picture.name === name,
  ) as TilePicture

  return (
    <Modal>
      <Image
        loader={cloudfrontLoader}
        src={tilePicture.src}
        width={256}
        height={256}
        alt={tilePicture.alt}
        className="pt-6 w-full"
      />
    </Modal>
  )
}
