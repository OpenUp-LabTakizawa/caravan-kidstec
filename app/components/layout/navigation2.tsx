"use client"

import type { NavigationPanel } from "@/app/interfaces/navigation"
import {
  AREA,
  CONTACT,
  FAQ,
  HIROSHIMA,
  PARTNER,
  SUPPORTER,
  TOKYO_CHIBA,
} from "@/app/lib/constant"
import {
  GlobeAsiaAustraliaIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { type MutableRefObject, useLayoutEffect, useRef } from "react"

export function Navigation2() {
  const ref: MutableRefObject<Map<string, HTMLAnchorElement>> = useRef<
    Map<string, HTMLAnchorElement>
  >(new Map<string, HTMLAnchorElement>())
  const panelNavigation: NavigationPanel[] = [
    {
      name: TOKYO_CHIBA.name,
      icon: StarIcon,
      color: AREA.color,
      href: AREA.href + TOKYO_CHIBA.href,
    },
    {
      name: HIROSHIMA.name,
      icon: RocketLaunchIcon,
      color: PARTNER.color,
      href: AREA.href + HIROSHIMA.href,
    },
    {
      name: SUPPORTER.name,
      icon: GlobeAsiaAustraliaIcon,
      color: SUPPORTER.color,
      href: SUPPORTER.href,
    },
    {
      name: FAQ.name,
      icon: QuestionMarkCircleIcon,
      color: CONTACT.color,
      href: CONTACT.href + FAQ.href,
    },
  ] as const

  useLayoutEffect(() => {
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

      return () => {
        if (ref.current?.values()) {
          for (const node of ref.current.values()) {
            observer.unobserve(node)
          }
        }
      }
    }
  })

  return (
    <section className="gap-4 grid grid-cols-2 justify-items-center md:grid-cols-4">
      {panelNavigation.map((item) => (
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
          {typeof item.icon === "string" ? (
            <Image
              src={item.icon}
              width={1000}
              height={1000}
              alt={item.name}
              className="h-28 mx-auto object-contain w-fit"
            />
          ) : (
            <item.icon
              className={`h-28 mx-auto object-contain ${item.color}`}
            />
          )}
          <p className={`mx-auto w-fit ${item.color}`}>{item.name}</p>
        </Link>
      ))}
    </section>
  )
}
