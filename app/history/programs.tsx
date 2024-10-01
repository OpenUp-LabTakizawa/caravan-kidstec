import type { Program } from "@/app/interfaces/schedule"
import type { JSX } from "react"

export function Programs({
  programs,
}: Readonly<{ programs: Program[] }>): JSX.Element {
  return (
    <section className="bg-amber-50 mx-auto relative w-full">
      <b className="absolute bg-sky-400 hidden justify-self-start left-0 p-1 top-0 sm:block">
        開催日時
      </b>
      <ul>
        {programs.map((program, index) => (
          <li
            key={program.date.month + program.date.day + program.venue}
            className="border-b p-2 space-y-1"
          >
            <p className="flex items-center justify-center">
              <b className="bg-gray-100 border border-current px-1.5 rounded-3xl text-xs w-fit">
                Day{index + 1}
              </b>
              <span className="w-56 sm:w-80">
                {program.date.year}年{program.date.month}月{program.date.day}日(
                {program.date.dayOfWeek})
              </span>
            </p>
            <p className="flex items-center justify-center">
              <b className="bg-gray-100 border border-current px-1.5 rounded-3xl text-xs w-fit">
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
