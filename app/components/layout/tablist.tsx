"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import { type JSX, useState } from "react"

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [isFlip, setIsFlip] = useState<boolean>(false)
  const [tab, setTab] = useState<string>(schedules[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isBusy) {
  //       setIsFlip(!isFlip)
  //     }
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [isFlip, isBusy])

  // useEffect(() => {
  //   const tabInterval = setInterval(() => {
  //     if (!isBusy) {
  //       setIsFlip(false)

  //       if (tab === schedules[0].alt) {
  //         setTab(schedules[1].alt)
  //       }
  //       if (tab === schedules[1].alt) {
  //         setTab(schedules[2].alt)
  //       }
  //       if (tab === schedules[2].alt) {
  //         setTab(schedules[0].alt)
  //       }
  //     }
  //   }, 6000)
  //   return () => clearInterval(tabInterval)
  // }, [schedules, isBusy, tab])

  function onClickTab(alt: string): void {
    setIsFlip(false)
    setTab(alt)
  }

  return (
    <section className="gap-1 grid max-w-lg mx-auto text-center">
      <div role="tablist" className="content-end gap-2 grid grid-cols-3 px-2">
        {schedules.map((schedule) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => onClickTab(schedule.alt)}
            onMouseEnter={() => setIsBusy(true)}
            onMouseLeave={() => setIsBusy(false)}
            onTouchStart={() => setIsBusy(true)}
            onTouchEnd={() => setIsBusy(false)}
            className={`border-b-4 duration-300 py-1 rounded-lg shadow-xl ${schedule.alt === tab ? "bg-teal-400 border-teal-700 hover:border-b-2 hover:translate-y-0.5" : "bg-gray-100 border-gray-400 hover:border-b-2 hover:translate-y-0.5"}`}
          >
            <b>{schedule.alt}</b>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule) =>
          tab === schedule.alt && (
            <div
              key={schedule.alt}
              role="tabpanel"
              onClick={() => setIsFlip(!isFlip)}
              onKeyDown={() => setIsFlip(!isFlip)}
              onMouseEnter={() => setIsBusy(true)}
              onMouseLeave={() => setIsBusy(false)}
              onTouchStart={() => setIsBusy(true)}
              onTouchEnd={() => setIsBusy(false)}
              className="h-96 m-2 w-80 sm:w-96"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`duration-1000 shadow-lg relative transition-transform${isFlip ? " rotate-y-180" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute h-full w-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <TabCard schedule={schedule} time="am" />
                </div>
                <div
                  className="absolute h-full w-full"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <TabCard schedule={schedule} time="pm" />
                </div>
              </div>
            </div>
          ),
      )}
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
        className="h-60 object-cover rounded-t-2xl w-96"
      />
      <div className="bg-amber-50 gap-1 grid h-36 pb-2 py-1 rounded-b-2xl shadow-2xl">
        <p className="text-left text-white text-xs">
          <b className="bg-teal-400 px-2 py-1">{schedule.alt}</b>
          <b
            className={`px-2 py-1 ${time === "am" ? "bg-sky-400" : "bg-orange-400"}`}
          >
            {time === "am" ? "午前" : "午後"}
          </b>
        </p>
        <h3 className="gap-1 grid mx-auto text-base font-bold">
          {time === "am" ? schedule.title.am : schedule.title.pm}
        </h3>
        {schedule.url.am || schedule.url.pm ? (
          <Link
            href={time === "am" ? schedule.url.am : schedule.url.pm}
            target="_blank"
            className="font-bold link text-sm"
            rel="noopener noreferrer"
          >
            {time === "am"
              ? schedule.organization.am
              : schedule.organization.pm}
          </Link>
        ) : time === "am" ? (
          <strong className="text-sm">{schedule.organization.am}</strong>
        ) : (
          <strong className="text-sm">{schedule.organization.pm}</strong>
        )}
        <b className="text-sm">
          {schedule.date.year}年{schedule.date.month}月{schedule.date.day}
          日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
        </b>
        <div className="flex flex-wrap gap-2 justify-center">
          {time === "am"
            ? schedule.tags.am.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline bg-base-200 text-xs"
                >
                  {tag}
                </span>
              ))
            : schedule.tags.pm.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline bg-base-200 text-xs"
                >
                  {tag}
                </span>
              ))}
        </div>
      </div>
    </>
  )
}
