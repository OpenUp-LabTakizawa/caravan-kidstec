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
  { name: "企業サポーター", href: "/supporter" },
  { name: "地域パートナー", href: "/partner" },
] as const
const siteInfo: SiteUrl[] = [
  { name: "FAQ", href: "/faq" },
  { name: "個人情報保護方針", href: "/privacy-policy" },
] as const

export const navigation: Navigation[] = [
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
    title: "こどもテックキャラバン",
    content: {
      first: "広島の都市部・里山里海で\n自然体験を楽しみながら、",
      second: "プログラミングを学ぶ\nマルチ体験プログラムです。",
    },
  },
  {
    name: "teaching",
    alt: "講義中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/teaching.webp",
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
    title: "好きを見つけよう！",
    content: {
      first: "このイベントが皆様の\n新しい扉となり、",
      second: "扉を開いた先に違う景色が\n見えると幸いです。",
    },
  },
  {
    name: "loupe_gather",
    alt: "ロウソク作り",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/loupe_gather.webp",
    title: "オリジナルロウソク作り",
    content: {
      first: "過去には、様々な色を\n組み合わせた自分だけの、",
      second: "お洒落なロウソクも\n作成しました！",
    },
  },
  {
    name: "olive_grasp",
    alt: "オリーブ体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/olive_grasp.webp",
    title: "オリーブ体験",
    content: {
      first: "オリーブ農家の方から\nオリーブオイルの",
      second: "作り方を丁寧に\n楽しく学びました！",
    },
  },
] as const
