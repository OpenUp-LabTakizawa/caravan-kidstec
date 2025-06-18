import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { Bounce } from "@/app/components/animation/bounce"
import styles from "./lineAddFriends.module.css"

export function LineAddFriends({
  linkLink,
}: Readonly<{ linkLink: string }>): JSX.Element {
  return (
    <Bounce>
      <Link
        href={linkLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block button-pop mx-auto w-fit"
      >
        <Image
          src="/line_add_friends.avif"
          width={116}
          height={36}
          alt="友だち追加"
          className="shadow-lg"
        />
      </Link>
    </Bounce>
  )
}

export function LineApply({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <Bounce>
      <Link
        href={lineLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-[#00C300] button-pop font-bold gap-2 h-12 inline-flex items-center justify-center px-4 rounded-xl shadow-lg text-lg text-white ${styles.greenShine}`}
      >
        LINEで簡単応募する！
        <ArrowRightIcon className={`size-5 ${styles.arrowRight}`} />
      </Link>
    </Bounce>
  )
}

export function LineRegister({
  areaName,
  lineLink,
}: Readonly<{ areaName: string; lineLink: string }>): JSX.Element {
  return (
    <section className="bg-amber-50 mx-auto p-4 rounded-2xl space-y-2 text-center w-fit">
      <b>
        {areaName}LINE公式アカウントから、
        <br />
        次回開催の通知を受け取れます。
      </b>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
