import { AREA, TOKYO_CHIBA } from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export function Banner() {
  return (
    <Link
      href={AREA.href + TOKYO_CHIBA.href}
      className="bg-info overflow-hidden"
    >
      <p className="banner flex items-center text-nowrap">
        【新着情報】<strong className={AREA.color}>{TOKYO_CHIBA.name}</strong>
        エリアで募集中！
        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
      </p>
    </Link>
  )
}
