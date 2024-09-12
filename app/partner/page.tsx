import { Heading } from "@/app/components/layout/heading"
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
import type { PartnerArea } from "../interfaces/partner"

export default function SponserPage(): JSX.Element {
  const partnerAreas: PartnerArea[] = [
    {
      color: "bg-amber-50",
      submenu: SPECIAL,
      partners: SPECIAL_PARTNERS,
    },
    {
      color: "bg-sky-200",
      submenu: KANTO,
      partners: KANTO_PARTNERS,
    },
    {
      color: "bg-pink-300",
      submenu: HIROSHIMA,
      partners: HIROSHIMA_PARTNERS,
    },
  ]

  return (
    <>
      <Heading menu={PARTNER} />
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`mx-auto p-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "bg-amber-50" : "bg-rose-200"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className="link"
            >
              {area.submenu.name}
            </Link>
          </h2>
          <ul className="bg-white p-2 rounded-2xl space-y-2 text-left">
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
