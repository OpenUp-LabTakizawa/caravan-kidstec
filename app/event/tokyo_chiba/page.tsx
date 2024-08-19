import { LineApply } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { EventPanels } from "@/app/components/layout/menuPanel"
import { ScheduleTablist } from "@/app/components/layout/tablist"
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
      alt: "Day 1",
      src: "/202407/hiroshima_university/soldering_with_father.avif",
      title: {
        am: "午前：ロボット制作",
        pm: "午後：自然学習\n（農と食、いのちのてざわり）",
      },
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "Day 2",
      src: "/content/rays-blog_girl.avif",
      title: { am: "午前：プログラミング体験", pm: "午後：謎解き体験！" },
      date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      googleMapLink: "https://maps.app.goo.gl/98KzCvCeFggZY88P6",
      tags: ["プログラミング", "ネットリテラシー"],
    },
    {
      alt: "Day 3",
      src: "/202407/wedding/put_a_piece_of_cake.avif",
      title: { am: "午前：ロボサバ大会", pm: "午後：結婚式体験" },
      date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
      venue: "ヴィクトリアガーデン恵比寿迎賓館",
      address: "東京都渋谷区恵比寿南1-14-20",
      googleMapLink: "https://maps.app.goo.gl/wLmPrkKwYheQgvuM8",
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
      <section className="grid gap-1 mx-auto p-4 text-center w-max">
        <p className="mb-2">
          <strong className="text-sm md:text-xl">
            全日程参加が必須となります。
          </strong>
          <br />
          <Link
            href={`${EVENT.href}${TOKYO_CHIBA.href}#details`}
            className="link text-sky-400 font-bold"
          >
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面からお申し込みください。
        </p>
        <LineApply lineLink={TOKYO_CHIBA_LINE} />
      </section>
      <section className="grid gap-4 text-center">
        <ScheduleTablist schedules={schedules} />
      </section>
      <Register guideline={guideline} />
      <LineApply lineLink={TOKYO_CHIBA_LINE} />
      <EventPanels menu={EVENT} submenu={TOKYO_CHIBA} />
    </>
  )
}
