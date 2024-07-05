"use client"

import { HashtagIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef } from "react"
import type React from "react"

export function Divider(): React.JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

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

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current as HTMLDivElement)
        }
      }
    }
  })

  return (
    <div ref={ref} className="divider mx-auto">
      <HashtagIcon className="size-10" />
    </div>
  )
}
