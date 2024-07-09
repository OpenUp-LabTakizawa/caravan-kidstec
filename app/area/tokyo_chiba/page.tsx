import { SlideUp } from "@/app/components/animation/slideUp"
import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import {
  AREA,
  TOKYO_CHIBA,
  TOKYO_CHIBA_LINE_LINK,
  TOKYO_CHIBA_SCHEDULES,
} from "@/app/lib/constant"
import {
  ArrowRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Chiba(): React.JSX.Element {
  return (
    <>
      <Heading navigation={AREA} content={TOKYO_CHIBA} />
      <section className="grid gap-4">
        <Image
          src={"/202409_chiba.avif"}
          width={1000}
          height={1000}
          alt="こどもテックキャラバン"
          className="w-full"
        />
        <div className="bg-amber-50 grid mx-auto w-max">
          <span className="bg-sky-400 font-bold justify-self-start p-1">
            開催日時
          </span>
          <ul>
            {TOKYO_CHIBA_SCHEDULES.map((item) => (
              <li key={item.alt} className="grid gap-1 border-b p-2">
                <p className="decoration-4 decoration-sky-400 underline">
                  2024年
                  <span className="font-bold text-2xl">{item.date[0]}</span>月
                  <SlideUp className="decoration-4 decoration-sky-400 font-bold text-2xl underline">
                    {item.date[1]}
                  </SlideUp>
                  日(
                  <span className="font-bold text-xl">{item.date[2]}</span>)
                </p>
                <div className="flex gap-2 items-center mx-auto">
                  <p className="badge badge-outline">場所</p>
                  <p>
                    <strong>{item.venue}</strong>
                    <br />
                    {item.address}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
          <p className="font-semibold">
            <Link href="/area/chiba" className="link text-sky-400">
              応募要項
            </Link>
            をご確認の上、
            <br />
            応募画面へお進み下さい。
          </p>
          <Link href={TOKYO_CHIBA_LINE_LINK}>
            <button
              type="button"
              className="bg-[#00C300] btn text-lg text-white"
            >
              LINEで簡単応募する！
              <ArrowRightIcon className="arrow-right size-5" />
            </button>
          </Link>
        </div>
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <ScheduleCarousel schedules={TOKYO_CHIBA_SCHEDULES} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">応募要項</h2>
        <div className="alert bg-sky-400 gap-1 grid grid-rows-2 grid-flow-col justify-items-center max-w-fit mx-auto shadow-lg text-base">
          <InformationCircleIcon className="row-span-2 size-10" />
          <p>
            <span className="decoration-4 decoration-orange-400 font-bold underline">
              募集は先着順
            </span>
            になります。
          </p>
          <p>定員に達し次第、募集を終了します。</p>
        </div>
      </section>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
    </>
  )
}
