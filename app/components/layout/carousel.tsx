"use client"

import { carouselItems } from "@/app/lib/constant"
import Image from "next/image"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Carousel(): React.JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)
  let slide = 0

  useEffect(() => {
    if (isMouseEnter) {
      return
    }
    const carousel: HTMLDivElement = ref.current as HTMLDivElement
    const scrollWidth: number = carousel.scrollWidth
    const interval = window.setInterval(() => {
      if (scrollWidth <= slide) {
        slide = 0
      } else {
        slide += scrollWidth / carouselItems.length
      }
      carousel.scrollLeft = slide
    }, 3000)
    return () => window.clearInterval(interval)
  })

  return (
    <section
      ref={ref}
      className="carousel rounded-box"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      {carouselItems.map((item) => (
        <div
          id={item.name}
          key={item.name}
          className="carousel-item relative w-full"
        >
          <figure className="w-full">
            <Image
              src={item.src}
              height={1000}
              width={1000}
              alt={item.alt}
              className="h-full object-cover rounded-box shadow-lg w-full"
            />
            <figcaption className="text-center">
              ※自然体験は開催時期により異なります
            </figcaption>
          </figure>
        </div>
      ))}
    </section>
  )
}
