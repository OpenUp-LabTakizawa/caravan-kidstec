import { Heading } from "@/app/components/layout/heading"
import { partners } from "@/app/lib/constant"
import { BuildingOffice2Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { SlideUp } from "../components/animation/slideUp"
import { Divider } from "../components/layout/divider"

export default function Partner(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner" />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-2xl sm:col-span-2">
          広島エリア Aパターン
        </h2>
        {partners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 grid gap-4 mx-auto p-4 w-fit"
          >
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.src}
                  width={1000}
                  height={1000}
                  alt={item.name}
                  className="h-60 object-contain"
                />
              </Link>
            ) : (
              <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={item.name}
                className="h-60 object-contain"
              />
            )}
            <h2 className="flex font-semibold items-center justify-center text-lg whitespace-pre md:whitespace-normal">
              <BuildingOffice2Icon className="size-5 mr-1" />
              {item.business}
            </h2>
            <p className="font-bold leading-8 text-xl text-info">
              <SlideUp className="whitespace-pre">{item.purpose}</SlideUp>
            </p>
          </section>
        ))}
      </section>
      <Divider />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-2xl sm:col-span-2">
          広島エリア Bパターン
        </h2>
        {partners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 grid gap-4 mx-auto p-4 w-full"
          >
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.src}
                  width={1000}
                  height={1000}
                  alt={item.name}
                  className="mx-auto object-contain w-60"
                />
              </Link>
            ) : (
              <Image
                src={item.src}
                width={1000}
                height={1000}
                alt={item.name}
                className="mx-auto object-contain w-60"
              />
            )}
            <h2 className="flex font-semibold items-center justify-center text-lg whitespace-pre md:whitespace-normal">
              <BuildingOffice2Icon className="size-5 mr-1" />
              {item.business}
            </h2>
            <p className="font-bold leading-8 text-xl text-info">
              <SlideUp className="whitespace-pre">{item.purpose}</SlideUp>
            </p>
          </section>
        ))}
      </section>
    </article>
  )
}
