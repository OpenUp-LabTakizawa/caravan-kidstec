import { Heading } from "@/app/components/layout/heading"
import type { PartnerArea } from "@/app/interfaces/partner"
import {
  HIROSHIMA,
  HIROSHIMA_PARTNERS,
  KANTO,
  KANTO_PARTNERS,
  PARTNER,
  SPECIAL,
  SPECIAL_PARTNERS,
} from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export default function SponserPage(): JSX.Element {
  const partnerAreas: PartnerArea[] = [
    {
      submenu: SPECIAL,
      partners: SPECIAL_PARTNERS,
      color: {
        border: "border-rose-300",
        text: "text-rose-300",
      },
    },
    {
      submenu: KANTO,
      partners: KANTO_PARTNERS,
      color: {
        border: "border-sky-300",
        text: "text-sky-300",
      },
    },
    {
      submenu: HIROSHIMA,
      partners: HIROSHIMA_PARTNERS,
      color: {
        border: "border-sky-300",
        text: "text-sky-300",
      },
    },
  ]

  return (
    <>
      <Heading menu={PARTNER} />
      {partnerAreas.map((area) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${area.color.border}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${area.color.text}`}
            >
              {area.submenu.name}
            </Link>
          </h2>
          <ul className="p-2 space-y-2">
            {area.partners.map((partner) => (
              <li key={partner.name} className="font-bold">
                {partner.name}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}