import { LineApply } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { Guideline } from "@/app/interfaces/guideline"
import type { Menu, MenuPanel } from "@/app/interfaces/menu"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  KANTO,
  KANTO_DEADLINE,
  KANTO_EVENT,
  KANTO_LINE,
  KANTO_START_DATE,
  PRIVACY_POLICY,
  Q_AND_A,
} from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { Register } from "./register.tsx"
import { Schedules } from "./schedules.tsx"
import styles from "./styles.module.css"
import { Tablist } from "./tablist.tsx"

export const metadata: Metadata = {
  title: `${KANTO.name}イベントの応募・スケジュール`,
}

export default function KantoEvent(): JSX.Element {
  const guideline: Guideline = {
    anchorLink: "requirement",
    participantsNumber: "２０組程（６０名）",
    startDate: KANTO_START_DATE,
    deadline: KANTO_DEADLINE,
    lineLink: KANTO_LINE,
  }
  const schedules: Schedule[] = [
    {
      alt: "Day 1",
      date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      src: {
        am: "/image/hiroshima/202407/hiroshima_university/soldering_with_father.avif",
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
        am: "/image/hiroshima/202407/wedding/typing_boy.avif",
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
      venue: "アクアテラス迎賓館 新横浜",
      address: "神奈川県横浜市港北区新横浜3-7-15",
      googleMapLink: "https://maps.app.goo.gl/yUm7wrRfMm1veozm6",
      src: {
        am: "/image/hiroshima/202407/wedding/smile_challenge.avif",
        pm: "/image/hiroshima/202407/wedding/bubbles_entrance.avif",
      },
      title: {
        am: "ロボット競技大会",
        pm: "結婚式体験",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "アクアテラス迎賓館 新横浜",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.tgn.co.jp/wedding/yokohama/aqy/",
      },
      tags: { am: ["ロボット", "プログラミング"], pm: ["結婚式体験"] },
    },
  ] as const

  return (
    <>
      <Heading menu={KANTO_EVENT} />
      <Image
        src={"/202410_kanto.avif"}
        width={540}
        height={540}
        alt="こどもテックキャラバン-関東イベント"
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
        <LineApply lineLink={KANTO_LINE} />
      </section>
      <Tablist schedules={schedules} />
      <Register guideline={guideline} />
      <LineApply lineLink={KANTO_LINE} classname="text-center" />
      <MenuPanels menu={KANTO_EVENT} />
    </>
  )
}

function MenuPanels({ menu }: Readonly<{ menu: Menu }>): JSX.Element {
  const qaPanels: MenuPanel = {
    name: Q_AND_A.name,
    color: {
      bg: "bg-sky-400",
      shadow: styles.boxSkyShadow,
      text: "text-sky-400",
      textHover: "group-hover:text-sky-400",
    },
    href: menu.pathname + Q_AND_A.pathname,
    text: "よくある質問",
  }
  const privacyPolicyPanel: MenuPanel = {
    name: PRIVACY_POLICY.name,
    color: {
      bg: "bg-orange-400",
      shadow: styles.boxOrangeShadow,
      text: "text-orange-400",
      textHover: "group-hover:text-orange-400",
    },
    href: menu.pathname + PRIVACY_POLICY.pathname,
    text: "プライバシーポリシー",
  }

  const panels: MenuPanel[] = [qaPanels, privacyPolicyPanel]

  return (
    <section className="flex gap-4 justify-center pl-2 pr-4 text-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`basis-1/2 border-2 group max-w-52 rounded-lg shadow-lg hover:text-white ${panel.color.shadow}`}
        >
          <b
            className={`mx-auto w-fit group-hover:text-white ${panel.color.text}`}
          >
            {panel.name}
          </b>
          <div className="flex">
            <span className="grow">{panel.text}</span>
            <ArrowRightIcon
              className={`ml-auto rounded-full size-4 text-white group-hover:bg-white ${styles.arrowBackRight} ${panel.color.bg} ${panel.color.textHover}`}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}