import { Bounce } from "@/app/components/animation/bounce"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import styles from "./lineAddFriends.module.css"

export function LineAddFriends({
  linkLink,
}: Readonly<{ linkLink: string }>): JSX.Element {
  return (
    <Bounce>
      <Link href={linkLink} className="block mx-auto w-fit">
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
        className={`bg-[#00C300] btn shadow-lg text-lg text-white ${styles.greenShine}`}
      >
        LINEで簡単応募する！
        <ArrowRightIcon className={`size-5 ${styles.arrowRight}`} />
      </Link>
    </Bounce>
  )
}

export function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <section className="bg-amber-50 mx-auto p-4 rounded-2xl space-y-2 text-center w-fit">
      <b>
        LINE公式アカウントから、
        <br />
        次回開催の通知を受け取れます。
      </b>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
