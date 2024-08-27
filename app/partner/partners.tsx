import type { Partner } from "@/app/interfaces/partner"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function Partners({
  partners,
}: Readonly<{ partners: Partner[] }>): JSX.Element {
  return (
    <section className="grid gap-6 text-xs max-w-96 mx-auto">
      {partners.map((partner) => (
        <section
          key={partner.name}
          className="bg-base-200 gap-2 grid items-center p-2 rounded-2xl shadow-lg"
        >
          <Image
            loader={cloudfrontLoader}
            src={partner.src}
            width={256}
            height={256}
            alt={partner.name}
            className="bg-white h-40 mx-auto object-contain"
          />
          <div className="content-center gap-2 grid">
            <h2 className="font-bold text-sm">
              <Link
                href={partner.href}
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                {partner.name}
              </Link>
            </h2>
            <div
              className={`grid items-center my-auto ${partners[0].name === "BPL" ? "h-40" : "h-48"}`}
            >
              <p className="whitespace-pre">{partner.introduction}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
