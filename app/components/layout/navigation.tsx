"use client"

import { squareNavigation } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import { type MutableRefObject, useLayoutEffect, useRef } from "react"

export function Navigation() {
  const ref: MutableRefObject<Map<string, HTMLAnchorElement>> = useRef<
    Map<string, HTMLAnchorElement>
  >(new Map<string, HTMLAnchorElement>())

  useLayoutEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          const delay = index * 100
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("rotate-y")
            }, delay)
          } else {
            entry.target.classList.remove("rotate-y")
          }
        })
      })

      if (ref.current?.values()) {
        for (const node of ref.current.values()) {
          observer.observe(node)
        }
      }

      return () => {
        if (ref.current?.values()) {
          for (const node of ref.current.values()) {
            observer.unobserve(node)
          }
        }
      }
    }
  })

  return (
    <section className="gap-4 grid grid-cols-2 justify-items-center md:grid-cols-4">
      {squareNavigation.map((item) => (
        <Link
          key={item.name}
          ref={(node: HTMLAnchorElement) => {
            ref.current.set(item.name, node)
            return () => {
              ref.current.delete(item.name)
            }
          }}
          href={item.href}
          className="size-36 shadow-lg"
        >
          {typeof item.icon === "string" ? (
            <Image
              src={item.icon}
              width={1000}
              height={1000}
              alt={item.name}
              className="h-28 mx-auto object-contain w-fit"
            />
          ) : (
            <item.icon
              className={`h-28 mx-auto object-contain ${item.color}`}
            />
          )}
          <p className={`mx-auto w-fit ${item.color}`}>{item.name}</p>
        </Link>
      ))}
    </section>
  )
}
