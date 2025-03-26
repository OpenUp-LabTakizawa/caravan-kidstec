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
import { Link } from "next-view-transitions"
import type { JSX } from "react"

export default function SponserPage(): JSX.Element {
  const partnerAreas: PartnerArea[] = [
    {
      menu: SPECIAL,
      partners: SPECIAL_PARTNERS,
      color: {
        border: "border-rose-300",
        text: "text-rose-300",
      },
    },
    {
      menu: KANTO,
      partners: KANTO_PARTNERS,
      color: {
        border: "border-sky-300",
        text: "text-sky-300",
      },
    },
    {
      menu: HIROSHIMA,
      partners: HIROSHIMA_PARTNERS,
      color: {
        border: "border-sky-300",
        text: "text-sky-300",
      },
    },
  ]

  return (
    <>
      <Heading menus={[PARTNER]} />
      {partnerAreas.map((area) => (
        <section
          key={area.menu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-2 text-sm w-80 sm:w-96 sm:text-base ${area.color.border}`}
        >
          <h2 className="font-bold font-maru text-2xl sm:text-3xl">
            <Link
              href={PARTNER.pathname + area.menu.pathname}
              className={`block button-pop mx-auto underline w-fit ${area.color.text}`}
            >
              {area.menu.name}
            </Link>
          </h2>
          <ul className="font-bold p-2 space-y-2">
            {area.partners.map((partner) => (
              <li key={partner.name}>{partner.name}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
