import { ChibaPartners, HiroshimaPartners } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partner({
  area,
}: Readonly<{ area: string }>): React.JSX.Element {
  const partners = area === "Chiba" ? ChibaPartners : HiroshimaPartners

  return (
    <section className="grid gap-6 text-xs max-w-96 mx-auto">
      {partners.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-2 grid items-center text-center p-4 rounded shadow-lg"
        >
          <Image
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="h-40 object-contain"
          />
          <div className="content-center gap-2 grid text-center">
            <h2 className="font-semibold text-sm">
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
