import { ChibaPartners, HiroshimaPartners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partner({ area }: { area: string }): React.JSX.Element {
  const partners = area === "Chiba" ? ChibaPartners : HiroshimaPartners

  return (
    <section className="grid gap-6 text-xs">
      {partners.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-2 grid items-center text-center p-4"
        >
          <Image
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="h-40 object-contain"
          />
          <div className="content-center gap-2 grid text-center">
            <div className="flex items-center">
              <h2 className="outline font-semibold text-left text-nowrap text-sm w-fit">
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
              <div className="divider divider-neutral m-0 w-full" />
            </div>
            <div
              className={`grid items-center my-auto ${area === "Chiba" ? "h-40" : "h-30"}`}
            >
              <p className="whitespace-pre">{item.introduction}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
