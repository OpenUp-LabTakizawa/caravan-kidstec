"use client"

import type { Menu, NavigationPanel } from "@/app/interfaces/navigation"
import { CONTACT, FAQ, PARTNER, SUPPORTER } from "@/app/lib/constant"
import Link from "next/link"
import { type MutableRefObject, useEffect, useRef } from "react"
import type React from "react"

export function Navigation({
  menu,
}: Readonly<{ menu: Menu }>): React.JSX.Element {
  const panels: NavigationPanel[] = [
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
      name: menu.name + PARTNER.name,
      icon: PARTNER.icon,
      color: PARTNER.color,
      href: PARTNER.href + menu.href,
    },
  ] as const
  const ref: MutableRefObject<Map<string, HTMLAnchorElement>> = useRef<
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
      {panels.map((item) => (
        <Link
          key={item.name}
          ref={(node: HTMLAnchorElement) => {
            ref.current.set(item.name, node)
            return () => {
              ref.current.delete(item.name)
            }
          }}
          href={item.href}
          className="shadow-lg w-full"
        >
          <item.icon className={`h-28 mx-auto object-contain ${item.color}`} />
          <p className={`mx-auto w-fit ${item.color}`}>{item.name}</p>
        </Link>
      ))}
    </section>
  )
}
