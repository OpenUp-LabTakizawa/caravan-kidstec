"use client"

import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"

export function SlideUp({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>): JSX.Element {
  const ref: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up")
          } else {
            entry.target.classList.remove("slide-up")
          }
        }
      })

      observer.observe(ref.current as HTMLSpanElement)
    }
  })

  return (
    <span
      ref={ref}
      className={`inline-block opacity-0${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  )
}
