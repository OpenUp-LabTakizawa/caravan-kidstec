"use client"

import type { MenuPanel, Submenu } from "@/app/interfaces/menu"
import type { Picture } from "@/app/interfaces/picture"
import { PARTNER, PRIVACY_POLICY, Q_AND_A, SUPPORTER } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { type JSX, type RefObject, useEffect, useRef } from "react"

export function EventPanels({
  menuHref,
  submenu,
}: Readonly<{ menuHref: string; submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = [
    {
      name: Q_AND_A.name,
      color: {
        bg: "bg-sky-400",
        border: "border-sky-400",
        shadow: "box-sky-shadow",
        text: "text-sky-400",
        textHover: "group-hover:text-sky-400",
      },
      href: menuHref + submenu.href + Q_AND_A.href,
      text: "よくある質問",
    },
    {
      name: PRIVACY_POLICY.name,
      color: {
        bg: "bg-orange-400",
        border: "border-orange-400",
        shadow: "box-orange-shadow",
        text: "text-orange-400",
        textHover: "group-hover:text-orange-400",
      },
      href: menuHref + submenu.href + PRIVACY_POLICY.href,
      text: "プライバシーポリシー",
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
    <section className="gap-4 grid grid-cols-2 justify-items-center mr-2 text-center">
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

export function HistoryPanels({
  menuHref,
  submenu,
}: Readonly<{ menuHref: string; submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = [
    {
      name: Q_AND_A.name,
      color: {
        bg: "bg-sky-400",
        border: "border-sky-400",
        shadow: "box-sky-shadow",
        text: "text-sky-400",
        textHover: "group-hover:text-sky-400",
      },
      href: menuHref + submenu.href + Q_AND_A.href,
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
    <section className="gap-4 flex justify-items-center mr-2 text-center">
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

export function HistoryPictures({
  pictures,
}: Readonly<{ pictures: Picture[] }>): JSX.Element {
  const ref: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          const delay = index * 200
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("zoom-in")
            }, delay)
          } else {
            entry.target.classList.remove("zoom-in")
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
    <div className="grid grid-cols-3">
      {pictures.map((picture) => (
        <Image
          key={picture.alt}
          ref={(node: HTMLImageElement) => {
            ref.current?.set(picture.alt, node)
            return () => {
              ref.current?.delete(picture.alt)
            }
          }}
          loader={cloudfrontLoader}
          src={picture.src}
          height={1000}
          width={1000}
          alt={picture.alt}
          className="w-full"
        />
      ))}
    </div>
  )
}
