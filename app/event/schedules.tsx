import type { Schedule } from "@/app/interfaces/schedule"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export function Schedules({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <section className="gap-2 grid mx-auto relative text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
      <ul className="border-2 border-sky-400 min-w-80">
        {schedules.map((schedule) => (
          <li key={schedule.alt} className="grid gap-1 border-b p-2">
            <p className="decoration-4 decoration-sky-400 underline">
              {schedule.date.year}年
              <b className="text-2xl">{schedule.date.month}</b>月
              <b className="decoration-4 decoration-sky-400 text-2xl underline">
                {schedule.date.day}
              </b>
              日(
              <b className="text-xl">{schedule.date.dayOfWeek}</b>)
            </p>
            <p>10：00&nbsp;～&nbsp;17：00（予定）</p>
            <div className="flex gap-2 items-center mx-auto">
              <p className="badge badge-outline">場所</p>
              <p>
                <strong>{schedule.venue}</strong>
                <br />
                <Link
                  href={schedule.googleMapLink}
                  target="_blank"
                  className="flex gap-1 items-center link"
                  rel="noopener noreferrer"
                >
                  {schedule.address}
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
