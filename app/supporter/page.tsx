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
    <article className="grid gap-6 text-xs sm:px-12">
      <Heading content="サポーター/パートナー" href="/supporter" />
      {supporters.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-1 grid grid-cols-3 items-center min-h-32 p-4 sm:grid-cols-2"
        >
          <Image
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="col-span-1 w-full object-contain sm:max-h-20"
          />
          <div className="col-span-2 grid gap-2 text-center sm:col-span-1">
            <h2 className="flex font-semibold items-center justify-center text-sm">
              <Link href={item.href} target="_blank" className="link">
                {item.name}
              </Link>
            </h2>
            <p className="flex items-center justify-center whitespace-pre sm:whitespace-normal">
              <BuildingOffice2Icon className="size-5 mr-1" />
              {item.business}
            </p>
            <p className="font-bold text-info">
              <SlideUp className="whitespace-pre sm:whitespace-normal">
                {item.purpose}
              </SlideUp>
            </p>
          </div>
        </section>
      ))}
      <Divider />
      {supporters.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-1 grid grid-cols-5 items-center min-h-32 p-4 sm:grid-cols-2"
        >
          <Image
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="col-span-2 w-full object-contain sm:col-span-1 sm:max-h-20"
          />
          <div className="col-span-3 grid gap-2 text-center sm:col-span-1">
            <h2 className="flex font-semibold items-center justify-center text-sm">
              <Link href={item.href} target="_blank" className="link">
                {item.name}
              </Link>
            </h2>
            <p className="flex items-center justify-center whitespace-pre sm:whitespace-normal">
              <BuildingOffice2Icon className="size-5 mr-1" />
              {item.business}
            </p>
            <p className="font-bold text-info">
              <SlideUp className="whitespace-pre sm:whitespace-normal">
                {item.purpose}
              </SlideUp>
            </p>
          </div>
        </section>
      ))}
      <Purpose />
    </article>
  )
}
