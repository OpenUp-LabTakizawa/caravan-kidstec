import { Heading } from "@/app/components/layout/heading"
import type { TilePicture } from "@/app/interfaces/picture"
import { HIROSHIMA, HIROSHIMA_HISTORY, HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での実績`,
}

export default function HiroshimaImage({
  params: { pathname },
}: Readonly<{ params: { pathname: string } }>): JSX.Element {
  const selectedPicture: TilePicture = HIROSHIMA_HISTORY.find((history) => {
    return history.pictures.some((picture) => picture.pathname === pathname)
  })?.pictures.find((picture) => picture.pathname === pathname) as TilePicture

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} />
      <Image
        loader={cloudfrontLoader}
        src={selectedPicture.src}
        height={256}
        width={256}
        alt={selectedPicture.alt}
        className="w-full"
      />
      <Link href={HISTORY.href + HIROSHIMA.href} className="btn mx-auto">
        <ArrowUturnLeftIcon className="rotate-z size-6" />
        {HISTORY.name}に戻る
      </Link>
    </>
  )
}
