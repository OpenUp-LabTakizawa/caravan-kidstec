import { Heading } from "@/app/components/layout/heading"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Partner(): React.JSX.Element {
  return (
    <article className="grid gap-6 sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner" />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-2xl text-center sm:col-span-2">
          広島エリア
        </h2>
        <section className="bg-base-200 grid gap-4 p-4 w-fit mx-auto">
          <h3 className="font-bold text-center text-xl">
            <Link href="https://bplab.biz/" target="_blank" className="link">
              BPL Inc.
            </Link>
          </h3>
          <Image
            src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/bpl_logo.svg"
            width={1000}
            height={1000}
            alt="bpl_logo"
            className="w-full sm:max-h-60 sm:object-contain"
          />
        </section>
        <section className="bg-base-200 grid gap-4 p-4 w-fit mx-auto">
          <h3 className="font-bold text-center text-xl">
            <Link href="https://fuudo.jp/" target="_blank" className="link">
              一般社団法人 フウド
            </Link>
          </h3>
          <Image
            src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/fuudo_logo.webp"
            width={1000}
            height={1000}
            alt="fuudo_logo"
            className="w-full sm:max-h-60 sm:object-contain"
          />
        </section>
        <section className="bg-base-200 grid gap-4 p-4 w-fit mx-auto">
          <h3 className="font-bold text-center text-xl">
            <Link
              href="https://sanken-hiroshima.org/"
              target="_blank"
              className="link"
            >
              NPO法人 三段峡・
              <br className="sm:hidden" />
              太田川流域研究会
            </Link>
          </h3>
          <Image
            src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/sanken_logo.webp"
            width={1000}
            height={1000}
            alt="sanken_logo"
            className="w-full sm:max-h-60 sm:object-contain"
          />
        </section>
        <section className="bg-base-200 grid gap-4 p-4 w-fit mx-auto">
          <h3 className="font-bold text-center text-xl">広島大学 さんけん部</h3>
          <Image
            src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/sanken_club.webp"
            width={1000}
            height={1000}
            alt="sanken_club"
            className="w-full sm:max-h-60 sm:object-contain"
          />
        </section>
      </section>
    </article>
  )
}
