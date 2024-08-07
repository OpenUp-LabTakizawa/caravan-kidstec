"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, useState } from "react"

export function ScheduleTab({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <div className="sm:hidden">
      <div role="tablist" className="gap-2 tabs">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`rounded-lg shadow-lg tab ${tab === `Day ${index + 1}` ? "bg-rose-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>Day&nbsp;{index + 1}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong
                  className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
                >
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-2xl whitespace-pre">
                  {schedule.title}
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
    </div>
  )
}

export function ScheduleTab1({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <div className="sm:hidden">
      <div role="tablist" className="gap-2 tabs">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`rounded-lg shadow-lg tab ${tab === `Day ${index + 1}` ? `tab-active ${schedule.color}` : "bg-gray-100"}`}
          >
            <strong>Day&nbsp;{index + 1}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong
                  className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
                >
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-2xl whitespace-pre">
                  {schedule.title}
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
    </div>
  )
}
