import { Modal } from "@/app/@modal/(.)history/hiroshima/modal"
import type { TilePicture } from "@/app/interfaces/picture"
import { HIROSHIMA_HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

export default function HiroshimaImage({
  params: { pathname },
}: Readonly<{ params: { pathname: string } }>): JSX.Element {
  const selectedPicture: TilePicture = HIROSHIMA_HISTORY.find((history) => {
    return history.pictures.some((picture) => picture.pathname === pathname)
  })?.pictures.find((picture) => picture.pathname === pathname) as TilePicture

  return (
    <Modal>
      <Image
        loader={cloudfrontLoader}
        src={selectedPicture.src}
        height={256}
        width={256}
        alt={selectedPicture.alt}
        className="pt-4 w-full"
      />
    </Modal>
  )
}
