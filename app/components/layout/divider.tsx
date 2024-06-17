"use client"

import { HashtagIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function Divider(): React.JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setIsShown(true)
        } else {
          setIsShown(false)
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
  })

  return (
    <div ref={ref} className={`divider mx-auto ${isShown && "stretch"}`}>
      <HashtagIcon className="size-10" />
    </div>
  )
}
