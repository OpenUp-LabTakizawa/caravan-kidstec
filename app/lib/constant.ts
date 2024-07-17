import type { Guideline } from "@/app/interfaces/guideline"
import type { Content, Navigation } from "@/app/interfaces/navigation"
import {
  GlobeAsiaAustraliaIcon,
  HeartIcon,
  QuestionMarkCircleIcon,
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

export const TOKYO_CHIBA_GUIDELINE: Guideline = {
  participantsNumber: "２０組程",
  deadline: "２０２４年８月３１日",
  lineLink: "https://lin.ee/a1BRnXT",
  botImage: "/kai_icon.avif",
  userImage: "/miku_icon.avif",
}
