import type { JSX } from "react"
import type { Program } from "@/app/interfaces/schedule"

export function Programs({
  programs,
}: Readonly<{ programs: Program[] }>): JSX.Element {
  return (
    <section className="bg-amber-50 mx-auto relative">
      <b className="absolute bg-sky-400 hidden p-1 sm:block">開催日時</b>
      <ul>
        {programs.map((program, index) => (
          <li
            key={program.date.month + program.date.day + program.venue}
            className="border-b border-gray-300 p-2 space-y-1"
          >
            <p className="flex items-center justify-center">
              <b className="bg-gray-100 border px-1.5 rounded-lg text-xs">
                Day{index + 1}
              </b>
              <span className="w-56 sm:w-80">
                {program.date.year}年{program.date.month}月{program.date.day}日(
                {program.date.dayOfWeek})
              </span>
            </p>
            <p className="flex items-center justify-center">
              <b className="bg-gray-100 border px-1.5 rounded-lg text-xs">
                場所
              </b>
              <span className="w-56 sm:w-80">{program.venue}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
