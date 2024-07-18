import { Heading } from "@/app/components/layout/heading"
import type { Partner } from "@/app/interfaces/partner"
import { HIROSHIMA, PARTNER } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  const partners: Partner[] = [
    {
      name: "BPL Inc.",
      href: "https://bplab.biz/",
      src: "/logo/bpl_logo.svg",
      introduction:
        "株式会社BPLは、ブランディング、経営・マーケティング、\n企画・運営など通して、地域の活性化につながる\n事業活動をおこなっております。\n\nどこにいても、実際に稼げる職業、若者が憧れる職業をつくりを、\n地域全体を活性化していくことで、\nニッポンを元気にしていくことを志命としています。",
    },
    {
      name: "一般社団法人 フウド",
      href: "https://fuudo.jp/",
      src: "/logo/fuudo_logo.avif",
      introduction:
        "江田島市沖美町の移住交流拠点施設「フウド」を拠点に、\n島内外の人々の“縁”がつながる活動に取り組んでいます。\n\n移住のサポートや交流の場づくりに加え、\nビーチクリーン活動やマリンアクティビティの普及など、\n島の里海環境を生かした活動にも取り組んでいます。",
    },
    {
      name: "広島大学(さんけん部)",
      src: "/logo/sanken_club_logo.avif",
      introduction:
        "数多くの自然がある広島大学のキャンパスは、\n自然を学ぶ絶好のフィールドです。\n\n“さんけん”は調査や保全、環境教育を実施する団体です。\n\n皆さんと一緒に広島大学の自然の豊かさについて学びます。",
    },
  ] as const

  return (
    <>
      <Heading navigation={PARTNER} menu={HIROSHIMA} />
      <Partners partners={partners} />
    </>
  )
}
