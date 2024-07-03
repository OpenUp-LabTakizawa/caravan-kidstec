import { HiroshimaPartners, TokyoChibaPartners } from "@/app/lib/constant"
import { TOKYO_CHIBA } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partner({
  area,
}: Readonly<{ area: string }>): React.JSX.Element {
  const partners =
    area === TOKYO_CHIBA.name ? TokyoChibaPartners : HiroshimaPartners

  return (
    <section className="grid gap-6 text-xs max-w-96 mx-auto">
      {partners.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-2 grid items-center text-center p-4 rounded-box shadow-lg"
        >
          <Image
            loader={cloudfrontLoader}
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
              className={`grid items-center my-auto ${area === "TokyoChiba" ? "h-40" : "h-30"}`}
            >
              <p className="whitespace-pre">{item.introduction}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
