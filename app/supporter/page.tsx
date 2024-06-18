import { SlideUp } from "@/app/components/animation/slideUp"
import { Heading } from "@/app/components/layout/heading"
import { supporters } from "@/app/lib/constant"
import { BuildingOffice2Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Supporter(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center sm:px-12">
      <Heading content="サポーター/パートナー" href="/supporter" />
      {supporters.map((item) => (
        <section key={item.name} className="bg-base-200 grid gap-6 p-4">
          <Link href={item.href} target="_blank" className="link">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="w-full sm:max-h-60 sm:object-contain"
            />
          </Link>
          <h2
            className={`flex font-semibold items-center justify-center text-2xl ${item.color}`}
          >
            <BuildingOffice2Icon className="size-5 mr-1" />
            {item.business}
          </h2>
          <p className="font-bold leading-8 text-lg">
            <SlideUp className="whitespace-pre sm:whitespace-normal">
              {item.purpose}
            </SlideUp>
          </p>
        </section>
      ))}
      <section className="bg-base-200 font-semibold grid gap-6 p-4 text-xl">
        <p>
          こどもテックキャラバンでは、
          <br className="sm:hidden" />
          様々な企業や団体が手を取り合い、
          <br />
          社会課題解決を目指しています。
        </p>
        <p>
          わたしたちは関わる全ての人が、
          <br className="sm:hidden" />
          学び、遊び、心沸き立つような可能性が
          <br />
          広がる社会を期待しています。
        </p>
      </section>
    </article>
  )
}
