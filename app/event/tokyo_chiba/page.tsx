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
  TOKYO_CHIBA_START_DATE,
} from "@/app/lib/constant"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: `${TOKYO_CHIBA.name}イベント`,
}

export default function TokyoChiba(): JSX.Element {
  const guideline: Guideline = {
    anchorLink: "requirement",
    participantsNumber: "２０組程（６０名）",
    startDate: TOKYO_CHIBA_START_DATE.text,
    deadline: TOKYO_CHIBA_DEADLINE,
    lineLink: TOKYO_CHIBA_LINE,
  }
  const schedules: Schedule[] = [
    {
      alt: "Day 1",
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      src: {
        am: "/202407/hiroshima_university/soldering_with_father.avif",
        pm: "/content/sheep_with_boy.avif",
      },
      title: {
        am: "ロボット製作",
        pm: "自然学習（農と食、いのちのてざわり）",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "クルックフィールズ",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://kurkkufields.jp/",
      },
      tags: { am: ["電子工作", "ロボット"], pm: ["自然学習"] },
    },
    {
      alt: "Day 2",
      date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      googleMapLink: "https://maps.app.goo.gl/98KzCvCeFggZY88P6",
      src: {
        am: "/202407/wedding/typing_boy.avif",
        pm: "/content/rays-blog_girl.avif",
      },
      title: {
        am: "プログラミング体験",
        pm: "謎解き体験！",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "レイのブログ",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.classroom-adventure.com/rays-blog-jpn",
      },
      tags: { am: ["ロボット", "プログラミング"], pm: ["ネットリテラシー"] },
    },
    {
      alt: "Day 3",
      date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
      venue: "ヴィクトリアガーデン恵比寿迎賓館（予定）",
      address: "東京都渋谷区恵比寿南1-14-20",
      googleMapLink: "https://maps.app.goo.gl/wLmPrkKwYheQgvuM8",
      src: {
        am: "/202407/wedding/smile_challenge.avif",
        pm: "/202407/wedding/bubbles_entrance.avif",
      },
      title: {
        am: "ロボット競技大会",
        pm: "結婚式体験",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "ヴィクトリアガーデン恵比寿迎賓館（予定）",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.tgn.co.jp/wedding/tokyo/vge/",
      },
      tags: { am: ["ロボット", "プログラミング"], pm: ["結婚式体験"] },
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
        priority={true}
        className="w-full"
      />
      <Schedules schedules={schedules} />
      <section className="mx-auto p-2 text-center w-max">
        <p className="font-bold text-sm md:text-xl">
          全日程参加が必須となります。
        </p>
        <p className="mb-3">
          <Link
            href={`#${guideline.anchorLink}`}
            className="font-bold link text-sky-400"
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
      <LineApply lineLink={TOKYO_CHIBA_LINE} classname="text-center" />
      <EventPanels menu={EVENT} submenu={TOKYO_CHIBA} />
    </>
  )
}
