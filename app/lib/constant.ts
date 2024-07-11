import type {
  Content,
  Navigation,
  NavigationPanel,
} from "@/app/interfaces/navigation"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  StarIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const TOKYO_CHIBA: Content = { name: "東京・千葉", href: "/tokyo_chiba" }
export const HIROSHIMA: Content = { name: "広島", href: "/hiroshima" }
export const FAQ: Content = { name: "FAQ", href: "/faq" }
export const PRIVACY_POLICY: Content = {
  name: "個人情報保護方針",
  href: "/privacy-policy",
}

export const AREA: Navigation = {
  name: "開催予定",
  icon: TruckIcon,
  color: "text-orange-400",
  href: "/area",
  content: [TOKYO_CHIBA, HIROSHIMA],
}
export const HISTORY: Navigation = {
  name: "過去の実績",
  icon: TrophyIcon,
  color: "text-yellow-400",
  href: "/history",
  content: [HIROSHIMA],
}
export const SUPPORTER: Navigation = {
  name: "サポーター",
  icon: GlobeAsiaAustraliaIcon,
  color: "text-teal-400",
  href: "/supporter",
}
export const PARTNER: Navigation = {
  name: "パートナー",
  icon: HeartIcon,
  color: "text-rose-400",
  href: "/partner",
  content: [TOKYO_CHIBA, HIROSHIMA],
}
export const CONTACT: Navigation = {
  name: "お問い合わせ",
  icon: QuestionMarkCircleIcon,
  color: "text-sky-400",
  href: "/contact",
  content: [FAQ, PRIVACY_POLICY],
}

export const navigation: Navigation[] = [
  AREA,
  HISTORY,
  SUPPORTER,
  PARTNER,
  CONTACT,
] as const

export const panelNavigation: NavigationPanel[] = [
  {
    name: TOKYO_CHIBA.name,
    icon: StarIcon,
    color: AREA.color,
    href: AREA.href + TOKYO_CHIBA.href,
  },
  {
    name: HIROSHIMA.name,
    icon: RocketLaunchIcon,
    color: PARTNER.color,
    href: AREA.href + HIROSHIMA.href,
  },
  {
    name: SUPPORTER.name,
    icon: SUPPORTER.icon,
    color: SUPPORTER.color,
    href: SUPPORTER.href,
  },
  {
    name: FAQ.name,
    icon: CONTACT.icon,
    color: CONTACT.color,
    href: CONTACT.href + FAQ.href,
  },
] as const

export const TOKYO_CHIBA_SCHEDULES: Schedule[] = [
  {
    alt: "ロボット制作",
    src: "/202311/sandankyo/brothers.avif",
    color: "bg-teal-400",
    title: "午前：ロボット制作\n午後：自然の循環",
    date: ["9", "14", "土"],
    venue: "クルックフィールズ",
    address: "千葉県木更津市矢那2503",
    tags: ["ロボット制作", "自然学習"],
  },
  {
    alt: "謎解き体験！",
    src: "/content/rays-blog_girl.avif",
    color: "bg-sky-400",
    title: "午前：プログラミング体験\n午後：謎解き体験！",
    date: ["9", "21", "土"],
    venue: "東京虎ノ門グローバルスクエア",
    address: "東京都港区虎ノ門1-3-1",
    tags: ["プログラミング", "情報教育"],
  },
  {
    alt: "ロボサバ大会",
    src: "/202307/final_stage/course_challenge.avif",
    color: "bg-rose-400",
    title: "午前：ロボサバ大会\n午後：結婚式体験",
    date: ["9", "22", "日"],
    venue: "ヴィクトリアガーデン恵比寿迎賓館",
    address: "東京都渋谷区恵比寿南1-14-20",
    tags: ["ロボサバ", "結婚式体験"],
  },
] as const
