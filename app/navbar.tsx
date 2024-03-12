import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  HeartIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const SITE_TITLE = 'こどもテックキャラバン'

const history = [
  { name: '第1回', href: '/history/first-activity' },
  { name: '第2回', href: '/history/second-activity' },
  { name: '第3回', href: '/history/third-activity' },
]

const area = [{ name: '広島エリア', href: '/supporter-partner/hiroshima' }]

const siteInfo = [
  { name: 'FAQ', href: '/faq' },
  { name: '個人情報保護方針', href: '/privacy-policy' },
]

const navItems = [
  { name: '最新情報', href: '/news', icon: NewspaperIcon },
  {
    name: '活動紹介',
    href: '/about-activity',
    icon: TruckIcon,
  },
  {
    name: '過去の実績',
    icon: SparklesIcon,
    content: history,
  },
  {
    name: 'サポーター/パートナー',
    icon: HeartIcon,
    content: area,
  },
  {
    name: 'お問い合わせ',
    icon: QuestionMarkCircleIcon,
    content: siteInfo,
  },
]

const themeLists = [
  { name: 'デフォルト', value: 'light' },
  { name: 'ダーク', value: 'dark' },
  { name: 'カップケーキ', value: 'cupcake' },
  { name: 'マルハナバチ', value: 'bumblebee' },
  { name: 'エメラルド', value: 'emerald' },
  { name: 'コーポレート', value: 'corporate' },
  { name: 'シンセウェイブ', value: 'synthwave' },
  { name: 'レトロ', value: 'retro' },
  { name: 'サイバーパンク', value: 'cyberpunk' },
  { name: 'バレンタイン', value: 'valentine' },
  { name: 'ハロウィン', value: 'halloween' },
  { name: 'ガーデン', value: 'garden' },
  { name: 'フォレスト', value: 'forest' },
  { name: 'アクア', value: 'aqua' },
  { name: 'ローファイ', value: 'lofi' },
  { name: 'パステル', value: 'pastel' },
  { name: 'ファンタジー', value: 'fantasy' },
  { name: 'ワイヤーフレーム', value: 'wireframe' },
  { name: 'ブラック', value: 'black' },
  { name: 'ラグジュアリー', value: 'luxury' },
  { name: 'ドラキュラ', value: 'dracula' },
  { name: 'CMYK', value: 'cmyk' },
  { name: 'オータム', value: 'autumn' },
  { name: 'ビジネス', value: 'business' },
  { name: 'アシッド', value: 'acid' },
  { name: 'レモネード', value: 'lemonade' },
  { name: 'ナイト', value: 'night' },
  { name: 'コーヒー', value: 'coffee' },
  { name: 'ウィンター', value: 'winter' },
  { name: 'ディム', value: 'dim' },
  { name: 'ノール', value: 'nord' },
  { name: 'サンセット', value: 'sunset' },
] as const

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <DropdownMenuForSP />
        <Link href="/" className="btn btn-ghost">
          <Image
            src="/logo_line.webp"
            sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, (max-width: 1200px) 16vw, 20vw"
            width={100}
            height={100}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt={SITE_TITLE}
          />
        </Link>
      </div>
      <NavItems />
      <ThemeLists />
    </div>
  )
}

function DropdownMenuForSP() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Bars3CenterLeftIcon className="h-7 w-7" />
      </div>
      <ul className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.content && !item.href ? (
              <>
                <Link href="#">
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
                <SubContent content={item.content} />
              </>
            ) : (
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavItems() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.content ? (
              <details>
                <summary>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </summary>
                <SubContent content={item.content} />
              </details>
            ) : (
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
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

function ThemeLists() {
  return (
    <div className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          テーマ
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        <ul className="dropdown-content z-[1] h-52 w-52 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl">
          {themeLists.map((item) => (
            <li key={item.name}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={item.name}
                value={item.value}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
