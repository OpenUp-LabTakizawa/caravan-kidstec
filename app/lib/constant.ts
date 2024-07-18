import type { Guideline } from "@/app/interfaces/guideline"
import type { Menu, Navigation } from "@/app/interfaces/navigation"
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
export const HIROSHIMA: Menu = { name: "広島", href: "/hiroshima" }
export const TOKYO_CHIBA: Menu = { name: "東京・千葉", href: "/tokyo_chiba" }
export const FAQ: Menu = { name: "FAQ", href: "/faq" }
export const PRIVACY_POLICY: Menu = {
  name: "個人情報保護方針",
  href: "/privacy-policy",
}

export const AREA: Navigation = {
  name: "開催予定",
  icon: TruckIcon,
  color: "text-orange-400",
  href: "/area",
  menu: [TOKYO_CHIBA, HIROSHIMA],
}
export const HISTORY: Navigation = {
  name: "過去の実績",
  icon: TrophyIcon,
  color: "text-yellow-400",
  href: "/history",
  menu: [HIROSHIMA],
}
export const SUPPORTER: Navigation = {
  name: "サポーター",
  icon: GlobeAsiaAustraliaIcon,
  color: "text-teal-400",
  href: "/supporter",
  menu: [],
}
export const PARTNER: Navigation = {
  name: "パートナー",
  icon: HeartIcon,
  color: "text-rose-400",
  href: "/partner",
  menu: [TOKYO_CHIBA, HIROSHIMA],
}
export const CONTACT: Navigation = {
  name: "お問い合わせ",
  icon: QuestionMarkCircleIcon,
  color: "text-sky-400",
  href: "/contact",
  menu: [FAQ, PRIVACY_POLICY],
}

export const navigation: Navigation[] = [
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
