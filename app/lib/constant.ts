import type { Guideline } from "@/app/interfaces/guideline"
import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { EventDate, Program } from "@/app/interfaces/schedule"
import {
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const HIROSHIMA_LINE: string = "https://lin.ee/LuSqIls"
export const TOKYO_CHIBA_LINE: string = "https://lin.ee/a1BRnXT"
export const HIROSHIMA: Submenu = { name: "広島", href: "/hiroshima" }
export const TOKYO_CHIBA: Submenu = { name: "東京・千葉", href: "/tokyo_chiba" }
export const FAQ: Submenu = { name: "FAQ", href: "/faq" }
export const PRIVACY_POLICY: Submenu = {
  name: "個人情報保護方針",
  href: "/privacy-policy",
}

export const AREA: Menu = {
  name: "開催予定",
  icon: TruckIcon,
  color: "text-orange-400",
  href: "/area",
  submenus: [TOKYO_CHIBA],
}
export const HISTORY: Menu = {
  name: "過去の実績",
  icon: TrophyIcon,
  color: "text-yellow-400",
  href: "/history",
  submenus: [HIROSHIMA],
}
export const SUPPORTER: Menu = {
  name: "サポーター",
  icon: GlobeAsiaAustraliaIcon,
  color: "text-teal-400",
  href: "/supporter",
  submenus: [],
}
export const PARTNER: Menu = {
  name: "パートナー",
  icon: HeartIcon,
  color: "text-rose-400",
  href: "/partner",
  submenus: [TOKYO_CHIBA, HIROSHIMA],
}
export const CONTACT: Menu = {
  name: "お問い合わせ",
  icon: QuestionMarkCircleIcon,
  color: "text-sky-400",
  href: "/contact",
  submenus: [FAQ, PRIVACY_POLICY],
}

export const NAVIGATION: Menu[] = [
  AREA,
  HISTORY,
  SUPPORTER,
  PARTNER,
  CONTACT,
] as const

export const TOKYO_CHIBA_GUIDELINE: Guideline = {
  participantsNumber: "２０組程",
  deadline: "２０２４年８月３１日",
  lineLink: TOKYO_CHIBA_LINE,
}

// const HIROSHIMA_202407_SCHEDULES: Schedule[] = [
//   {
//     alt: "はんだ付け",
//     src: "/202311/eda_island/soldering.avif",
//     color: "bg-teal-400",
//     title: "前半：ロボット制作\n後半：サマーキャンプ",
//     date: { month: "7", day: "6", dayOfWeek: "土" },
//     venue: "広島大学東広島キャンパス",
//     address: "広島県東広島市鏡山1-3-2",
//     tags: ["ロボット制作", "自然学習"],
//   },
//   {
//     alt: "SUP体験",
//     src: "/202206/eda_island/sup_on_the_sea.avif",
//     color: "bg-sky-400",
//     title: "前半：プログラミング体験\n後半：江田島の海でSUP体験",
//     date: { month: "7", day: "13", dayOfWeek: "土" },
//     venue: "能美市民センター",
//     address: "広島県江田島市能美町中町4859-9",
//     tags: ["プログラミング", "自然学習"],
//   },
//   {
//     alt: "結婚式体験",
//     src: "/202311/wedding/wrapping_bouquet.avif",
//     color: "bg-rose-400",
//     title: "午前：ロボサバ大会\n午後：結婚式体験",
//     date: { month: "7", day: "20", dayOfWeek: "土" },
//     venue: "アーククラブ迎賓館福山",
//     address: "広島県福山市西町1-6-28",
//     tags: ["ロボサバ", "結婚式体験"],
//   },
// ] as const

const HIROSHIMA_SECOND_PROGRAMS: Program[] = [
  {
    date: { year: "2023", month: "5", day: "27", dayOfWeek: "木" },
    venue: "ひと・まちプラザ",
  },
  {
    date: { year: "2023", month: "6", day: "3", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2023", month: "6", day: "10", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2023", month: "6", day: "24", dayOfWeek: "土" },
    venue: "ひろぎんホールディングス",
  },
] as const

const HIROSHIMA_THIRD_PROGRAMS: Program[] = [
  {
    date: { year: "2023", month: "11", day: "23", dayOfWeek: "木" },
    venue: "コミュニティスペース「フウド」",
  },
  {
    date: { year: "2023", month: "11", day: "25", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2023", month: "12", day: "2", dayOfWeek: "土" },
    venue: "アーククラブ迎賓館広島",
  },
] as const

const HIROSHIMA_FOURTH_PROGRAMS: Program[] = [
  {
    date: { year: "2024", month: "7", day: "6", dayOfWeek: "土" },
    venue: "広島大学東広島キャンパス",
  },
  {
    date: { year: "2024", month: "7", day: "13", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2024", month: "7", day: "20", dayOfWeek: "土" },
    venue: "アーククラブ迎賓館福山",
  },
] as const

export const HIROSHIMA_HISTORY: EventDate[] = [
  {
    href: "202206",
    title: "第１回 2022年6月",
  },
  {
    href: "202306",
    title: "第２回 2023年6月",
    programs: HIROSHIMA_SECOND_PROGRAMS,
  },
  {
    href: "202311",
    title: "第３回 2023年11月",
    programs: HIROSHIMA_THIRD_PROGRAMS,
  },
  {
    href: "202407",
    title: "第４回 2024年7月",
    programs: HIROSHIMA_FOURTH_PROGRAMS,
  },
]
