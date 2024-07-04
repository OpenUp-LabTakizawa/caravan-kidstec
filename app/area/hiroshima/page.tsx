import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Schedule } from "@/app/interfaces/schedule"
import { AREA, HIROSHIMA, HIROSHIMA_LINE_LINK } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  const schedules: Schedule[] = [
    {
      alt: "はんだ付け",
      src: "/202307/eda_island/soldering.avif",
      color: "bg-teal-400",
      title: "前半：ロボット制作\n後半：サマーキャンプ",
      date: ["7", "6", "土"],
      venue: "広島大学東広島キャンパス",
      address: "広島県東広島市鏡山1-3-2",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "SUP体験",
      src: "/202307/eda_island/sup_on_the_sea.avif",
      color: "bg-info",
      title: "前半：プログラミング体験\n後半：江田島の海でSUP体験",
      date: ["7", "13", "土"],
      venue: "能美市民センター",
      address: "広島県江田島市能美町中町4859-9",
      tags: ["プログラミング", "自然学習"],
    },
    {
      alt: "結婚式体験",
      src: "/202311/wedding/wrapping_bouquet.avif",
      color: "bg-rose-400",
      title: "午前：ロボサバ大会\n午後：結婚式体験",
      date: ["7", "20", "土"],
      venue: "アーククラブ迎賓館福山",
      address: "広島県福山市西町1-6-28",
      tags: ["ロボサバ", "結婚式体験"],
    },
  ] as const

  return (
    <>
      <Heading navigation={AREA} content={HIROSHIMA} />
      <section className="grid gap-4">
        <div className="bg-amber-50 grid mx-auto w-max">
          <span className="bg-sky-400 font-bold justify-self-start p-1">
            開催日時
          </span>
          <ul>
            {schedules.map((item) => (
              <li key={item.alt} className="grid gap-1 border-b p-2">
                <p className="decoration-4 decoration-sky-400 underline">
                  2024年
                  <span className="font-bold text-2xl">{item.date[0]}</span>月
                  <span className="font-bold text-2xl">{item.date[1]}</span>日(
                  <span className="font-bold text-xl">{item.date[2]}</span>)
                </p>
                <div className="flex gap-2 items-center mx-auto">
                  <p className="badge badge-outline">場所</p>
                  <p>
                    <strong>{item.venue}</strong>
                    <br />
                    {item.address}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={schedules} />
      </section>
      <section>
        <div className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
          <p className="font-semibold">
            公式LINEアカウントから、
            <br />
            次回開催の通知を受け取れます。
          </p>
          <LineAddFriends linkLink={HIROSHIMA_LINE_LINK} />
        </div>
      </section>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
    </>
  )
}
