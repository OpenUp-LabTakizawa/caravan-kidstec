import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  HeartIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  SwatchIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import type { Navigation } from "../interfaces/navigation"
import type { SiteUrl } from "../interfaces/siteUrl"
import type { Theme } from "../interfaces/theme"

const SITE_TITLE = "こどもテックキャラバン"

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

const navItems: Navigation[] = [
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

const themeList: Theme[] = [
  { name: "デフォルト", value: "light" },
  { name: "ダーク", value: "dark" },
  { name: "カップケーキ", value: "cupcake" },
  { name: "マルハナバチ", value: "bumblebee" },
  { name: "エメラルド", value: "emerald" },
  { name: "コーポレート", value: "corporate" },
  { name: "シンセウェイブ", value: "synthwave" },
  { name: "レトロ", value: "retro" },
  { name: "サイバーパンク", value: "cyberpunk" },
  { name: "バレンタイン", value: "valentine" },
  { name: "ハロウィン", value: "halloween" },
  { name: "ガーデン", value: "garden" },
  { name: "フォレスト", value: "forest" },
  { name: "アクア", value: "aqua" },
  { name: "ローファイ", value: "lofi" },
  { name: "パステル", value: "pastel" },
  { name: "ファンタジー", value: "fantasy" },
  { name: "ワイヤーフレーム", value: "wireframe" },
  { name: "ブラック", value: "black" },
  { name: "ラグジュアリー", value: "luxury" },
  { name: "ドラキュラ", value: "dracula" },
  { name: "CMYK", value: "cmyk" },
  { name: "オータム", value: "autumn" },
  { name: "ビジネス", value: "business" },
  { name: "アシッド", value: "acid" },
  { name: "レモネード", value: "lemonade" },
  { name: "ナイト", value: "night" },
  { name: "コーヒー", value: "coffee" },
  { name: "ウィンター", value: "winter" },
  { name: "ディム", value: "dim" },
  { name: "ノール", value: "nord" },
  { name: "サンセット", value: "sunset" },
] as const

export function Header(): React.JSX.Element {
  return (
    <header className="navbar sticky top-0 z-[1] bg-base-100">
      <div className="navbar-start">
        <DropdownMenu />
        <Link href="/" className="btn btn-ghost w-fit tilt-shaking">
          <Image
            src="/caravan-kidstec_logo_line.webp"
            width={200}
            height={200}
            alt={SITE_TITLE}
          />
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <NavItems />
      </nav>
      <div className="navbar-end lg:w-3/12">
        <ThemeController />
      </div>
    </header>
  )
}

function DropdownMenu(): React.JSX.Element {
  return (
    <details className="dropdown">
      <summary role="button" className="btn btn-ghost lg:hidden">
        <Bars3CenterLeftIcon className="size-7" />
      </summary>
      <nav>
        <ul className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.href && (
                <Link href={item.href}>
                  <item.icon className={`size-5 ${item.color}`} />
                  {item.name}
                </Link>
              )}
              {item.content && (
                <>
                  <div>
                    <item.icon className={`size-5 ${item.color}`} />
                    {item.name}
                  </div>
                  <SubContent content={item.content} />
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

function NavItems(): React.JSX.Element {
  return (
    <ul className="menu menu-horizontal p-0">
      {navItems.map((item) => (
        <li key={item.name} className="hover:scale-110">
          {item.href && (
            <Link href={item.href}>
              <item.icon className={`size-5 ${item.color}`} />
              {item.name}
            </Link>
          )}
          {item.content && (
            <details>
              <summary>
                <item.icon className={`size-5 ${item.color}`} />
                {item.name}
              </summary>
              <SubContent content={item.content} />
            </details>
          )}
        </li>
      ))}
    </ul>
  )
}

function SubContent({
  content,
}: {
  content: { name: string; href: string }[]
}) {
  return (
    <ul className="p-2">
      {content.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

function ThemeController(): React.JSX.Element {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn flex-nowrap p-2">
        <SwatchIcon className="size-5 text-success" />
        <span className="text-nowrap">テーマ</span>
        <ChevronDownIcon className="size-5" />
      </div>
      <ul className="dropdown-content z-[1] h-52 w-40 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl">
        {themeList.map((theme) => (
          <li key={theme.name}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.name}
              value={theme.value}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}