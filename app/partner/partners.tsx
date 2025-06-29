import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import type { Partner } from "@/app/interfaces/partner"
import { cloudfrontLoader } from "@/app/lib/loader"

export function Partners({
  partners,
}: Readonly<{ partners: Partner[] }>): JSX.Element {
  return (
    <section className="max-w-96 mx-auto px-2 space-y-6 text-xs">
      {partners.map((partner) => (
        <section
          key={partner.name}
          className="bg-gray-100 p-2 rounded-2xl shadow-lg space-y-2"
        >
          <div className="bg-white col-span-2 flex items-center rounded-2xl sm:col-span-1">
            <Image
              loader={cloudfrontLoader}
              src={partner.src}
              width={256}
              height={256}
              alt={partner.name}
              className="h-40 mx-auto p-4 object-contain rounded-2xl w-full"
            />
          </div>
          <h2 className="font-bold text-sm">
            <Link
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {partner.name}
            </Link>
          </h2>
          <p className="whitespace-pre">{partner.introduction}</p>
        </section>
      ))}
    </section>
  )
}
