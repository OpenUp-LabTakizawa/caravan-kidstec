"use client"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function ScrollToTop(): React.JSX.Element {
  const ref: React.RefObject<HTMLButtonElement> =
    useRef<HTMLButtonElement>(null)
  const scrollBtn: HTMLButtonElement = ref.current as HTMLButtonElement
  const [scrollY, setScrollY] = useState<number>(0)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const scrollPoint: number = 200

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrollY(window.scrollY))
  }

  useEffect(() => {
    if (scrollPoint < scrollY) {
      setIsScrollDown(true)
    }
    if (scrollY < scrollPoint && isScrollDown) {
      scrollBtn.classList.remove("fade-in-up")
      scrollBtn.classList.remove("hidden")
      scrollBtn.classList.add("fade-out-down")
    }
  })

  function scrollToTop() {
    scrollBtn.classList.remove("fade-in-up")
    scrollBtn.classList.add("fade-out-down")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      ref={ref}
      className={`bg-sky-400 btn btn-square fixed right-5 bottom-5 gap-0 hover:scale-110 ${
        scrollY < scrollPoint ? "hidden" : "fade-in-up"
      }`}
      onClick={() => scrollToTop()}
    >
      <ChevronDoubleUpIcon className="arrow-up size-8" />
      TOP
    </button>
  )
}
