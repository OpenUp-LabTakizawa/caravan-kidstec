import type { Schedule } from "@/app/interfaces/schedule"
import type { JSX } from "react"

export function Schedules({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <section className="bg-amber-50 font-bold grid mx-auto relative w-full">
      <span className="absolute bg-sky-400 justify-self-start left-0 p-1 top-0">
        開催日時
      </span>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.alt} className="grid gap-1 border-b p-2">
            <p>
              2024年{schedule.date.month}月{schedule.date.day}日(
              {schedule.date.dayOfWeek})
            </p>
            <p>
              <span className="badge badge-outline badge-xs mr-1">場所</span>
              {schedule.venue}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
