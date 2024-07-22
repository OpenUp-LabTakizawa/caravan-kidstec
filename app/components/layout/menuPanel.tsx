"use client"

import type { MenuPanel, Submenu } from "@/app/interfaces/menu"
import { CONTACT, FAQ, PARTNER, SUPPORTER } from "@/app/lib/constant"
import Link from "next/link"
import { type JSX, type RefObject, useEffect, useRef } from "react"

export function MenuPanels({
  submenu,
}: Readonly<{ submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = [
    {
      name: FAQ.name,
      icon: CONTACT.icon,
      color: CONTACT.color,
      href: CONTACT.href + FAQ.href,
    },
    {
      name: SUPPORTER.name,
      icon: SUPPORTER.icon,
      color: SUPPORTER.color,
      href: SUPPORTER.href,
    },
    {
      name: submenu.name + PARTNER.name,
      icon: PARTNER.icon,
      color: PARTNER.color,
      href: PARTNER.href + submenu.href,
    },
  ] as const
  const ref: RefObject<Map<string, HTMLAnchorElement>> = useRef<
    Map<string, HTMLAnchorElement>
  >(new Map<string, HTMLAnchorElement>())

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          const delay = index * 100
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("rotate-y")
            }, delay)
          } else {
            entry.target.classList.remove("rotate-y")
          }
        })
      })

      if (ref.current?.values()) {
        for (const node of ref.current.values()) {
          observer.observe(node)
        }
      }
    }
  })

  return (
    <section className="gap-4 flex justify-items-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          ref={(node: HTMLAnchorElement) => {
            ref.current?.set(panel.name, node)
            return () => {
              ref.current?.delete(panel.name)
            }
          }}
          href={panel.href}
          className="shadow-lg w-full"
        >
          <panel.icon
            className={`h-28 mx-auto object-contain ${panel.color}`}
          />
          <p className={`mx-auto w-fit ${panel.color}`}>{panel.name}</p>
        </Link>
      ))}
    </section>
  )
}
