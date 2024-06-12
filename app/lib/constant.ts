import type { Carousel } from "@/app/interfaces/carousel"
import type { Navigation } from "@/app/interfaces/navigation"
import type { SiteUrl } from "@/app/interfaces/siteUrl"
import {
  HeartIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "こどもテックキャラバン"

const nextArea: SiteUrl[] = [
  { name: "広島", href: "/hiroshima" },
  { name: "千葉", href: "/chiba" },
] as const
const history: SiteUrl[] = [{ name: "広島", href: "/history" }] as const
const helper: SiteUrl[] = [
  { name: "サポーター", href: "/supporter" },
  { name: "パートナー", href: "/partner" },
] as const
const siteInfo: SiteUrl[] = [
  { name: "FAQ", href: "/faq" },
  { name: "個人情報保護方針", href: "/privacy-policy" },
] as const

export const navItems: Navigation[] = [
  {
    name: "最新情報",
    icon: NewspaperIcon,
    color: "text-primary",
    href: "/#news",
  },
  {
    name: "活動紹介",
    icon: SparklesIcon,
    color: "text-warning",
    href: "/#about",
  },
  {
    name: "開催予定",
    icon: TruckIcon,
    color: "text-accent",
    content: [...nextArea],
  },
  {
    name: "過去の実績",
    icon: TrophyIcon,
    color: "text-error",
    content: [...history],
  },
  {
    name: "サポーター/パートナー",
    icon: HeartIcon,
    color: "text-secondary",
    content: [...helper],
  },
  {
    name: "お問い合わせ",
    icon: QuestionMarkCircleIcon,
    color: "text-info",
    content: [...siteInfo],
  },
] as const

export const carouselItems: Carousel[] = [
  {
    name: "everyone_rowing",
    alt: "メガサップ",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/everyone_rowing.webp",
    title: "こどもテックキャラバン\nin 広島",
    content: {
      first: "広島の都市部・里山里海で\n自然体験を楽しみながら、",
      second: "プログラミングを学ぶ\nマルチ体験プログラムです。",
    },
  },
  {
    name: "checking",
    alt: "ロボットチェック",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/checking.webp",
    title: "ロボット X 自然体験",
    content: {
      first: "ロボット制作や自然体験など\n様々な挑戦ができます。",
      second:
        "苦労を重ねて乗り越えた挑戦は\n一生忘れられない思い出となります。",
    },
  },
  {
    name: "girl_boy_river",
    alt: "お魚探し中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/girl_boy_river.webp",
    title: "体験から好きを\n見つけよう！",
    content: {
      first: "このイベントが皆様の\n新しい扉となり、",
      second: "扉を開いた先に違う景色が\n見えると幸いです。",
    },
  },
]
