import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { TilePicture } from "@/app/interfaces/picture"
import type { EventDate, Program } from "@/app/interfaces/schedule"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const DESCRIPTION: string =
  "プログラミング×体験学習　親子で学ぶ体験型イベント"
export const HIROSHIMA_LINE: string = "https://lin.ee/LuSqIls"
export const TOKYO_CHIBA_LINE: string = "https://lin.ee/a1BRnXT"
export const TOKYO_CHIBA_DEADLINE: string = "２０２４年１０月１０日 １２時"
export const SPECIAL: Submenu = {
  name: "スペシャル",
  href: "/special",
  textColor: "",
}
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
export const SPONSER: Menu = {
  name: "スポンサー",
  href: "/sponser",
  textColor: "text-teal-400",
  submenus: [],
}
export const PARTNER: Menu = {
  name: "パートナー",
  href: "/partner",
  textColor: "text-rose-400",
  submenus: [SPECIAL, TOKYO_CHIBA, HIROSHIMA],
}

export const NAVIGATION: Menu[] = [EVENT, HISTORY, SPONSER, PARTNER] as const

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
    src: "/202206/sandankyo/initial_screen.avif",
    pathname: "initial_screen",
  },
  {
    alt: "家族ではんだ付けに挑戦！",
    src: "/202206/sandankyo/soldering_by_mother.avif",
    pathname: "soldering_by_mother",
  },
  {
    alt: "採れたての魚をパクリ！",
    src: "/202206/sandankyo/eating_char.avif",
    pathname: "eating_char",
  },
  {
    alt: "三段峡で記念撮影！",
    src: "/202206/sandankyo/group_peace.avif",
    pathname: "group_peace",
  },
  {
    alt: "三段峡の神秘的な自然に圧倒！",
    src: "/202206/sandankyo/magnificent_natural_landscape.avif",
    pathname: "magnificent_natural_landscape",
  },
  {
    alt: "サップ体験の準備ができましたか？",
    src: "/202206/eda_island/ready_for_sup.avif",
    pathname: "ready_for_sup",
  },
] as const
export const HIROSHIMA_SECOND_PICTURES: TilePicture[] = [
  {
    alt: "正しく取り付け出来るかな？",
    src: "/202306/m-plaza/check_parts.avif",
    pathname: "check_parts",
  },
  {
    alt: "メガサップに挑戦！",
    src: "/202306/eda_island/rowing_mega_sup.avif",
    pathname: "rowing_mega_sup",
  },
  {
    alt: "記念の集合写真をパシャリ！",
    src: "/202306/eda_island/group_mega_sup.avif",
    pathname: "group_mega_sup",
  },
  {
    alt: "初めてのプログラミング体験",
    src: "/202306/sandankyo/thinking_girl.avif",
    pathname: "thinking_girl",
  },
  {
    alt: "みんなと川下り体験",
    src: "/202306/sandankyo/going_downstream.avif",
    pathname: "going_downstream",
  },
  {
    alt: "雄大な自然を楽しみながら川下り体験",
    src: "/202306/sandankyo/rowing_boat.avif",
    pathname: "rowing_boat",
  },
] as const
export const HIROSHIMA_THIRD_PICTURES: TilePicture[] = [
  {
    alt: "はんだ付けに興味津々！",
    src: "/202311/eda_island/teaching_soldering.avif",
    pathname: "teaching_soldering",
  },
  {
    alt: "三段峡の自然と触れ合う",
    src: "/202311/sandankyo/laminate_leaf.avif",
    pathname: "laminate_leaf",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    src: "/202311/sandankyo/mochi_pounding.avif",
    pathname: "mochi_pounding",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    src: "/202311/wedding/thinking_boy.avif",
    pathname: "thinking_boy",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    src: "/202311/wedding/wraping_flower.avif",
    pathname: "wraping_flower",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    src: "/202311/wedding/group.avif",
    pathname: "group",
  },
] as const
export const HIROSHIMA_FOURTH_PICTURES: TilePicture[] = [
  {
    alt: "はんだ付けに興味津々！",
    src: "/202407/hiroshima_university/teaching_soldering_to_girl.avif",
    pathname: "teaching_soldering_to_girl",
  },
  {
    alt: "三段峡の自然と触れ合う",
    src: "/202407/hiroshima_university/looking_for_paper.avif",
    pathname: "looking_for_paper",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    src: "/202407/hiroshima_university/pointing_out_map.avif",
    pathname: "pointing_out_map",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    src: "/202407/wedding/judging.avif",
    pathname: "judging",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    src: "/202407/wedding/make_cream.avif",
    pathname: "make_cream",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    src: "/202407/wedding/group_with_sofa.avif",
    pathname: "group_with_sofa",
  },
] as const

export const HIROSHIMA_HISTORY: EventDate[] = [
  {
    href: "/202206",
    title: "第１回 2022年6月",
    programs: HIROSHIMA_FIRST_PROGRAMS,
    pictures: HIROSHIMA_FIRST_PICTURES,
  },
  {
    href: "/202306",
    title: "第２回 2023年6月",
    programs: HIROSHIMA_SECOND_PROGRAMS,
    pictures: HIROSHIMA_SECOND_PICTURES,
  },
  {
    href: "/202311",
    title: "第３回 2023年11月",
    programs: HIROSHIMA_THIRD_PROGRAMS,
    pictures: HIROSHIMA_THIRD_PICTURES,
  },
  {
    href: "/202407",
    title: "第４回 2024年7月",
    programs: HIROSHIMA_FOURTH_PROGRAMS,
    pictures: HIROSHIMA_FOURTH_PICTURES,
  },
]

export const HIROSHIMA_PICTURES: TilePicture[] = [
  {
    alt: "採れたてのお魚に興味津々！",
    src: "/202407/eda_island/holding_fish.avif",
    pathname: "holding_fish",
  },
  {
    alt: "広島大学のチェックポイント確認中…",
    src: "/202407/hiroshima_university/checking_course.avif",
    pathname: "checking_course",
  },
  {
    alt: "広島大学で昆虫採集！",
    src: "/202407/hiroshima_university/insect_netting_boy.avif",
    pathname: "insect_netting_boy",
  },
  {
    alt: "手作りのオリーブオイル、最初はまだ赤い！",
    src: "/202311/eda_island/olive_pouring.avif",
    pathname: "olive_pouring",
  },
  {
    alt: "ブーケを持って入場！",
    src: "/202311/wedding/wedding_bouquet.avif",
    pathname: "wedding_bouquet",
  },
  {
    alt: "ケーキ作りも自分で挑戦！",
    src: "/202407/wedding/pastry_chef_boy.avif",
    pathname: "pastry_chef_boy",
  },
] as const
