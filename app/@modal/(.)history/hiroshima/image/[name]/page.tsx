import { Modal } from "@/app/@modal/(.)history/hiroshima/modal"
import type { TilePicture } from "@/app/interfaces/picture"
import { HIROSHIMA_HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

export default function HiroshimaImage({
  params: { name },
}: Readonly<{ params: { name: string } }>): JSX.Element {
  const selectedPicture: TilePicture = HIROSHIMA_HISTORY.find((history) => {
    return history.pictures.some((picture) => picture.name === name)
  })?.pictures.find((picture) => picture.name === name) as TilePicture

  return (
    <Modal>
      <Image
        loader={cloudfrontLoader}
        src={selectedPicture.src}
        height={256}
        width={256}
        alt={selectedPicture.alt}
        className="pt-6 w-full"
      />
    </Modal>
  )
}
