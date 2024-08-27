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
    anchorLink: "requirement",
    participantsNumber: "２０組程",
    deadline: TOKYO_CHIBA_DEADLINE,
    lineLink: TOKYO_CHIBA_LINE,
  }
  const schedules: Schedule[] = [
    {
      alt: "Day 1",
      src: "/202407/hiroshima_university/soldering_with_father.avif",
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      am: { title: "午前：ロボット製作", url: "" },
      pm: {
        title: "午後：自然学習（農と食、いのちのてざわり）",
        url: "https://kurkkufields.jp/",
      },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      tags: ["ロボット", "自然学習"],
    },
    {
      alt: "Day 2",
      src: "/content/rays-blog_girl.avif",
      date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
      am: { title: "午前：プログラミング体験", url: "" },
      pm: {
        title: "午後：謎解き体験！",
        url: "https://www.classroom-adventure.com/rays-blog-jpn",
      },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      googleMapLink: "https://maps.app.goo.gl/98KzCvCeFggZY88P6",
      tags: ["ロボット", "プログラミング", "ネットリテラシー"],
    },
    {
      alt: "Day 3",
      src: "/202407/wedding/pick_up_flower.avif",
      date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
      am: { title: "午前：ロボット競技大会", url: "https://robosava.jp/" },
      pm: {
        title: "午後：結婚式体験",
        url: "https://www.tgn.co.jp/wedding/tokyo/vge/",
      },
      venue: "ヴィクトリアガーデン恵比寿迎賓館（予定）",
      address: "東京都渋谷区恵比寿南1-14-20",
      googleMapLink: "https://maps.app.goo.gl/wLmPrkKwYheQgvuM8",
      tags: ["ロボット", "プログラミング", "結婚式体験"],
    },
  ] as const

  return (
    <>
      <Heading menu={EVENT} submenus={[TOKYO_CHIBA]} />
      <Image
        src={"/202410_tokyo_chiba.avif"}
        width={540}
        height={540}
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
            href={`${EVENT.href}${TOKYO_CHIBA.href}#${guideline.anchorLink}`}
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
      <ScheduleTablist schedules={schedules} />
      <Register guideline={guideline} />
      <LineApply lineLink={TOKYO_CHIBA_LINE} />
      <EventPanels menu={EVENT} submenu={TOKYO_CHIBA} />
    </>
  )
}
