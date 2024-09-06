"use client"

import type { Submenu } from "@/app/interfaces/menu"
import { NAVIGATION, SITE_TITLE } from "@/app/lib/constant"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"
import styles from "./header.module.css"

export function Header(): JSX.Element {
  const [scrollState, setScrollState] = useState<{
    scrollY: number
    isScrollDown: boolean
  }>({ scrollY: 0, isScrollDown: false })
  const headerHeight: number = 50
  const pathname: string = usePathname()

  // disable right click in order to prevent downloading images
  useEffect(() => {
    window.addEventListener("contextmenu", (event) => event.preventDefault())
    return () =>
      window.removeEventListener("contextmenu", (event) =>
        event.preventDefault(),
      )
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollState({
        scrollY: window.scrollY,
        isScrollDown: scrollState.scrollY < window.scrollY,
      })
    })
    return () =>
      window.removeEventListener("scroll", () => {
        setScrollState({
          scrollY: window.scrollY,
          isScrollDown: scrollState.scrollY < window.scrollY,
        })
      })
  })

  return (
    <header
      className={`bg-white navbar${pathname !== "/" && headerHeight < scrollState.scrollY && scrollState.isScrollDown ? " transition sticky top-0 z-20 -translate-y-20" : ""}${pathname !== "/" && (scrollState.scrollY < headerHeight || !scrollState.isScrollDown) ? " transition sticky top-0 z-20" : ""}`}
    >
      <div className="navbar-start grow">
        <Link href="/" className={`px-4 ${styles.tiltShaking}`}>
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={192}
            height={23}
            alt={SITE_TITLE}
            priority={true}
          />
        </Link>
      </div>
      <nav className="navbar-end w-max z-30">
        <DropdownMenu
          className="lg:hidden"
          isScrollDown={scrollState.isScrollDown}
        />
        <Navigation
          className="hidden lg:flex"
          isScrollDown={scrollState.isScrollDown}
        />
      </nav>
    </header>
  )
}

function DropdownMenu({
  className = "",
  isScrollDown,
}: Readonly<{ className?: string; isScrollDown: boolean }>): JSX.Element {
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
    <details
      ref={ref}
      className={`dropdown dropdown-end${className === "" ? "" : ` ${className}`}`}
    >
      <summary role="button" className="btn btn-ghost lg:hidden">
        <Bars3BottomRightIcon className="size-7" />
      </summary>
      <nav>
        <ul className="bg-white dropdown-content menu menu-sm rounded-2xl shadow">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              {menu.submenus.length === 0 ? (
                <Link
                  href={menu.pathname}
                  className="font-bold text-orange-400"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <b className="text-orange-400">{menu.name}</b>
                  <Menu pathname={menu.pathname} submenus={menu.submenus} />
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
  className = "",
  isScrollDown,
}: Readonly<{ className?: string; isScrollDown: boolean }>): JSX.Element {
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
    <ul
      className={`flex-nowrap menu menu-horizontal p-0${className === "" ? "" : ` ${className}`}`}
    >
      {NAVIGATION.map((menu) => (
        <li key={menu.name}>
          {menu.submenus.length === 0 ? (
            <Link href={menu.pathname} className="font-bold text-orange-400">
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
              <Menu pathname={menu.pathname} submenus={menu.submenus} />
            </details>
          )}
        </li>
      ))}
    </ul>
  )
}

function Menu({
  pathname,
  submenus,
}: { pathname: string; submenus: Submenu[] }): JSX.Element {
  return (
    <ul>
      {submenus.map((submenu) => (
        <li key={submenu.name}>
          <Link href={pathname + submenu.pathname} className="text-nowrap">
            {submenu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
