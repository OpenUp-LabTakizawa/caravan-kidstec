import { Register } from "@/app/area/register"
import { Schedules } from "@/app/area/schedules"
import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { AreaNavigation } from "@/app/components/layout/navigation"
import type { Guideline } from "@/app/interfaces/guideline"
import type { Schedule } from "@/app/interfaces/schedule"
import { AREA, HIROSHIMA } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  const schedules: Schedule[] = [
    {
      alt: "はんだ付け",
      src: "/202207/eda_island/soldering.avif",
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
      color: "bg-sky-400",
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
  const guideline: Guideline = {
    participantsNumber: "１０組程",
    deadline: "２０２４年６月２９日",
    lineLink: "https://lin.ee/LuSqIls",
    botImage: "/miku_icon.avif",
    userImage: "/kai_icon.avif",
  }

  return (
    <>
      <Heading navigation={AREA} content={HIROSHIMA} />
      <Schedules schedules={schedules} />
      <LineRegister lineLink={guideline.lineLink} />
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={schedules} />
      </section>
      <Register guideline={guideline} />
      <LineRegister lineLink={guideline.lineLink} />
      <AreaNavigation content={HIROSHIMA} />
    </>
  )
}

function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): React.JSX.Element {
  return (
    <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
      <p className="font-semibold">
        公式LINEアカウントから、
        <br />
        次回開催の通知を受け取れます。
      </p>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
