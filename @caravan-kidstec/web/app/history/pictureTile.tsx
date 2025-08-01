"use client"

import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { type JSX, type RefObject, useEffect, useRef } from "react"
import type { Picture } from "@/app/interfaces/picture"
import { HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"

export function PictureTile({
  pathname,
  date,
  pictures,
}: Readonly<{
  pathname: string
  date: string
  pictures: Picture[]
}>): JSX.Element {
  const ref: RefObject<Map<string, HTMLAnchorElement>> = useRef<
    Map<string, HTMLAnchorElement>
  >(new Map<string, HTMLAnchorElement>())

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("scale-up-down")
        } else {
          entry.target.classList.remove("scale-up-down")
        }
      }
    })

    if (ref.current.values()) {
      for (const node of ref.current.values()) {
        observer.observe(node)
      }
    }
    return () => observer.disconnect()
  })

  return (
    <div className="gap-1 grid grid-cols-3">
      {pictures.map((picture) => (
        <Link
          key={picture.alt}
          href={`${HISTORY.pathname}/image${pathname}/${date}/${picture.src.split("/")[5].split(".")[0]}`}
          ref={(node: HTMLAnchorElement) => {
            ref.current.set(picture.alt, node)
            return () => {
              ref.current.delete(picture.alt)
            }
          }}
          className="cursor-zoom-in relative"
        >
          <MagnifyingGlassPlusIcon className="absolute right-0 size-4 stroke-2 text-white" />
          <Image
            loader={cloudfrontLoader}
            src={`${picture.src.split(".")[0]}_thumbnail.${picture.src.split(".")[1]}`}
            width={256}
            height={171}
            alt={picture.alt}
            placeholder="blur"
            blurDataURL={picture.blurDataUrl}
            className="w-full"
          />
        </Link>
      ))}
    </div>
  )
}
