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
  const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null,
  )

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

    observer.observe(ref.current as HTMLDivElement)
    return () => observer.disconnect()
  })

  return (
    <div
      ref={ref}
      className={`opacity-0${className === "" ? "" : ` ${className}`}`}
    >
      {children}
    </div>
  )
}
