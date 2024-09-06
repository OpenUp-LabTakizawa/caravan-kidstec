"use client"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"
import { type RefObject, useEffect, useRef, useState } from "react"
import type { JSX } from "react"

export function ScrollToTop(): JSX.Element {
  const ref: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
  const [scrollY, setScrollY] = useState<number>(0)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const scrollPoint: number = 200

  useEffect(() => {
    if (scrollPoint < scrollY) {
      setIsScrollDown(true)
    }

    window.addEventListener("scroll", () => setScrollY(window.scrollY))
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY))
    }
  })

  function scrollToTop(): void {
    const scrollBtn: HTMLButtonElement = ref.current as HTMLButtonElement
    // restart animation unless remove the animation class
    scrollBtn.classList.remove("fade-in-up")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      ref={ref}
      onClick={scrollToTop}
      className={`bg-sky-400 border-sky-400 bottom-2 btn btn-square fixed gap-0 right-2 z-10 hover:bg-sky-500 sm:bottom-4 sm:right-4${scrollY < scrollPoint && !isScrollDown ? " hidden" : ""} ${scrollY < scrollPoint ? "fade-out-down" : "fade-in-up"}`}
    >
      <ChevronDoubleUpIcon className="arrow-up size-8" />
      TOP
    </button>
  )
}
