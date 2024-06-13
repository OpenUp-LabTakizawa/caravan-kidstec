"use client"

import { carouselItems } from "@/app/lib/constant"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useEffect } from "react"

export function Carousel(): React.JSX.Element {
  let slide = 0

  useEffect(() => {
    const carousel: HTMLDivElement = document.querySelector(
      ".carousel",
    ) as HTMLDivElement
    const scrollWidth: number = carousel.scrollWidth as number
    const interval = window.setInterval(() => {
      if (scrollWidth <= slide) {
        slide = 0
      } else {
        slide += scrollWidth / carouselItems.length
      }
      carousel.scrollLeft = slide
    }, 6000)
    return () => window.clearInterval(interval)
  })

  return (
    <section className="carousel rounded-box">
      {carouselItems.map((item, index) => (
        <div
          id={item.name}
          key={item.name}
          className="carousel-item relative w-full"
        >
          <Image
            src={item.src}
            height={1000}
            width={1000}
            alt={item.alt}
            className="w-full"
          />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2 bg-transparent">
            <Link
              href={`#${0 === index ? carouselItems[carouselItems.length - 1].name : carouselItems[index - 1].name}`}
              className="btn btn-circle btn-sm"
            >
              <ChevronLeftIcon className="size-5" />
            </Link>
            <div className="bg-black bg-opacity-30 text-center text-white whitespace-pre-wrap lg:whitespace-normal">
              <div className="max-w-fit mb-5 mx-auto">
                <h1 className="font-black text-2xl typing md:text-4xl">
                  {item.title}
                </h1>
              </div>
              <p className="md:text-2xl">{item.content.first}</p>
              <p className="md:text-2xl">{item.content.second}</p>
            </div>
            <Link
              href={`#${index + 1 === carouselItems.length ? carouselItems[0].name : carouselItems[index + 1].name}`}
              className="btn btn-circle btn-sm"
            >
              <ChevronRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
