import { LineRegister } from "@/app/components/button/lineAddFriends"
import { ScheduleCarousel2 } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HISTORY,
} from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={HISTORY} submenu={HIROSHIMA} />
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.date} className="grid gap-4">
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            {history.title}
          </h2>
          {history === HIROSHIMA_HISTORY[3] ? (
            <ForthEvent />
          ) : (
            <Link href={`/history/hiroshima/${history.date}`}>
              <button
                type="button"
                className="bg-sky-400 blue-shine btn shadow-lg text-lg text-white w-full"
              >
                イベント動画を視聴する
                <ArrowTopRightOnSquareIcon className="arrow-top-right size-5" />
              </button>
            </Link>
          )}
        </section>
      ))}
      <section className="grid gap-4">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
    </>
  )
}

function ForthEvent(): JSX.Element {
  const schedules: Schedule[] = [
    {
      alt: "はんだ付け",
      src: "/202311/eda_island/soldering.avif",
      color: "bg-teal-400",
      title: "前半：ロボット制作\n後半：サマーキャンプ",
      date: { month: "7", day: "6", dayOfWeek: "土" },
      venue: "広島大学東広島キャンパス",
      address: "広島県東広島市鏡山1-3-2",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "SUP体験",
      src: "/202206/eda_island/sup_on_the_sea.avif",
      color: "bg-sky-400",
      title: "前半：プログラミング体験\n後半：江田島の海でSUP体験",
      date: { month: "7", day: "13", dayOfWeek: "土" },
      venue: "能美市民センター",
      address: "広島県江田島市能美町中町4859-9",
      tags: ["プログラミング", "自然学習"],
    },
    {
      alt: "結婚式体験",
      src: "/202311/wedding/wrapping_bouquet.avif",
      color: "bg-rose-400",
      title: "午前：ロボサバ大会\n午後：結婚式体験",
      date: { month: "7", day: "20", dayOfWeek: "土" },
      venue: "アーククラブ迎賓館福山",
      address: "広島県福山市西町1-6-28",
      tags: ["ロボサバ", "結婚式体験"],
    },
  ] as const

  return (
    <>
      {/* <Schedules schedules={schedules} /> */}
      <section className="grid gap-4">
        <h3 className="font-bold text-2xl">スケジュール</h3>
        <ScheduleCarousel2 schedules={schedules} />
      </section>
    </>
  )
}
