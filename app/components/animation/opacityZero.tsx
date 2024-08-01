"use client"

import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"

export function OpacityZero({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>): JSX.Element {
  const ref: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-0")
            }, 3000)
          } else {
            entry.target.classList.remove("opacity-0")
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
