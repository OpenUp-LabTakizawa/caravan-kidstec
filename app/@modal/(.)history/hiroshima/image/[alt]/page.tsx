import { Modal } from "@/app/@modal/(.)history/hiroshima/modal"
import type { Picture } from "@/app/interfaces/picture"
import { HIROSHIMA_PICTURES } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type { JSX } from "react"

export default function HiroshimaImage({
  params: { alt },
}: Readonly<{ params: { alt: string } }>): JSX.Element {
  const picture: Picture = HIROSHIMA_PICTURES.find(
    (picture) => picture.alt === alt,
  ) as Picture

  return (
    <Modal>
      <Image
        loader={cloudfrontLoader}
        src={picture.src}
        height={256}
        width={256}
        alt={picture.alt}
        className="pt-4 w-full"
      />
    </Modal>
  )
}
