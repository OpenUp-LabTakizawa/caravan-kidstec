import { Divider } from "@/app/components/layout/divider"
import { Heading } from "@/app/components/layout/heading"
import { Purpose } from "@/app/components/text/purpose"
import { ChibaPartners, HiroshimaPartners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Partner(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner" />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-3xl sm:col-span-2">広島エリア</h2>
        {HiroshimaPartners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 grid gap-6 mx-auto p-4 w-fit"
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
            <p className="flex font-semibold items-center justify-center text-lg whitespace-pre md:whitespace-normal">
              {item.introduction}
            </p>
          </section>
        ))}
      </section>
      <Divider />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-3xl sm:col-span-2">千葉エリア</h2>
        {ChibaPartners.map((item) => (
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
            <p className="flex font-semibold items-center justify-center text-lg whitespace-pre md:whitespace-normal">
              {item.introduction}
            </p>
          </section>
        ))}
      </section>
      <Purpose />
    </article>
  )
}
