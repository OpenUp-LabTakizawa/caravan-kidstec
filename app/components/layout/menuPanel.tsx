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
        text: CONTACT.color,
      },
      href: CONTACT.href + FAQ.href,
      text: "よくある質問",
    },
    {
      name: SUPPORTER.name,
      color: {
        bg: "bg-teal-400",
        border: "border-teal-400",
        text: SUPPORTER.color,
      },
      href: SUPPORTER.href,
      text: "企画・運営・補助",
    },
    {
      name: submenu.name + PARTNER.name,
      color: {
        bg: "bg-rose-400",
        border: "border-rose-400",
        text: PARTNER.color,
      },
      href: PARTNER.href + submenu.href,
      text: "地域イベンター",
    },
  ] as const
  // const ref: RefObject<Map<string, HTMLAnchorElement>> = useRef<
  //   Map<string, HTMLAnchorElement>
  // >(new Map<string, HTMLAnchorElement>())

  // useEffect(() => {
  //   if (window.IntersectionObserver) {
  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry, index) => {
  //         const delay = index * 100
  //         if (entry.isIntersecting) {
  //           setTimeout(() => {
  //             entry.target.classList.add("rotate-y")
  //           }, delay)
  //         } else {
  //           entry.target.classList.remove("rotate-y")
  //         }
  //       })
  //     })

  //     if (ref.current?.values()) {
  //       for (const node of ref.current.values()) {
  //         observer.observe(node)
  //       }
  //     }
  //   }
  // })

  return (
    <section className="gap-4 flex justify-items-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          // ref={(node: HTMLAnchorElement) => {
          //   ref.current?.set(panel.name, node)
          //   return () => {
          //     ref.current?.delete(panel.name)
          //   }
          // }}
          href={panel.href}
          className={`border-2 rounded-lg shadow-lg w-full ${panel.color.border}`}
        >
          <p className={`font-bold mx-auto w-fit ${panel.color.text}`}>
            {panel.name}
          </p>
          <div className="flex">
            <span className="grow">{panel.text}</span>
            <ArrowRightIcon
              className={`arrow-back-right ml-auto rounded-full size-4 text-white ${panel.color.bg}`}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}
