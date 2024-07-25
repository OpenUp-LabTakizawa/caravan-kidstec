import type { Guideline } from "@/app/interfaces/guideline"
import type { Menu, Submenu } from "@/app/interfaces/menu"
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
