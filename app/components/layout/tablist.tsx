"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import { type JSX, useState } from "react"

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>(schedules[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isBusy) {
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
  //   }, 3000)
  //   return () => clearInterval(interval)
  // })

  return (
    <section className="gap-1 grid max-w-lg mx-auto text-center">
      <div role="tablist" className="content-end gap-2 grid grid-cols-3 px-2">
        {schedules.map((schedule) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(schedule.alt)}
            onMouseEnter={() => setIsBusy(true)}
            onMouseLeave={() => setIsBusy(false)}
            onTouchStart={() => setIsBusy(true)}
            onTouchEnd={() => setIsBusy(false)}
            className={`border-b-4 duration-300 py-1 rounded-lg shadow-xl ${schedule.alt === tab ? "bg-teal-400 border-teal-700 hover:border-b-2 hover:translate-y-0.5" : "bg-gray-100 border-gray-400 hover:border-b-2 hover:translate-y-0.5"}`}
          >
            <strong>{schedule.alt}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule) =>
          tab === schedule.alt && (
            <div
              key={schedule.alt}
              role="tabpanel"
              onMouseEnter={() => setIsBusy(true)}
              onMouseLeave={() => setIsBusy(false)}
              onTouchStart={() => setIsBusy(true)}
              onTouchEnd={() => setIsBusy(false)}
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={256}
                height={256}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl w-96 sm:h-80"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong className="absolute bg-teal-400 left-0 px-2 py-1 text-white text-xs top-0">
                  {schedule.alt}
                </strong>
                <h3 className="gap-1 grid mx-auto text-base font-bold">
                  {schedule.am.url ? (
                    <Link
                      href={schedule.am.url}
                      target="_blank"
                      className="link"
                    >
                      {schedule.am.title}
                    </Link>
                  ) : (
                    <span>{schedule.am.title}</span>
                  )}
                  {schedule.pm.url ? (
                    <Link
                      href={schedule.pm.url}
                      target="_blank"
                      className="link"
                    >
                      {schedule.pm.title}
                    </Link>
                  ) : (
                    <span>{schedule.pm.title}</span>
                  )}
                </h3>
                <strong className="text-sm">
                  {schedule.date.year}年{schedule.date.month}月
                  {schedule.date.day}
                  日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
                </strong>
                <div className="card-actions justify-center">
                  {schedule.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline bg-base-200 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
      )}
    </section>
  )
}
