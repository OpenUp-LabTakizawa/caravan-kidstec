import type { Program } from "@/app/interfaces/schedule"
import type { JSX } from "react"

export function Programs({
  programs,
}: Readonly<{ programs: Program[] }>): JSX.Element {
  return (
    <section className="bg-amber-50 mx-auto relative w-full">
      <b className="absolute bg-sky-400 justify-self-start left-0 p-1 top-0">
        開催日時
      </b>
      <ul>
        {programs.map((program) => (
          <li
            key={program.date.month + program.date.day + program.venue}
            className="border-b p-2 space-y-1"
          >
            <p>
              {program.date.year}年{program.date.month}月{program.date.day}日(
              {program.date.dayOfWeek})
            </p>
            <p>
              <b className="badge badge-outline badge-xs mr-1">場所</b>
              {program.venue}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
