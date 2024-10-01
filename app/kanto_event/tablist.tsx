"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { type JSX, useEffect, useState } from "react"
import styles from "./tablist.module.css"

export function Tablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [isBusy, setIsBusy] = useState<boolean>(false)
  const [isFlip, setIsFlip] = useState<boolean>(false)
  const [tab, setTab] = useState<string>(schedules[0].alt)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isBusy) {
        return
      }

      if (isFlip && tab === schedules[0].alt) {
        setTab(schedules[1].alt)
      }
      if (isFlip && tab === schedules[1].alt) {
        setTab(schedules[2].alt)
      }
      if (isFlip && tab === schedules[2].alt) {
        setTab(schedules[0].alt)
      }
      setIsFlip(!isFlip)
    }, 2500)
    return () => clearInterval(interval)
  })

  function onClickTab(alt: string): void {
    setIsFlip(false)
    setTab(alt)
  }

  function onMouseEnter(): void {
    if (!("maxTouchPoints" in navigator)) {
      setIsBusy(true)
    }
  }

  function onMouseLeave(): void {
    if (!("maxTouchPoints" in navigator)) {
      setIsBusy(false)
    }
  }

  return (
    <section className="max-w-lg mx-auto px-2 space-y-2 text-center sm:pb-12">
      <div className="flex gap-2 mx-auto">
        {schedules.map((schedule) => (
          <button
            key={schedule.alt}
            type="button"
            onClick={() => onClickTab(schedule.alt)}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onTouchStart={() => setIsBusy(true)}
            onTouchEnd={() => setIsBusy(false)}
            className={`basis-1/3 border-b-4 duration-300 py-1 rounded-lg shadow-xl ${schedule.alt === tab ? "bg-teal-400 border-teal-700 hover:border-b-2 hover:translate-y-0.5" : "bg-gray-100 border-gray-400 hover:border-b-2 hover:translate-y-0.5"}`}
          >
            <b>{schedule.alt}</b>
          </button>
        ))}
      </div>
      {schedules.map((schedule) => (
        <div
          key={schedule.alt}
          onClick={() => setIsFlip(!isFlip)}
          onKeyDown={() => setIsFlip(!isFlip)}
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
          onTouchStart={() => setIsBusy(true)}
          onTouchEnd={() => setIsBusy(false)}
          className={`h-96${tab === schedule.alt ? "" : " hidden"}`}
          style={{ perspective: "1000px" }}
        >
          <div
            className={`duration-1000 relative shadow-lg transition-transform${isFlip ? ` ${styles.rotateY180}` : ""}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-full"
              style={{ backfaceVisibility: "hidden" }}
            >
              <TabCard schedule={schedule} time="am" />
            </div>
            <div
              className="absolute w-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <TabCard schedule={schedule} time="pm" />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

function TabCard({
  schedule,
  time,
}: { schedule: Schedule; time: string }): JSX.Element {
  return (
    <>
      <Image
        loader={cloudfrontLoader}
        src={time === "am" ? schedule.src.am : schedule.src.pm}
        width={256}
        height={256}
        alt={schedule.alt}
        className="h-60 object-cover rounded-t-2xl w-full sm:h-72"
      />
      <div className="bg-amber-50 h-36 pb-2 py-1 rounded-b-2xl shadow-2xl space-y-2">
        <p className="text-left text-white text-xs">
          <b className="bg-teal-400 px-2 py-1">{schedule.alt}</b>
          <b
            className={`px-2 py-1 ${time === "am" ? "bg-sky-400" : "bg-orange-400"}`}
          >
            {time === "am" ? "午前" : "午後"}
          </b>
        </p>
        <h3 className="font-bold mx-auto text-base">
          {time === "am" ? schedule.title.am : schedule.title.pm}
        </h3>
        <Link
          href={time === "am" ? schedule.url.am : schedule.url.pm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex font-bold gap-1 items-center mx-auto text-sm underline w-max"
        >
          {time === "am" ? schedule.organization.am : schedule.organization.pm}
          <ArrowTopRightOnSquareIcon className="size-4" />
        </Link>
        <p className="font-bold text-sm">
          {schedule.date.year}年{schedule.date.month}月{schedule.date.day}
          日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {(time === "am" ? schedule.tags.am : schedule.tags.pm).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 border border-current h-5 px-1.5 rounded-3xl text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
