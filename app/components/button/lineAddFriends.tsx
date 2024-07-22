import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function LineAddFriends({
  linkLink,
}: Readonly<{ linkLink: string }>): JSX.Element {
  return (
    <Link href={linkLink} className="mx-auto">
      <Image
        src="/line_add_friends.avif"
        width={232}
        height={72}
        alt="友だち追加"
        className="border-0 mx-auto shadow-lg w-auto"
      />
    </Link>
  )
}

export function LineApply({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <Link href={lineLink}>
      <button
        type="button"
        className="bg-[#00C300] btn shadow-lg green-shine text-lg text-white"
      >
        LINEで簡単応募する！
        <ArrowRightIcon className="arrow-right size-5" />
      </button>
    </Link>
  )
}

export function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
      <p className="font-semibold">
        LINE公式アカウントから、
        <br />
        次回開催の通知を受け取れます。
      </p>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
