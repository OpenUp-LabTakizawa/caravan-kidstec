import { Heading } from "@/app/components/layout/heading"
import type { Partner } from "@/app/interfaces/partner"
import { PARTNER, SPECIAL } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
  title: SPECIAL.name + PARTNER.name,
}

export default function Special(): JSX.Element {
  const partners: Partner[] = [
    {
      name: "ICHI COMMONS",
      href: "https://ichicommons.com/",
      src: "/logo/ichicommons_logo.svg",
      introduction:
        "ICHI COMMONS株式会社は、\n企業やNPO、地域、個人が\n互いを支え合いながら、社会課題の解決に\n取り組むためのプラットフォーム\n『サステナNet』を運営しています。\n\nこのプラットフォームを通じて、\n様々なステークホルダーが出会い、\n事業や社会にプラスの影響を与える\n活動を生み出しています。",
    },
    {
      name: "ロボットサバイバルプロジェクト（ロボサバ）",
      href: "https://robosava.jp/",
      src: "/logo/robosava_logo.avif",
      introduction:
        "「つくる」「学ぶ」「競う」３つの体験を軸に、\n子どもたちのクリエイティブな力を\n育むプロジェクトです。\n（運営：株式会社アイティプロジェクト／PCN仙台）\n\nはんだ付けをしてコンピュータをつくり、\n簡単なプログラムを打ち込んでロボットを動かしたり、\nセンサーを使ったプログラミングや\n電子工作体験などを行っております。\n\n自分でつくったモノをプログラムで動かすことで、\nワクワクと感動を体験することができます。",
    },
  ] as const

  return (
    <>
      <Heading menu={PARTNER} submenus={[SPECIAL]} />
      <Partners partners={partners} />
    </>
  )
}
