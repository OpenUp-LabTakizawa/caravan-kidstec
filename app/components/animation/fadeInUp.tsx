"use client"

import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"

export function FadeInUp({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>): JSX.Element {
  const ref: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in-up")
          }, 500)
        } else {
          entry.target.classList.remove("fade-in-up")
        }
      }
    })

    observer.observe(ref.current as HTMLSpanElement)
    return () => observer.disconnect()
  })

  return (
    <span ref={ref} className={`inline-block opacity-0 ${className}`}>
      {children}
    </span>
  )
}
