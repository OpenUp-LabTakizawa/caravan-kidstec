import { Heading } from "@/app/components/layout/heading"
import type { Picture } from "@/app/interfaces/picture"
import { HIROSHIMA, HIROSHIMA_PICTURES, HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function HiroshimaImage({
  params: { alt },
}: Readonly<{ params: { alt: string } }>): JSX.Element {
  const picture: Picture = HIROSHIMA_PICTURES.find(
    (picture) => picture.alt === alt,
  ) as Picture

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} />
      <Image
        loader={cloudfrontLoader}
        src={picture.src}
        height={1000}
        width={1000}
        alt={picture.alt}
        className="w-full"
      />
      <Link
        href={HISTORY.href + HIROSHIMA.href}
        className="btn max-w-fit mx-auto"
      >
        <ArrowUturnLeftIcon className="rotate-z size-6" />
        {HISTORY.name}に戻る
      </Link>
    </>
  )
}
