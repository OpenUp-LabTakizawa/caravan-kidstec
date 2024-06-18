import { ChibaPartners, HiroshimaPartners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partner({ area }: { area: string }): React.JSX.Element {
  const partners = area === "Chiba" ? ChibaPartners : HiroshimaPartners

  return (
    <>
      <section className="grid gap-6 p-4 text-sm sm:grid-cols-2">
        {partners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 gap-1 grid grid-cols-5 items-center mx-auto p-4 w-fit"
          >
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="col-span-2 h-40 object-contain"
            />
            <div className="col-span-3 grid gap-4 text-center">
              <h2>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    className="link"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  item.name
                )}
              </h2>
              <p className="whitespace-pre">{item.introduction}</p>
            </div>
          </section>
        ))}
      </section>
      <section className="grid gap-6 p-4 text-xs sm:grid-cols-2">
        {partners.map((item) => (
          <section
            key={item.name}
            className="bg-base-200 gap-1 grid grid-cols-5 items-center mx-auto p-4 w-fit"
          >
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.name}
              className="col-span-2 h-40 object-contain"
            />
            <div className="col-span-3 grid gap-4 text-center">
              <h2>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    className="link"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  item.name
                )}
              </h2>
              <p className="whitespace-pre">{item.introduction}</p>
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
