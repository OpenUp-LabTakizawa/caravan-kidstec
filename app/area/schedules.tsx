import type { Schedule } from "@/app/interfaces/schedule"
import type React from "react"

export function Schedules({
  schedules,
}: Readonly<{
  schedules: Schedule[]
}>): React.JSX.Element {
  return (
    <section className="bg-amber-50 grid mx-auto w-max">
      <span className="bg-sky-400 font-bold justify-self-start p-1">
        開催日時
      </span>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.alt} className="grid gap-1 border-b p-2">
            <p className="decoration-4 decoration-sky-400 underline">
              2024年
              <span className="font-bold text-2xl">{schedule.date[0]}</span>月
              <span className="decoration-4 decoration-sky-400 font-bold text-2xl underline">
                {schedule.date[1]}
              </span>
              日(
              <span className="font-bold text-xl">{schedule.date[2]}</span>)
            </p>
            <p>10：00&nbsp;～&nbsp;17：00（予定）</p>
            <div className="flex gap-2 items-center mx-auto">
              <p className="badge badge-outline">場所</p>
              <p>
                <strong>{schedule.venue}</strong>
                <br />
                {schedule.address}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
