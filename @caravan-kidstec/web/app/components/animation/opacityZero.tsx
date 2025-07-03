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
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null,
  )

  useEffect(() => {
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

    observer.observe(ref.current as HTMLDivElement)
    return () => observer.disconnect()
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
