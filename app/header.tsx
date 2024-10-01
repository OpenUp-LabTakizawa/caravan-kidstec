"use client"

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"
import { NAVIGATION, SITE_TITLE } from "./lib/constant.ts"

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
      className={`bg-white flex items-center p-2 w-full${pathname !== "/" && headerHeight < scrollState.scrollY && scrollState.isScrollDown ? " transition sticky top-0 z-20 -translate-y-20" : ""}${pathname !== "/" && (scrollState.scrollY < headerHeight || !scrollState.isScrollDown) ? " transition sticky top-0 z-20" : ""}`}
    >
      <div className="grow">
        <Link href="/" className="block button-pop mx-4 tilt-shaking w-fit">
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={192}
            height={23}
            alt={SITE_TITLE}
            priority={true}
          />
        </Link>
      </div>
      <nav className="w-fit z-30">
        <DropdownMenu isScrollDown={scrollState.isScrollDown} />
        <Navigation isScrollDown={scrollState.isScrollDown} />
      </nav>
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
    <details ref={ref} className="relative lg:hidden">
      <summary className="block button-pop duration-200 ease-out h-fit min-h-0 p-1">
        <Bars3BottomRightIcon className="size-7" />
      </summary>
      <nav>
        <ul className="absolute bg-white end-0 flex flex-col gap-1 p-3 rounded-2xl shadow text-sm">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="block button-pop duration-200 ease-out font-bold px-3 py-1 rounded-xl text-nowrap text-orange-400 focus:bg-gray-400 hover:bg-gray-200"
              >
                {menu.name}
              </Link>
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
    <ul className="flex flex-nowrap gap-1 hidden p-0 lg:flex">
      {NAVIGATION.map((menu) => (
        <li key={menu.name}>
          <Link
            href={menu.pathname}
            className="block button-pop duration-200 ease-out font-bold px-3 py-1 rounded-xl text-orange-400 hover:bg-gray-200"
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
