import { PrivacyPolicy } from "@/app/event/privacyPolicy"
import { TOKYO_CHIBA } from "@/app/lib/constant"
import type { JSX } from "react"

export default function PrivacyPolicyPage(): JSX.Element {
  const organizations: string[] = [
    "CLASSROOM ADVENTURE",
    "ICHI COMMONS株式会社",
    "PCN仙台",
    "クルックフィールズ",
    "株式会社Griteen",
    "株式会社テイクアンドギヴ・ニーズ",
  ]

  return <PrivacyPolicy submenu={TOKYO_CHIBA} organizations={organizations} />
}
