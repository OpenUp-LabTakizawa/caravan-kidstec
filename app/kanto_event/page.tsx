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
import { Link } from "next-view-transitions"
import Image from "next/image"
import type { JSX } from "react"
import { Procedure } from "./procedure.tsx"
import { Requirement } from "./requirement.tsx"
import { Schedules } from "./schedules.tsx"
import styles from "./styles.module.css"
import { Tablist } from "./tablist.tsx"

export const metadata: Metadata = {
  title: `${KANTO.name}イベントの応募・スケジュール`,
}

export default function KantoEvent(): JSX.Element {
  const guideline: Guideline = {
    anchorLink: "requirement",
    participantsNumber: "１０組程（お子様１５名）",
    startDate: KANTO_START_DATE,
    deadline: KANTO_DEADLINE,
    lineLink: KANTO_LINE,
  }
  const procedureId: string = "procedure"
  const schedules: Schedule[] = [
    {
      date: { year: "2025", month: "5", day: "25", dayOfWeek: "日" },
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      googleMapLink: "https://maps.app.goo.gl/o73uHVntuoTg3aym9",
      src: {
        am: "/image/kanto/202410/kurkku_fields/soldering_smoke.avif",
        pm: "/content/sheep_with_boy.avif",
      },
      alt: {
        am: "お父さんと一緒にはんだ付け",
        pm: "お兄さんに見守れながら、羊さんに餌やり体験",
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
      date: { year: "2025", month: "6", day: "1", dayOfWeek: "日" },
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      googleMapLink: "https://maps.app.goo.gl/98KzCvCeFggZY88P6",
      src: {
        am: "/image/kanto/202410/openup/set_ichigodake.avif",
        pm: "/content/rays-blog_girl.avif",
      },
      alt: {
        am: "ロボサバ大会の入賞目指して、プログラミング！",
        pm: "レイのブログ",
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
      tags: {
        am: ["ロボット", "プログラミング"],
        pm: ["情報リテラシー"],
      },
    },
    {
      date: { year: "2025", month: "6", day: "8", dayOfWeek: "日" },
      venue: "ガーデンヒルズ迎賓館 大宮",
      address: "埼玉県さいたま市大宮区吉敷町4-230-1",
      googleMapLink: "https://maps.app.goo.gl/1Cn5nDDuAigkpSGVA",
      src: {
        am: "/image/kanto/202410/tgn/point_out_lane.avif",
        pm: "/image/kanto/202410/tgn/tilt_the_cup.avif",
      },
      alt: {
        am: "家族と一緒にロボットプログラミング",
        pm: "実際の結婚式場で、階段入場を体験！",
      },
      title: {
        am: "ロボット競技大会",
        pm: "サステナブルワークショップ",
      },
      organization: {
        am: "ロボットサバイバルプロジェクト",
        pm: "ガーデンヒルズ迎賓館 大宮",
      },
      url: {
        am: "https://robosava.jp/",
        pm: "https://www.tgn.co.jp/wedding/omiya/gho/",
      },
      tags: {
        am: ["ロボット", "プログラミング"],
        pm: ["SDGs"],
      },
    },
  ] as const

  return (
    <>
      <Heading menus={[KANTO_EVENT]} />
      <Image
        src={"/202505_event_ready.avif"}
        width={540}
        height={383}
        alt="こどもテックキャラバン-関東イベント"
        priority={true}
        className="w-full"
      />
      <Schedules schedules={schedules} />
      <section className="mx-auto p-2 text-center text-sm w-fit sm:text-base">
        <b>
          <span className="decoration-4 decoration-orange-400 text-lg underline md:text-xl">
            全日程参加が必須
          </span>
          となります。
        </b>
        <p className="mb-3">
          <Link
            href={`#${guideline.anchorLink}`}
            className="font-bold text-sky-400 underline"
          >
            応募要項
          </Link>
          をご確認の上、
          <Link
            href={`#${procedureId}`}
            className="font-bold text-sky-400 underline"
          >
            応募手順
          </Link>
          、又は
          <br className="sm:hidden" />
          下のLINEからお申し込みください。
        </p>
        <LineApply lineLink={KANTO_LINE} />
      </section>
      <Tablist schedules={schedules} />
      <Requirement guideline={guideline} />
      <Procedure guideline={guideline} procedure={procedureId} />
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
          <div className="flex items-center">
            <span className="grow">{panel.text}</span>
            <ArrowRightIcon
              className={`ml-auto rounded-full size-3 text-white group-hover:bg-white lg:size-4 ${styles.arrowBackRight} ${panel.color.bg} ${panel.color.textHover}`}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}
