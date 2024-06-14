"use client"

import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import type React from "react"

export function ScrollToTop(): React.JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)
  const scrollPoint: number = 200

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrollY(window.scrollY))
  }

  useEffect(() => {
    const scrollBtn: HTMLButtonElement = document.getElementById(
      "scroll-to-top",
    ) as HTMLButtonElement

    if (scrollPoint < scrollY) {
      setIsScrollDown(true)
    }
    if (scrollY < scrollPoint && isScrollDown) {
      scrollBtn.classList.remove("hidden")
      scrollBtn.classList.add("fade-out-down")
    }
  })

  return (
    <button
      type="button"
      id="scroll-to-top"
      className={`btn btn-square btn-primary fixed right-5 bottom-5 gap-0 hover:scale-110 ${
        scrollY < scrollPoint ? "hidden" : "fade-in-up"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronDoubleUpIcon className="size-8 scroll-up" />
      TOP
    </button>
  )
}
