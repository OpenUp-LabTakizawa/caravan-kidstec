import type { Schedule } from "@/app/interfaces/schedule"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export function Schedules({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <section className="mx-auto px-2 space-y-2 text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
      <ul className="border-2 border-sky-400 mx-auto p-2 w-fit">
        {schedules.map((schedule, index) => (
          <li
            key={schedule.alt}
            className={`p-2 space-y-2${index !== schedules.length - 1 ? " border-b" : ""}`}
          >
            <p className="flex items-center">
              <span className="bg-gray-100 border border-current px-1.5 rounded-3xl text-xs">
                Day{index + 1}
              </span>
              <span className="decoration-4 decoration-sky-400 grow underline">
                {schedule.date.year}年
                <b className="text-2xl">{schedule.date.month}</b>月
                <b className="decoration-4 decoration-sky-400 text-2xl underline">
                  {schedule.date.day}
                </b>
                日(
                <b className="text-xl">{schedule.date.dayOfWeek}</b>)
              </span>
            </p>
            <p className="flex items-center">
              <span className="bg-gray-100 border border-current px-1.5 rounded-3xl text-xs">
                開始
              </span>
              <b className="grow">10：00&nbsp;～&nbsp;17：00（予定）</b>
            </p>
            <div className="flex gap-2 items-center">
              <p className="bg-gray-100 border border-current px-1.5 rounded-3xl text-xs">
                場所
              </p>
              <div className="grow">
                <b>{schedule.venue}</b>
                <Link
                  href={schedule.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 items-center mx-auto underline w-fit"
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
