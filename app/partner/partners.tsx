import type { Partner } from "@/app/interfaces/partner"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Partners({
  partners,
}: Readonly<{ partners: Partner[] }>): React.JSX.Element {
  return (
    <section className="grid gap-6 text-xs max-w-96 mx-auto">
      {partners.map((item) => (
        <section
          key={item.name}
          className="bg-base-200 gap-2 grid items-center p-4 rounded-box shadow-lg"
        >
          <Image
            loader={cloudfrontLoader}
            src={item.src}
            width={1000}
            height={1000}
            alt={item.name}
            className="h-40 object-contain"
          />
          <div className="content-center gap-2 grid">
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
              className={`grid items-center my-auto ${partners[0].name === "BPL Inc." ? "h-30" : "h-40"}`}
            >
              <p className="whitespace-pre">{item.introduction}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
