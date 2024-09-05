"use client"

import type { TilePicture } from "@/app/interfaces/picture"
import { HIROSHIMA, HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import { type JSX, type RefObject, useEffect, useRef } from "react"

export function HistoryPictures({
  pictures,
}: Readonly<{ pictures: TilePicture[] }>): JSX.Element {
  const ref: RefObject<Map<string, HTMLAnchorElement>> = useRef<
    Map<string, HTMLAnchorElement>
  >(new Map<string, HTMLAnchorElement>())

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

    if (ref.current?.values()) {
      for (const node of ref.current.values()) {
        observer.observe(node)
      }
    }
  })

  return (
    <div className="gap-1 grid grid-cols-3">
      {pictures.map((picture) => (
        <Link
          key={picture.alt}
          href={`${HISTORY.pathname + HIROSHIMA.pathname}/image/${picture.name}`}
          ref={(node: HTMLAnchorElement) => {
            ref.current?.set(picture.alt, node)
            return () => {
              ref.current?.delete(picture.alt)
            }
          }}
        >
          <Image
            loader={cloudfrontLoader}
            src={picture.src}
            height={256}
            width={256}
            alt={picture.alt}
            className="w-full"
          />
        </Link>
      ))}
    </div>
  )
}
