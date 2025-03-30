"use client"

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import { Link } from "next-view-transitions"
import Image from "next/image"
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
      className={`bg-white flex items-center justify-between p-2${pathname !== "/" && headerHeight < scrollState.scrollY && scrollState.isScrollDown ? " transition sticky top-0 z-20 -translate-y-20" : ""}${pathname !== "/" && (scrollState.scrollY < headerHeight || !scrollState.isScrollDown) ? " transition sticky top-0 z-20" : ""}`}
    >
      <Link href="/" className="block button-pop mx-4 tilt-shaking w-fit">
        <Image
          src="/caravan-kidstec_logo_line.avif"
          width={192}
          height={23}
          alt={SITE_TITLE}
          priority={true}
        />
      </Link>
      <nav className="font-bold w-fit z-30">
        <DropdownMenu isScrollDown={scrollState.isScrollDown} />
        <Navigation isScrollDown={scrollState.isScrollDown} />
      </nav>
    </header>
  )
}

function DropdownMenu({
  isScrollDown,
}: Readonly<{ isScrollDown: boolean }>): JSX.Element {
  const ref: RefObject<HTMLDetailsElement | null> =
    useRef<HTMLDetailsElement | null>(null)

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
    <div className="flex gap-1 items-center lg:hidden">
      <Link
        href="https://www.instagram.com/ktc_caravan/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mx-auto w-fit"
      >
        <Image
          src="/Instagram_Glyph_Gradient.avif"
          width={24}
          height={24}
          alt="こどもテックキャラバン-公式インスタグラム"
        />
      </Link>
      <details ref={ref}>
        <summary className="block button-pop cursor-pointer p-1">
          <Bars3BottomRightIcon className="size-7" />
        </summary>
        <ul className="absolute bg-white end-0 flex flex-col gap-1 p-3 rounded-2xl shadow-sm text-base sm:text-lg">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="block button-pop px-3 py-1 rounded-xl text-nowrap text-orange-400 whitespace-nowrap focus:bg-gray-400 hover:bg-gray-200"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
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
    <ul className="flex-nowrap gap-1 hidden lg:flex">
      {NAVIGATION.map((menu) => (
        <li key={menu.name}>
          <Link
            href={menu.pathname}
            className="block button-pop px-3 py-1 rounded-xl text-orange-400 hover:bg-gray-200"
          >
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
