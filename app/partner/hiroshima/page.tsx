import { Heading } from "@/app/components/layout/heading"
import type { Partner } from "@/app/interfaces/partner"
import { HIROSHIMA, PARTNER } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { JSX } from "react"

export default function Hiroshima(): JSX.Element {
  const partners: Partner[] = [
    {
      name: "BPL",
      href: "https://bplab.biz/",
      src: "/logo/bpl_logo.svg",
      introduction:
        "株式会社BPLは、ブランディング、\n経営・マーケティング、企画・運営など通して、\n地域の活性化につながる\n事業活動をおこなっております。\n\nどこにいても、実際に稼げる職業、\n若者が憧れる職業をつくりを、\n地域全体を活性化していくことで、\nニッポンを元気にしていくことを\n志命としています。",
    },
    {
      name: "フウド",
      href: "https://fuudo.jp/",
      src: "/logo/fuudo_logo.avif",
      introduction:
        "江田島市沖美町の移住交流拠点施設\n「フウド」を拠点に、島内外の人々の“縁”が\nつながる活動に取り組んでいます。\n\n移住のサポートや交流の場づくりに加え、\nビーチクリーン活動や\nマリンアクティビティの普及など、\n島の里海環境を生かした活動にも\n取り組んでいます。",
    },
    {
      name: "三段峡-太田川流域研究会（さんけん）",
      href: "https://sanken-hiroshima.org/",
      src: "/logo/sanken_logo.avif",
      introduction:
        "私たちはフィールドの中で生態系を学び、\n自然と人とのかかわりを共に考え、\n一人ひとりの価値や、人と人の繋がりの\nあり方を提案し続けます。\n\n子ども達が『ここ』で\n誇りをもって暮らしていける為に。",
    },
    {
      name: "広島大学さんけん部",
      href: "https://www.instagram.com/hu_sankenbu/",
      src: "/logo/sanken_club_logo.avif",
      introduction:
        "数多くの自然がある広島大学のキャンパスは、\n自然を学ぶ絶好のフィールドです。\n\n“さんけん”は調査や保全、\n環境教育を実施する団体です。\n\n皆さんと一緒に広島大学の\n自然の豊かさについて学びます。",
    },
  ] as const

  return (
    <>
      <Heading menu={PARTNER} submenus={[HIROSHIMA]} />
      <Partners partners={partners} />
    </>
  )
}
