import { PlanCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import {
  AREA,
  TOKYO_CHIBA,
  TOKYO_CHIBA_LINE_LINK,
  TokyoChibaCarouselItems,
  TokyoChibaEvents,
} from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
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
            {TokyoChibaEvents.map((item) => (
              <li key={item.venue.name} className="grid gap-1 border-b p-2">
                <p className="decoration-4 decoration-sky-400 underline">
                  2024年
                  <span className="font-bold text-2xl">{item.date.month}</span>
                  月<span className="font-bold text-2xl">{item.date.day}</span>
                  日{"("}
                  <span className="font-bold text-xl">{item.date.weekday}</span>
                  {")"}
                </p>
                <div className="flex gap-2 items-center mx-auto">
                  <p className="badge badge-outline">場所</p>
                  <p>
                    <strong>{item.venue.name}</strong>
                    <br />
                    {item.venue.address}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
          <p className="font-semibold">
            <Link href="/area/chiba" className="link link-info">
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
        <PlanCarousel carouselItems={TokyoChibaCarouselItems} />
      </section>
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </>
  )
}
