import { PrivacyPolicy } from "@/app/event/privacyPolicy"
import { TOKYO_CHIBA } from "@/app/lib/constant"
import type { JSX } from "react"

export default function PrivacyPolicyPage(): JSX.Element {
  const organizations: string[] = [
    "Classroom Adventure",
    "ICHI COMMONS株式会社",
    "クルックフィールズ",
    "ロボットサバイバルプロジェクト（ロボサバ）",
    "株式会社Griteen",
    "株式会社テイクアンドギヴ・ニーズ",
  ] as const

  return <PrivacyPolicy submenu={TOKYO_CHIBA} organizations={organizations} />
}
