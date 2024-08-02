"use client"

import type { Submenu } from "@/app/interfaces/menu"
import { NAVIGATION, SITE_TITLE } from "@/app/lib/constant"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"

export function Header(): JSX.Element {
  const [scrollY, setScrollY] = useState<{
    scrollY: number
    isScrollDown: boolean
  }>({ scrollY: 0, isScrollDown: false })
  const headerHeight: number = 50

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrollY({
        scrollY: window.scrollY,
        isScrollDown: scrollY.scrollY < window.scrollY,
      })
    })
  }

  return (
    <header
      className={`bg-base-100 transition duration-400 ease navbar sticky top-0 z-20 ${
        headerHeight < scrollY.scrollY && scrollY.isScrollDown
          ? "-translate-y-20"
          : "translate-y-0"
      }`}
    >
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost tilt-shaking w-fit">
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={200}
            height={200}
            alt={SITE_TITLE}
            priority={true}
          />
        </Link>
      </div>
      <nav className="hidden navbar-end lg:flex">
        <Navigation isScrollDown={scrollY.isScrollDown} />
      </nav>
      <div className="navbar-end lg:hidden">
        <DropdownMenu isScrollDown={scrollY.isScrollDown} />
      </div>
    </header>
  )
}

function DropdownMenu({
  isScrollDown,
}: Readonly<{ isScrollDown: boolean }>): JSX.Element {
  const ref: RefObject<HTMLDetailsElement> = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (isScrollDown && ref.current) {
      ref.current.open = false
    }

    window.addEventListener("click", () => {
      if (ref.current) {
        ref.current.open = false
      }
    })
    return () => {
      window.removeEventListener("click", () => {
        if (ref.current) {
          ref.current.open = false
        }
      })
    }
  })

  return (
    <details ref={ref} className="dropdown dropdown-end">
      <summary role="button" className="btn btn-ghost lg:hidden">
        <Bars3BottomRightIcon className="size-7" />
      </summary>
      <nav>
        <ul className="bg-base-100 dropdown-content menu menu-sm rounded-2xl shadow z-10">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              {menu.submenus.length === 0 ? (
                <Link
                  href={menu.href}
                  className="font-bold text-nowrap text-orange-400"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <strong className="text-orange-400">{menu.name}</strong>
                  <Menu submenus={menu.submenus} href={menu.href} />
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

function Navigation({
  isScrollDown,
}: Readonly<{ isScrollDown: boolean }>): JSX.Element {
  const ref: RefObject<Map<string, HTMLDetailsElement>> = useRef<
    Map<string, HTMLDetailsElement>
  >(new Map<string, HTMLDetailsElement>())

  useEffect(() => {
    if (isScrollDown && ref.current?.values()) {
      for (const node of ref.current.values()) {
        node.open = false
      }
    }

    window.addEventListener("click", (event) => CloseSummary(event))
    return () =>
      window.removeEventListener("click", (event) => CloseSummary(event))
  })

  function CloseSummary(event: MouseEvent): void {
    if (ref.current?.values()) {
      for (const node of ref.current.values()) {
        const rect = node.getBoundingClientRect()
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          node.open = false
        }
      }
    }
  }

  return (
    <ul className="menu menu-horizontal p-0">
      {NAVIGATION.map((menu) => (
        <li key={menu.name}>
          {menu.submenus.length === 0 ? (
            <Link href={menu.href} className="font-bold text-orange-400">
              {menu.name}
            </Link>
          ) : (
            <details
              ref={(node: HTMLDetailsElement) => {
                ref.current?.set(menu.name, node)
                return () => {
                  ref.current?.delete(menu.name)
                }
              }}
            >
              <summary className="font-bold text-orange-400">
                {menu.name}
              </summary>
              <Menu submenus={menu.submenus} href={menu.href} />
            </details>
          )}
        </li>
      ))}
    </ul>
  )
}

function Menu({
  submenus,
  href,
}: { submenus: Submenu[]; href: string }): JSX.Element {
  return (
    <ul className="py-2">
      {submenus.map((submenu) => (
        <li key={submenu.name}>
          <Link href={href + submenu.href} className="text-nowrap">
            {submenu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
