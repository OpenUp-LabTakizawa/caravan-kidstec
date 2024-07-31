"use client"

import { HashtagIcon } from "@heroicons/react/24/solid"
import { type JSX, type RefObject, useEffect, useRef } from "react"

export function Divider(): JSX.Element {
  return (
    <div className="divider">
      <HashtagIcon className="size-10" />
    </div>
  )
}

export function StretchDivider(): JSX.Element {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("stretch")
          } else {
            entry.target.classList.remove("stretch")
          }
        }
      })

      observer.observe(ref.current as HTMLDivElement)
      return () => observer.disconnect()
    }
  })

  return (
    <div ref={ref} className="divider mx-auto">
      <HashtagIcon className="size-10" />
    </div>
  )
}
