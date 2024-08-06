"use client"

import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, useState } from "react"

export function ScheduleTab1({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <>
      <div role="tablist" className="tabs tabs-bordered">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`tab ${tab === `Day ${index + 1}` ? "tab-active" : ""}`}
          >
            Day&nbsp;{index + 1}
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 mx-auto shadow-lg w-60"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-8 relative rounded-b-2xl">
                <strong
                  className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
                >
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-lg whitespace-pre">
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
    </>
  )
}

export function ScheduleTab2({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`tab ${tab === `Day ${index + 1}` ? "tab-active" : ""}`}
          >
            Day&nbsp;{index + 1}
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 mx-auto shadow-lg w-60"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-8 relative rounded-b-2xl">
                <strong
                  className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
                >
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-lg whitespace-pre">
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
    </>
  )
}

export function ScheduleTab3({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`tab ${tab === `Day ${index + 1}` ? "tab-active" : ""}`}
          >
            Day&nbsp;{index + 1}
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 mx-auto shadow-lg w-60"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-8 relative rounded-b-2xl">
                <strong
                  className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
                >
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-lg whitespace-pre">
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
    </>
  )
}
