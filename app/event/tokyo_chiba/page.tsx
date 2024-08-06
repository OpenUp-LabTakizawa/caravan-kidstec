import { LineApply } from "@/app/components/button/lineAddFriends"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { EventPanels } from "@/app/components/layout/menuPanel"
import {
  ScheduleTab1,
  ScheduleTab2,
  ScheduleTab3,
} from "@/app/components/layout/tab"
import { Register } from "@/app/event/register"
import { Schedules } from "@/app/event/schedules"
import type { Guideline } from "@/app/interfaces/guideline"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  EVENT,
  TOKYO_CHIBA,
  TOKYO_CHIBA_DEADLINE,
  TOKYO_CHIBA_LINE,
} from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function TokyoChiba(): JSX.Element {
  const guideline: Guideline = {
    participantsNumber: "２０組程",
    deadline: TOKYO_CHIBA_DEADLINE,
    lineLink: TOKYO_CHIBA_LINE,
  }
  const schedules: Schedule[] = [
    {
      alt: "ロボット制作",
      src: "/202311/sandankyo/brothers.avif",
      color: "bg-teal-400",
      title: "午前：ロボット制作\n午後：自然の循環",
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "謎解き体験！",
      src: "/content/rays-blog_girl.avif",
      color: "bg-sky-400",
      title: "午前：プログラミング体験\n午後：謎解き体験！",
      date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      tags: ["プログラミング", "情報教育"],
    },
    {
      alt: "ロボサバ大会",
      src: "/202206/eda_island/course_challenge.avif",
      color: "bg-rose-400",
      title: "午前：ロボサバ大会\n午後：結婚式体験",
      date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
      venue: "ヴィクトリアガーデン恵比寿迎賓館",
      address: "東京都渋谷区恵比寿南1-14-20",
      tags: ["ロボサバ", "結婚式体験"],
    },
  ] as const

  return (
    <>
      <Heading menu={EVENT} submenus={[TOKYO_CHIBA]} />
      <Image
        src={"/202410_tokyo_chiba.avif"}
        width={1000}
        height={1000}
        alt="こどもテックキャラバン"
        className="w-full"
      />
      <Schedules schedules={schedules} />
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 text-center w-max">
        <strong className="mb-2">
          <Link
            href={`${EVENT.href}${TOKYO_CHIBA.href}#details`}
            className="link text-sky-400"
          >
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面へお進み下さい。
        </strong>
        <LineApply lineLink={TOKYO_CHIBA_LINE} />
      </section>
      <section className="grid gap-4 text-center">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          スケジュール タブ Ver1
        </h2>
        <ScheduleTab1 schedules={schedules} />
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          スケジュール タブ Ver2
        </h2>
        <ScheduleTab2 schedules={schedules} />
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          スケジュール タブ Ver3
        </h2>
        <ScheduleTab3 schedules={schedules} />
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={schedules} />
      </section>
      <Register guideline={guideline} />
      <LineApply lineLink={TOKYO_CHIBA_LINE} />
      <EventPanels menu={EVENT} submenu={TOKYO_CHIBA} />
    </>
  )
}
