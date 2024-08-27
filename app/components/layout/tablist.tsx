"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import { type JSX, useEffect, useState } from "react"

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [isFlip, setIsFlip] = useState<boolean>(false)
  const [tab, setTab] = useState<string>(schedules[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBusy) {
        setIsFlip(!isFlip)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isFlip, isBusy])

  useEffect(() => {
    const tabInterval = setInterval(() => {
      if (!isBusy) {
        if (tab === schedules[0].alt) {
          setTab(schedules[1].alt)
        }
        if (tab === schedules[1].alt) {
          setTab(schedules[2].alt)
        }
        if (tab === schedules[2].alt) {
          setTab(schedules[0].alt)
        }
      }
    }, 6000)
    return () => clearInterval(tabInterval)
  }, [tab, schedules, isBusy])

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
              className="card flip-card m-2 h-96 w-80"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`duration-1000 flip-card-inner shadow-lg relative transition-transform ${isFlip ? "rotate-y-180" : ""}`}
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
      <div className="bg-amber-50 card-body h-36 p-0 pb-2 pt-6 relative rounded-b-2xl shadow-2xl">
        <strong className="absolute bg-teal-400 left-0 px-2 py-1 text-white text-xs top-0">
          {schedule.alt}&nbsp;{time === "am" ? "午前" : "午後"}
        </strong>
        <h3 className="gap-1 grid mx-auto text-base font-bold">
          {time === "am" ? schedule.title.am : schedule.title.pm}
        </h3>
        <strong className="text-sm">
          {time === "am" ? (
            schedule.url.am ? (
              <Link
                href={schedule.url.am}
                target="_blank"
                className="link"
                rel="noopener noreferrer"
              >
                {schedule.organization.am}
              </Link>
            ) : (
              <>{schedule.organization.am}</>
            )
          ) : schedule.url.pm ? (
            <Link
              href={schedule.url.pm}
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              {schedule.organization.pm}
            </Link>
          ) : (
            <>{schedule.organization.pm}</>
          )}
        </strong>
        <strong className="text-sm">
          {schedule.date.year}年{schedule.date.month}月{schedule.date.day}
          日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
        </strong>
        <div className="card-actions justify-center">
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
