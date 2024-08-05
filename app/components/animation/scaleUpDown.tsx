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
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("scale-up-down")
          }, index * 200)
        } else {
          entry.target.classList.remove("scale-up-down")
        }
      })
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
