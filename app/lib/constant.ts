import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { TilePicture } from "@/app/interfaces/picture"
import type { EventDate, Program } from "@/app/interfaces/schedule"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const SITE_URL: string = "https://caravan-kidstec.com"
export const DESCRIPTION: string =
  "プログラミング×体験学習　親子で学ぶ体験型イベント"
export const HIROSHIMA_LINE: string = "https://lin.ee/eYcNlkG"
export const TOKYO_CHIBA_LINE: string = "https://lin.ee/RHBWD7P"
export const CLOUDFRONT_URL: string = "https://dk75m1tgsot44.cloudfront.net"
export const TOKYO_CHIBA_START_DATE: { text: string; date: string } = {
  text: "２０２４年９月９日 １２時",
  date: "2024-09-09T13:00:00+09:00",
}
export const TOKYO_CHIBA_DEADLINE: string = "２０２４年１０月１０日 １２時"
export const SPECIAL: Submenu = {
  name: "スペシャル",
  pathname: "/special",
  textColor: "",
}
export const HIROSHIMA: Submenu = {
  name: "広島",
  pathname: "/hiroshima",
  textColor: "",
}
export const TOKYO_CHIBA: Submenu = {
  name: "東京・千葉",
  pathname: "/tokyo_chiba",
  textColor: "",
}
export const Q_AND_A: Submenu = {
  name: "Q&A",
  pathname: "/q-and-a",
  textColor: "text-sky-400",
}
export const PRIVACY_POLICY: Submenu = {
  name: "個人情報保護方針",
  pathname: "/privacy-policy",
  textColor: "text-orange-400",
}

export const EVENT: Menu = {
  name: "開催予定",
  pathname: "/event",
  textColor: "text-orange-400",
  submenus: [TOKYO_CHIBA],
}
export const HISTORY: Menu = {
  name: "過去の実績",
  pathname: "/history",
  textColor: "text-yellow-400",
  submenus: [HIROSHIMA],
}
export const SPONSER: Menu = {
  name: "スポンサー",
  pathname: "/sponser",
  textColor: "text-teal-400",
  submenus: [],
}
export const PARTNER: Menu = {
  name: "パートナー",
  pathname: "/partner",
  textColor: "text-rose-400",
  submenus: [SPECIAL, TOKYO_CHIBA, HIROSHIMA],
}
export const SECRETARIAT: Menu = {
  name: "事務局",
  pathname: "/secretariat",
  textColor: "text-teal-400",
  submenus: [],
}

export const NAVIGATION: Menu[] = [
  EVENT,
  HISTORY,
  SPONSER,
  PARTNER,
  SECRETARIAT,
] as const

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

export const HIROSHIMA_FIRST_PICTURES: TilePicture[] = [
  {
    alt: "プログラミング体験",
    name: "initial_screen",
    src: "/202206/sandankyo/initial_screen.avif",
  },
  {
    alt: "家族ではんだ付けに挑戦！",
    name: "soldering_by_mother",
    src: "/202206/sandankyo/soldering_by_mother.avif",
  },
  {
    alt: "採れたての魚をパクリ！",
    name: "eating_char",
    src: "/202206/sandankyo/eating_char.avif",
  },
  {
    alt: "三段峡で記念撮影！",
    name: "group_peace",
    src: "/202206/sandankyo/group_peace.avif",
  },
  {
    alt: "三段峡の神秘的な自然に圧倒！",
    name: "magnificent_natural_landscape",
    src: "/202206/sandankyo/magnificent_natural_landscape.avif",
  },
  {
    alt: "サップ体験の準備ができましたか？",
    name: "ready_for_sup",
    src: "/202206/eda_island/ready_for_sup.avif",
  },
] as const
export const HIROSHIMA_SECOND_PICTURES: TilePicture[] = [
  {
    alt: "正しく取り付け出来るかな？",
    name: "check_parts",
    src: "/202306/m-plaza/check_parts.avif",
  },
  {
    alt: "メガサップに挑戦！",
    name: "rowing_mega_sup",
    src: "/202306/eda_island/rowing_mega_sup.avif",
  },
  {
    alt: "記念の集合写真をパシャリ！",
    name: "group_mega_sup",
    src: "/202306/eda_island/group_mega_sup.avif",
  },
  {
    alt: "初めてのプログラミング体験",
    name: "thinking_girl",
    src: "/202306/sandankyo/thinking_girl.avif",
  },
  {
    alt: "みんなと川下り体験",
    name: "going_downstream",
    src: "/202306/sandankyo/going_downstream.avif",
  },
  {
    alt: "雄大な自然を楽しみながら川下り体験",
    name: "rowing_boat",
    src: "/202306/sandankyo/rowing_boat.avif",
  },
] as const
export const HIROSHIMA_THIRD_PICTURES: TilePicture[] = [
  {
    alt: "はんだ付けに興味津々！",
    name: "teaching_soldering",
    src: "/202311/eda_island/teaching_soldering.avif",
  },
  {
    alt: "三段峡の自然と触れ合う",
    name: "laminate_leaf",
    src: "/202311/sandankyo/laminate_leaf.avif",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    name: "mochi_pounding",
    src: "/202311/sandankyo/mochi_pounding.avif",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    name: "thinking_boy",
    src: "/202311/wedding/thinking_boy.avif",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    name: "wraping_flower",
    src: "/202311/wedding/wraping_flower.avif",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    name: "group",
    src: "/202311/wedding/group.avif",
  },
] as const
export const HIROSHIMA_FOURTH_PICTURES: TilePicture[] = [
  {
    alt: "はんだ付けに興味津々！",
    name: "teaching_soldering_to_girl",
    src: "/202407/hiroshima_university/teaching_soldering_to_girl.avif",
  },
  {
    alt: "三段峡の自然と触れ合う",
    name: "looking_for_paper",
    src: "/202407/hiroshima_university/looking_for_paper.avif",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    name: "pointing_out_map",
    src: "/202407/hiroshima_university/pointing_out_map.avif",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    name: "judging",
    src: "/202407/wedding/judging.avif",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    name: "make_cream",
    src: "/202407/wedding/make_cream.avif",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    name: "group_with_sofa",
    src: "/202407/wedding/group_with_sofa.avif",
  },
] as const

export const HIROSHIMA_HISTORY: EventDate[] = [
  {
    date: "202206",
    title: "第１回 2022年6月",
    programs: HIROSHIMA_FIRST_PROGRAMS,
    pictures: HIROSHIMA_FIRST_PICTURES,
  },
  {
    date: "202306",
    title: "第２回 2023年6月",
    programs: HIROSHIMA_SECOND_PROGRAMS,
    pictures: HIROSHIMA_SECOND_PICTURES,
  },
  {
    date: "202311",
    title: "第３回 2023年11月",
    programs: HIROSHIMA_THIRD_PROGRAMS,
    pictures: HIROSHIMA_THIRD_PICTURES,
  },
  {
    date: "202407",
    title: "第４回 2024年7月",
    programs: HIROSHIMA_FOURTH_PROGRAMS,
    pictures: HIROSHIMA_FOURTH_PICTURES,
  },
]
