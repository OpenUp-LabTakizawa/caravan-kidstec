import type { EventInfo } from "@/app/interfaces/eventInfo"
import type {
  Content,
  Navigation,
  NavigationSquare,
} from "@/app/interfaces/navigation"
import {
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const TOKYO_CHIBA_LINE_LINK: string = "https://lin.ee/a1BRnXT"
export const HIROSHIMA_LINE_LINK: string = "https://lin.ee/LuSqIls"

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
  color: "text-info",
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

export const squareNavigation: NavigationSquare[] = [
  {
    name: TOKYO_CHIBA.name,
    icon: "kai_icon.avif",
    color: AREA.color,
    href: AREA.href + TOKYO_CHIBA.href,
  },
  {
    name: HIROSHIMA.name,
    icon: "miku_icon.avif",
    color: SUPPORTER.color,
    href: AREA.href + HIROSHIMA.href,
  },
  {
    name: PARTNER.name,
    icon: PARTNER.icon,
    color: PARTNER.color,
    href: PARTNER.href,
  },
  {
    name: FAQ.name,
    icon: CONTACT.icon,
    color: CONTACT.color,
    href: FAQ.href,
  },
] as const

export const TokyoChibaEvents: EventInfo[] = [
  {
    date: {
      month: "9",
      day: "14",
      weekday: "土",
    },
    venue: {
      name: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
    },
  },
  {
    date: {
      month: "9",
      day: "21",
      weekday: "土",
    },
    venue: {
      name: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
    },
  },
  {
    date: {
      month: "9",
      day: "22",
      weekday: "日",
    },
    venue: {
      name: "ヴィクトリアガーデン恵比寿迎賓館",
      address: "東京都渋谷区恵比寿南1-14-20",
    },
  },
] as const
