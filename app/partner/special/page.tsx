import { Heading } from "@/app/components/layout/heading"
import type { Partner } from "@/app/interfaces/partner"
import { PARTNER, SPECIAL } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { JSX } from "react"

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
      name: "PCN仙台",
      href: "http://sendai.pcn.club/",
      src: "/logo/sendai_pcn_club.avif",
      introduction:
        "PCN仙台では、親子向けの体験プログラムとして\n福井県で開発された手のひらサイズのコンピュータ\n「IchigoJam」(イチゴジャム)の組み立てや\n電子工作体験を行っております。\n\n自分ではんだ付けをし、配線を繋ぎ、\n簡単なプログラムを打ち込んでもらう内容です。\n試行錯誤しながら自分が作ったコンピュータを、\n自分で打ったプログラムで動かすことで、\nワクワクと感動を体験することができます。",
    },
  ] as const

  return (
    <>
      <Heading menu={PARTNER} submenus={[SPECIAL]} />
      <Partners partners={partners} />
    </>
  )
}
