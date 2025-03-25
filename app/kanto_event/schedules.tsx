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
            key={schedule.venue}
            className={`p-2 space-y-2${index !== schedules.length - 1 ? " border-b border-gray-200" : ""}`}
          >
            <p className="flex items-center min-h-8">
              <span className="bg-gray-100 border px-1.5 rounded-3xl">
                Day{index + 1}
              </span>
              <span className="grow">
                {schedule.date.year}年{schedule.date.month}月{schedule.date.day}
                日({schedule.date.dayOfWeek})
              </span>
            </p>
            <p className="flex items-center min-h-8">
              <span className="bg-gray-100 border border-current px-1.5 rounded-3xl">
                開始
              </span>
              <span className="grow">10：00&nbsp;～&nbsp;17：00（予定）</span>
            </p>
            <div className="flex gap-1 items-center min-h-8 sm:gap-2">
              <p className="bg-gray-100 border border-current px-1.5 rounded-3xl">
                場所
              </p>
              <div className="grow">
                <span>{schedule.venue}</span>
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
