"use client"

import type { TilePicture } from "@/app/interfaces/picture"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"
import styles from "./Album.module.css"

export function Album({
  title,
  pictures,
}: Readonly<{ title: string; pictures: TilePicture[] }>): JSX.Element {
  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setCurrentPage(3)
          }, 1000)
        }
      }
    })

    observer.observe(ref.current as HTMLDivElement)
    return () => observer.disconnect()
  }, [])

  function movePage(page: number) {
    if (page === pictures.length + 1) {
      return
    }

    if (page === currentPage) {
      setCurrentPage(currentPage + 2)
    } else if (page === currentPage - 1) {
      setCurrentPage(currentPage - 2)
    }
  }

  return (
    <div
      ref={ref}
      className="h-52 my-4 w-full sm:h-60"
      style={{
        transform: "rotatex(10deg) rotatey(-10deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <button
        type="button"
        className={`absolute bg-sky-50 border-4 border-amber-100 duration-1000 h-full right-0 space-y-4 top-0 w-1/2 ${styles.page}${currentPage >= 3 ? ` ${styles.leftSide}` : ""}`}
        onClick={() => movePage(1)}
      >
        <Image
          src="/caravan-kidstec_logo.avif"
          width={128}
          height={128}
          alt="こどもテックキャラバン-ロゴ"
          className="mx-auto mt-4"
        />
        <p>{title}</p>
        <p>アルバム</p>
      </button>
      {pictures.map((picture, index) => (
        <button
          key={picture.alt}
          type="button"
          className={`absolute bg-amber-50 duration-1000 flex items-center h-full right-0 top-0 w-1/2 ${styles.page}${index + 3 <= currentPage ? ` ${styles.leftSide}` : ""}`}
          onClick={() => movePage(index + 2)}
        >
          <Image
            loader={cloudfrontLoader}
            src={picture.src}
            width={256}
            height={256}
            alt={picture.alt}
            className="object-contain p-1 w-full"
          />
        </button>
      ))}
    </div>
  )
}
