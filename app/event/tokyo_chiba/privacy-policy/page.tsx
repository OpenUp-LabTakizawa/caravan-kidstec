import { PrivacyPolicy } from "@/app/event/privacyPolicy"
import { TOKYO_CHIBA } from "@/app/lib/constant"
import type { JSX } from "react"

export default function PrivacyPolicyPage(): JSX.Element {
  return <PrivacyPolicy submenu={TOKYO_CHIBA} />
}
