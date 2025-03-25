import type { Schedule } from "@/app/interfaces/schedule"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export function Schedules({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <section className="mx-auto px-2 space-y-2 text-center">
      <h2 className="font-bold text-3xl">スケジュール</h2>
      <table className="border-2 border-sky-400 font-bold mx-auto">
        {schedules.map((schedule, index) => (
          <tbody
            key={schedule.venue}
            className={`space-y-2${index === schedules.length - 1 ? "" : " border-b border-gray-200"}`}
          >
            <tr className="h-10 sm:h-14">
              <th className="pl-2">
                <p className="bg-gray-100 border px-1.5 rounded-lg">
                  Day{index + 1}
                </p>
              </th>
              <td className="px-2">
                {schedule.date.year} 年 {schedule.date.month} 月{" "}
                {schedule.date.day} 日 ({schedule.date.dayOfWeek})
              </td>
            </tr>
            <tr className="h-10 sm:h-14">
              <th className="pl-2">
                <p className="bg-gray-100 border px-1.5 rounded-lg">時間</p>
              </th>
              <td className="px-2">10：00&nbsp;～&nbsp;17：00（予定）</td>
            </tr>
            <tr className="h-10 sm:h-14">
              <th className="pl-2">
                <p className="bg-gray-100 border px-1.5 rounded-lg">場所</p>
              </th>
              <td className="px-2">
                {schedule.venue}
                <Link
                  href={schedule.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium flex gap-1 items-center mx-auto underline w-fit"
                >
                  {schedule.address}
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  )
}
