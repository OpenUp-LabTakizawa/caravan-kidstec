"use client"

import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"

export function Bounce({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>): JSX.Element {
  const ref: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bounce")
            setTimeout(() => {
              entry.target.classList.remove("animate-bounce")
            }, 2500)
          }
        }
      })

      observer.observe(ref.current as HTMLSpanElement)
      return () => observer.disconnect()
    }
  })

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}
