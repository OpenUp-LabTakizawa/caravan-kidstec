"use client"

import type { MenuPanel, Submenu } from "@/app/interfaces/menu"
import { CONTACT, FAQ, PARTNER, SUPPORTER } from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function MenuPanels({
  submenu,
}: Readonly<{ submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = [
    {
      name: FAQ.name,
      color: {
        bg: "bg-sky-400",
        border: "border-sky-400",
        shadow: "box-sky-shadow",
        text: CONTACT.color,
        textHover: "group-hover:text-sky-400",
      },
      href: CONTACT.href + FAQ.href,
      text: "よくある質問",
    },
    {
      name: SUPPORTER.name,
      color: {
        bg: "bg-teal-400",
        border: "border-teal-400",
        shadow: "box-teal-shadow",
        text: SUPPORTER.color,
        textHover: "group-hover:text-teal-400",
      },
      href: SUPPORTER.href,
      text: "企画・運営・補助",
    },
    {
      name: submenu.name + PARTNER.name,
      color: {
        bg: "bg-rose-400",
        border: "border-rose-400",
        shadow: "box-rose-shadow",
        text: PARTNER.color,
        textHover: "group-hover:text-rose-400",
      },
      href: PARTNER.href + submenu.href,
      text: "地域イベンター",
    },
  ] as const
  return (
    <section className="gap-4 flex justify-items-center mr-2">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`border-2 group rounded-lg shadow-lg w-full hover:text-white ${panel.color.border} ${panel.color.shadow}`}
        >
          <p
            className={`font-bold mx-auto w-fit group-hover:text-white ${panel.color.text}`}
          >
            {panel.name}
          </p>
          <div className="flex">
            <span className="grow">{panel.text}</span>
            <ArrowRightIcon
              className={`arrow-back-right ml-auto rounded-full size-4 text-white group-hover:bg-white ${panel.color.bg} ${panel.color.textHover}`}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}
