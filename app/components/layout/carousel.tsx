"use client"

import type { Picture } from "@/app/interfaces/picture"
import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Carousel(): React.JSX.Element {
  const pictures: Picture[] = [
    {
      alt: "プログラミング体験",
      src: "/202307/sandankyo/basic_programming.avif",
    },
    {
      alt: "サップ体験",
      src: "/202307/eda_island/sea_circle.avif",
    },
    {
      alt: "オリーブ体験",
      src: "/202311/eda_island/olive_smile.avif",
    },
    {
      alt: "自然学習",
      src: "/202311/sandankyo/check_a_leaf.avif",
    },
    {
      alt: "ブーケ作成",
      src: "/202311/wedding/flower_arrangement.avif",
    },
    {
      alt: "結婚式体験",
      src: "/202311/wedding/wedding_bouquet.avif",
    },
  ] as const

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
        slide += scrollWidth / pictures.length
      }
      carousel.scrollLeft = slide
    }, 3000)
    return () => window.clearInterval(interval)
  })

  return (
    <section>
      <div
        ref={ref}
        className="carousel rounded-box shadow-lg w-full"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        {pictures.map((item) => (
          <Image
            key={item.alt}
            loader={cloudfrontLoader}
            src={item.src}
            height={1000}
            width={1000}
            alt={item.alt}
            className="aspect-square carousel-item object-cover w-full"
          />
        ))}
      </div>
      <p className="text-center">※自然体験は開催時期により異なります</p>
    </section>
  )
}

export function ScheduleCarousel({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): React.JSX.Element {
  return (
    <div className="carousel max-w-min mx-auto overflow-hidden p-4 schedule-scroll-left snap-none space-x-4 w-full">
      <Schedules />
      <Schedules />
    </div>
  )

  function Schedules(): React.JSX.Element {
    return (
      <>
        {schedules.map((item, index) => (
          <div key={item.alt} className="carousel-item rounded-box w-60">
            <div className="card shadow-lg">
              <Image
                loader={cloudfrontLoader}
                src={item.src}
                width={1000}
                height={1000}
                alt={item.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-8 relative">
                <span
                  className={`absolute font-bold left-0 px-2 py-1 text-white text-xs top-0 ${item.color}`}
                >
                  Day {index + 1}
                </span>
                <h3 className="card-title mx-auto text-lg whitespace-pre">
                  {item.title}
                </h3>
                <p className="font-semibold text-sm">
                  2024年{item.date[0]}月{item.date[1]}日({item.date[2]})
                  10:00~17:00
                </p>
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
      </>
    )
  }
}
