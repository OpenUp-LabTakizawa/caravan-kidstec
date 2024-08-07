import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { Picture } from "@/app/interfaces/picture"
import type { EventDate, Program } from "@/app/interfaces/schedule"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const DESCRIPTION: string = "こども向けマルチ体験ワークショップイベント"
export const HIROSHIMA_LINE: string = "https://lin.ee/LuSqIls"
export const TOKYO_CHIBA_LINE: string = "https://lin.ee/a1BRnXT"
export const TOKYO_CHIBA_DEADLINE: string = "２０２４年１０月１０日"
export const HIROSHIMA: Submenu = {
  name: "広島",
  href: "/hiroshima",
  textColor: "",
}
export const TOKYO_CHIBA: Submenu = {
  name: "東京・千葉",
  href: "/tokyo_chiba",
  textColor: "",
}
export const Q_AND_A: Submenu = {
  name: "Q&A",
  href: "/q-and-a",
  textColor: "text-sky-400",
}
export const PRIVACY_POLICY: Submenu = {
  name: "個人情報保護方針",
  href: "/privacy-policy",
  textColor: "text-orange-400",
}

export const EVENT: Menu = {
  name: "開催予定",
  href: "/event",
  textColor: "text-orange-400",
  submenus: [TOKYO_CHIBA],
}
export const HISTORY: Menu = {
  name: "過去の実績",
  href: "/history",
  textColor: "text-yellow-400",
  submenus: [HIROSHIMA],
}
export const SUPPORTER: Menu = {
  name: "サポーター",
  href: "/supporter",
  textColor: "text-teal-400",
  submenus: [],
}
export const PARTNER: Menu = {
  name: "パートナー",
  href: "/partner",
  textColor: "text-rose-400",
  submenus: [TOKYO_CHIBA, HIROSHIMA],
}

export const NAVIGATION: Menu[] = [EVENT, HISTORY, SUPPORTER, PARTNER] as const

const HIROSHIMA_FIRST_PROGRAMS: Program[] = [
  {
    date: { year: "2022", month: "6", day: "18", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2022", month: "6", day: "19", dayOfWeek: "日" },
    venue: "イノベーション・ハブ・ひろしまCamps",
  },
  {
    date: { year: "2022", month: "7", day: "2", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2022", month: "7", day: "23", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2022", month: "7", day: "30", dayOfWeek: "土" },
    venue: "イノベーション・ハブ・ひろしまCamps",
  },
] as const
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
    href: "/202206",
    title: "第１回 2022年6月",
    programs: HIROSHIMA_FIRST_PROGRAMS,
  },
  {
    href: "/202306",
    title: "第２回 2023年6月",
    programs: HIROSHIMA_SECOND_PROGRAMS,
  },
  {
    href: "/202311",
    title: "第３回 2023年11月",
    programs: HIROSHIMA_THIRD_PROGRAMS,
  },
  {
    href: "/202407",
    title: "第４回 2024年7月",
    programs: HIROSHIMA_FOURTH_PROGRAMS,
  },
]

export const HIROSHIMA_PICTURES: Picture[] = [
  {
    alt: "writing",
    src: "/202206/sandankyo/writing.avif",
  },
  {
    alt: "using_nipper",
    src: "/202311/eda_island/using_nipper.avif",
  },
  {
    alt: "peace_sign",
    src: "/202311/sandankyo/peace_sign.avif",
  },
  {
    alt: "mother_check",
    src: "/202311/wedding/mother_check.avif",
  },
  {
    alt: "switch_on",
    src: "/202311/wedding/switch_on.avif",
  },
  {
    alt: "olive_pouring",
    src: "/202311/eda_island/olive_pouring.avif",
  },
] as const
