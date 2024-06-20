"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"

export function SlideUp({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>): React.JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    if (window.IntersectionObserver) {
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
    }
  })

  return (
    <span
      ref={ref}
      className={`inline-block opacity-0${className ? ` ${className}` : ""}${isShown ? " slide-up" : ""}`}
    >
      {children}
    </span>
  )
}
