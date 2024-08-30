import type { Schedule } from "@/app/interfaces/schedule"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export function Schedules({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <section className="mx-auto px-2 relative space-y-2 text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
      <ul className="border-2 border-sky-400 mx-auto w-80 sm:w-max">
        {schedules.map((schedule) => (
          <li key={schedule.alt} className="border-b p-2 space-y-1">
            <p className="decoration-4 decoration-sky-400 underline">
              {schedule.date.year}年
              <b className="text-2xl">{schedule.date.month}</b>月
              <b className="decoration-4 decoration-sky-400 text-2xl underline">
                {schedule.date.day}
              </b>
              日(
              <b className="text-xl">{schedule.date.dayOfWeek}</b>)
            </p>
            <p className="space-x-2">
              <span className="badge badge-outline">開始</span>
              <span className="font-bold">
                10：00&nbsp;～&nbsp;17：00（予定）
              </span>
            </p>
            <div className="flex gap-2 items-center justify-center">
              <p className="badge badge-outline">場所</p>
              <div>
                <p className="font-bold">{schedule.venue}</p>
                <Link
                  href={schedule.googleMapLink}
                  target="_blank"
                  className="flex gap-1 items-center link mx-auto w-max"
                  rel="noopener noreferrer"
                >
                  {schedule.address}
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
