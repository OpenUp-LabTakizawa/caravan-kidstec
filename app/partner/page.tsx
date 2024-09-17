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
    },
    {
      submenu: KANTO,
      partners: KANTO_PARTNERS,
    },
    {
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
          className={`border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "bg-rose-200 border-white" : "bg-amber-50 border-sky-400"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className="link"
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンA</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-sky-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className="link"
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンB</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-sky-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-sky-300"}`}
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンC</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-teal-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-teal-300"}`}
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンD</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-violet-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-violet-300"}`}
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンE</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-orange-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-orange-300"}`}
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンF</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-lime-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-lime-300"}`}
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
      <h2 className="font-bold font-zenMaruGothic text-3xl">パターンG</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`bg-amber-50 border-8 border-double mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "border-rose-300" : "border-emerald-300"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className={`link ${index === 0 ? "text-rose-300" : "text-emerald-300"}`}
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
      {/* <h2 className="font-bold font-zenMaruGothic text-3xl">パターンD</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`border-8 border-dotted mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "bg-rose-200 border-white" : "bg-amber-50 border-sky-400"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className="link"
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
      ))} */}
      {/* <h2 className="font-bold font-zenMaruGothic text-3xl">パターンF</h2>
      {partnerAreas.map((area, index) => (
        <section
          key={area.submenu.name}
          className={`border-8 border-dashed mx-auto py-2 rounded-2xl shadow-lg space-y-4 w-72 lg:w-96 ${index === 0 ? "bg-rose-200 border-violet-400" : "bg-green-100 border-sky-400"}`}
        >
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            <Link
              href={PARTNER.pathname + area.submenu.pathname}
              className="link"
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
      ))} */}
    </>
  )
}
