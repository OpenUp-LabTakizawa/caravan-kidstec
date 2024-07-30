import { PrivacyPolicy } from "@/app/components/layout/privacyPolicy"
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

  return <PrivacyPolicy organizations={organizations} />
}
