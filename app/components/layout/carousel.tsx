"use client"

import {
  cardCarouselItems,
  carouselItems,
  reviewCarouselItems,
} from "@/app/lib/constant"
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
        <div key={item.alt} className="carousel-item relative w-full">
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

export function CardCarousel(): React.JSX.Element {
  return (
    <div className="carousel carousel-center max-w-screen space-x-4 p-4">
      {cardCarouselItems.map((item) => (
        <div key={item.alt} className="carousel-item rounded-box w-72">
          <div className="card shadow-lg w-96">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.alt}
              className="h-60 object-cover rounded-t-2xl"
            />
            <div className="card-body p-0 py-8 relative">
              <span
                className={`absolute font-bold left-0 px-2 py-1 text-white text-xs top-0 ${item.color}`}
              >
                {item.category}
              </span>
              <h3 className="card-title mx-auto text-lg whitespace-pre">
                {item.title}
              </h3>
              <p className="font-semibold text-sm">{item.date}</p>
              <div className="card-actions justify-center">
                {item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="badge badge-outline bg-base-200 text-xs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ReviewCarousel(): React.JSX.Element {
  return (
    <div className="carousel carousel-center max-w-screen space-x-4 p-4">
      {reviewCarouselItems.map((item) => (
        <div key={item.alt} className="carousel-item rounded-box w-72">
          <div className="card shadow-lg w-96">
            <Image
              src={item.src}
              width={1000}
              height={1000}
              alt={item.alt}
              className="h-60 object-cover rounded-t-2xl"
            />
            <div className="card-body p-2">
              <h3 className="card-title mx-auto text-lg">{item.title}</h3>
              <p className="text-sm whitespace-pre">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
