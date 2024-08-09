"use client"

import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"

export function ScaleUpDown({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>): JSX.Element {
  const ref: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("scale-up-down")
          }, 500)
        } else {
          entry.target.classList.remove("scale-up-down")
        }
      }
    })

    observer.observe(ref.current as HTMLSpanElement)
    return () => observer.disconnect()
  })

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}
