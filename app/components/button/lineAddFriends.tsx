import { Bounce } from "@/app/components/animation/bounce"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function LineAddFriends({
  linkLink,
}: Readonly<{ linkLink: string }>): JSX.Element {
  return (
    <Bounce>
      <Link href={linkLink} className="mx-auto">
        <Image
          src="/line_add_friends.avif"
          width={232}
          height={72}
          alt="友だち追加"
          className="border-0 mx-auto shadow-lg w-auto"
        />
      </Link>
    </Bounce>
  )
}

export function LineApply({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <Bounce className="mx-auto">
      <Link href={lineLink}>
        <button
          type="button"
          className="bg-[#00C300] btn green-shine shadow-lg text-lg text-white"
        >
          LINEで簡単応募する！
          <ArrowRightIcon className="arrow-right size-5" />
        </button>
      </Link>
    </Bounce>
  )
}

export function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): JSX.Element {
  return (
    <section className="bg-amber-50 gap-1 grid mx-auto p-4 rounded-2xl text-center w-max">
      <b>
        LINE公式アカウントから、
        <br />
        次回開催の通知を受け取れます。
      </b>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
