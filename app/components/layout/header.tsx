"use client"

import { SITE_TITLE, navigation } from "@/app/lib/constant"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useRef, useState } from "react"

export function Header(): React.JSX.Element {
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
      className={`bg-base-100 transition duration-400 ease navbar sticky top-0 z-10 ${
        headerHeight < scrollY.scrollY && scrollY.isScrollDown
          ? "-translate-y-20"
          : "translate-y-0"
      }`}
    >
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost w-fit tilt-shaking">
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={200}
            height={200}
            alt={SITE_TITLE}
            priority={true}
          />
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <Navigation />
      </nav>
      <div className="navbar-end lg:hidden">
        <DropdownMenu />
      </div>
    </header>
  )
}

function DropdownMenu(): React.JSX.Element {
  const ref: React.RefObject<HTMLDetailsElement> =
    useRef<HTMLDetailsElement>(null)

  if (typeof window !== "undefined") {
    window.addEventListener("click", () => {
      if (ref.current) {
        ref.current.open = false
      }
    })
  }

  return (
    <details ref={ref} className="dropdown dropdown-end">
      <summary role="button" className="btn btn-ghost lg:hidden">
        <Bars3BottomRightIcon className="size-7" />
      </summary>
      <nav>
        <ul className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.content ? (
                <>
                  <div className="font-bold">
                    <item.icon className={`size-5 ${item.color}`} />
                    {item.name}
                  </div>
                  <SubContent content={item.content} href={item.href} />
                </>
              ) : (
                <Link href={item.href} className="font-bold">
                  <item.icon className={`size-5 ${item.color}`} />
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

function Navigation(): React.JSX.Element {
  return (
    <ul className="menu menu-horizontal p-0">
      {navigation.map((item) => (
        <li key={item.name} className="hover:scale-110">
          {item.content ? (
            <details>
              <summary className="font-bold">
                <item.icon className={`size-5 ${item.color}`} />
                {item.name}
              </summary>
              <SubContent content={item.content} href={item.href} />
            </details>
          ) : (
            <Link href={item.href} className="font-bold">
              <item.icon className={`size-5 ${item.color}`} />
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

function SubContent({
  content,
  href,
}: {
  content: { name: string; href: string }[]
  href: string
}): React.JSX.Element {
  return (
    <ul className="p-2">
      {content.map((item) => (
        <li key={item.name}>
          <Link href={href + item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
