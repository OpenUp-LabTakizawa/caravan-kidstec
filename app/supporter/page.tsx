import { SlideUp } from "@/app/components/animation/slideUp"
import { Divider } from "@/app/components/layout/divider"
import { Heading } from "@/app/components/layout/heading"
import { Purpose } from "@/app/components/text/purpose"
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
        <section
          key={item.name}
          className="bg-base-200 gap-6 grid grid-cols-3 items-center p-4"
        >
          <Link href={item.href} target="_blank" className="link">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="w-full sm:max-h-60 sm:object-contain"
            />
          </Link>
          <h2 className="col-span-2 flex font-semibold items-center justify-center text-lg">
            <Link href={item.href} target="_blank" className="link">
              {item.name}
            </Link>
          </h2>
          <p className="col-span-3 flex font-semibold items-center justify-center text-lg">
            <BuildingOffice2Icon className="size-5 mr-1" />
            {item.business}
          </p>
          <p className="col-span-3 font-bold leading-8 text-2xl text-info">
            <SlideUp className="whitespace-pre sm:whitespace-normal">
              {item.purpose}
            </SlideUp>
          </p>
        </section>
      ))}
      <Divider />
      {supporters.map((item) => (
        <section key={item.name} className="bg-base-200 grid gap-6 p-4">
          <Link href={item.href as string} target="_blank" className="link">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="w-full sm:max-h-60 sm:object-contain"
            />
          </Link>
          <h2 className="flex font-semibold items-center justify-center text-lg">
            <BuildingOffice2Icon className="size-5 mr-1" />
            {item.business}
          </h2>
          <p className="font-bold leading-8 text-2xl text-info">
            <SlideUp className="whitespace-pre sm:whitespace-normal">
              {item.purpose}
            </SlideUp>
          </p>
        </section>
      ))}
      <Purpose />
    </article>
  )
}
