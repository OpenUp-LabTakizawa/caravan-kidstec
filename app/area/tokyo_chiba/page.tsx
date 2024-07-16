import { Register } from "@/app/area/register"
import { Schedules } from "@/app/area/schedules"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { AreaNavigation } from "@/app/components/layout/navigation"
import {
  AREA,
  TOKYO_CHIBA,
  TOKYO_CHIBA_GUIDELINE,
  TOKYO_CHIBA_SCHEDULES,
} from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function TokyoChiba(): React.JSX.Element {
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
      <Schedules schedules={TOKYO_CHIBA_SCHEDULES} />
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <p className="font-semibold">
          <Link href="/area/chiba" className="link text-sky-400">
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面へお進み下さい。
        </p>
        <LineRegister lineLink={TOKYO_CHIBA_GUIDELINE.lineLink} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={TOKYO_CHIBA_SCHEDULES} />
      </section>
      <Register guideline={TOKYO_CHIBA_GUIDELINE} />
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <LineRegister lineLink={TOKYO_CHIBA_GUIDELINE.lineLink} />
      </section>
      <AreaNavigation content={TOKYO_CHIBA} />
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
