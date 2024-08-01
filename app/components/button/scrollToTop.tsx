"use client"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"
import { type RefObject, useEffect, useRef, useState } from "react"
import type { JSX } from "react"

export function ScrollToTop(): JSX.Element {
  const ref: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null)
  const scrollBtn: HTMLButtonElement = ref.current as HTMLButtonElement
  const [scrollY, setScrollY] = useState<number>(0)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const scrollPoint: number = 200

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY))
    if (
      scrollPoint < scrollY &&
      !scrollBtn.classList.contains("scroll-to-top")
    ) {
      scrollBtn.classList.remove("hidden")
      scrollBtn.classList.remove("fade-out-down")
      scrollBtn.classList.add("fade-in-up")
      setIsScrollDown(true)
    }
    if (scrollY < scrollPoint && isScrollDown) {
      scrollBtn.classList.remove("fade-in-up")
      scrollBtn.classList.remove("scroll-to-top")
      scrollBtn.classList.add("fade-out-down")
    }
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY))
    }
  })

  function scrollToTop(): void {
    scrollBtn.classList.remove("fade-in-up")
    scrollBtn.classList.add("fade-out-down")
    scrollBtn.classList.add("scroll-to-top")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      ref={ref}
      className="bg-sky-400 btn btn-square hidden fixed gap-0 bottom-5 right-5 hover:scale-110"
      onClick={scrollToTop}
    >
      <ChevronDoubleUpIcon className="arrow-up size-8" />
      TOP
    </button>
  )
}
