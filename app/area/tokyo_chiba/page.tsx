import { Register } from "@/app/area/register"
import { Schedules } from "@/app/area/schedules"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Navigation } from "@/app/components/layout/navigation"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  AREA,
  TOKYO_CHIBA,
  TOKYO_CHIBA_GUIDELINE,
  TOKYO_CHIBA_LINE,
} from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function TokyoChiba(): React.JSX.Element {
  const schedules: Schedule[] = [
    {
      alt: "ロボット制作",
      src: "/202311/sandankyo/brothers.avif",
      color: "bg-teal-400",
      title: "午前：ロボット制作\n午後：自然の循環",
      date: ["9", "14", "土"],
      venue: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "謎解き体験！",
      src: "/content/rays-blog_girl.avif",
      color: "bg-sky-400",
      title: "午前：プログラミング体験\n午後：謎解き体験！",
      date: ["9", "21", "土"],
      venue: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
      tags: ["プログラミング", "情報教育"],
    },
    {
      alt: "ロボサバ大会",
      src: "/202206/eda_island/course_challenge.avif",
      color: "bg-rose-400",
      title: "午前：ロボサバ大会\n午後：結婚式体験",
      date: ["9", "22", "日"],
      venue: "ヴィクトリアガーデン恵比寿迎賓館",
      address: "東京都渋谷区恵比寿南1-14-20",
      tags: ["ロボサバ", "結婚式体験"],
    },
  ] as const

  return (
    <>
      <Heading navigation={AREA} content={TOKYO_CHIBA} />
      <Image
        src={"/202409_chiba.avif"}
        width={1000}
        height={1000}
        alt="こどもテックキャラバン"
        className="w-full"
      />
      <Schedules schedules={schedules} />
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <p className="font-semibold">
          <Link href="/area/chiba" className="link text-sky-400">
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面へお進み下さい。
        </p>
        <LineRegister lineLink={TOKYO_CHIBA_LINE} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={schedules} />
      </section>
      <Register guideline={TOKYO_CHIBA_GUIDELINE} />
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <LineRegister lineLink={TOKYO_CHIBA_LINE} />
      </section>
      <Navigation content={TOKYO_CHIBA} />
    </>
  )
}

function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): React.JSX.Element {
  return (
    <Link href={lineLink}>
      <button
        type="button"
        className="bg-[#00C300] btn shadow-lg green-shine text-lg text-white"
      >
        LINEで簡単応募する！
        <ArrowRightIcon className="arrow-right size-5" />
      </button>
    </Link>
  )
}
