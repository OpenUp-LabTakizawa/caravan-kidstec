import type { Program } from "@/app/interfaces/schedule"
import type { JSX } from "react"

export function Programs({
  programs,
}: Readonly<{ programs: Program[] }>): JSX.Element {
  return (
    <details className="collapse collapse-arrow">
      <summary className="bg-amber-50 collapse-title text-xl">
        スケジュール
      </summary>
      <section className="bg-amber-50 font-bold grid mx-auto relative w-full">
        <span className="absolute bg-sky-400 justify-self-start left-0 p-1 top-0">
          開催日時
        </span>
        <ul>
          {programs.map((program) => (
            <li key={program.venue} className="grid gap-1 border-b p-2">
              <p>
                {program.date.year}年{program.date.month}月{program.date.day}日(
                {program.date.dayOfWeek})
              </p>
              <p>
                <span className="badge badge-outline badge-xs mr-1">場所</span>
                {program.venue}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </details>
  )
}
