import { Heading } from "@/app/components/layout/heading"
import { partners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Partner(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner" />
      <section className="grid gap-6 p-4 sm:grid-cols-2">
        <h2 className="font-bold text-2xl sm:col-span-2">広島エリア</h2>
        {partners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 grid gap-4 mx-auto p-4 w-fit"
          >
            <h3 className="font-bold text-xl">
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  className="link whitespace-pre md:whitespace-normal"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </h3>
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="w-full sm:max-h-60 sm:object-contain"
            />
          </section>
        ))}
      </section>
    </article>
  )
}
