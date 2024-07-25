import { LineRegister } from "@/app/components/button/lineAddFriends"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import { Schedules } from "@/app/history/schedules"
import type { Schedule } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_LINE, HISTORY } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={HISTORY} submenu={HIROSHIMA} />
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第１回&nbsp;2022年6月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202206" />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第２回&nbsp;2023年6月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202306" />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第３回&nbsp;2023年11月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202311" />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第４回&nbsp;2024年7月
        </h2>
        <ForthEvent />
      </section>
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
      <Schedules schedules={schedules} />
      <section className="grid gap-4">
        <h3 className="font-bold text-2xl">スケジュール</h3>
        <ScheduleCarousel schedules={schedules} />
      </section>
    </>
  )
}
