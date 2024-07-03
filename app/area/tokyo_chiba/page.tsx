import { ScheduleCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type { Schedule } from "@/app/interfaces/schedule"
import {
  AREA,
  TOKYO_CHIBA,
  TOKYO_CHIBA_LINE_LINK,
  TokyoChibaEvents,
} from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Chiba(): React.JSX.Element {
  const schedules: Schedule[] = [
    {
      alt: "ロボット制作",
      src: "/202311/sandankyo/brothers.avif",
      color: "bg-teal-400",
      title: "午前：ロボット制作\n午後：自然の循環",
      date: "2024年9月14日(土) 10:00~17:00",
      tags: ["ロボット制作", "自然学習"],
    },
    {
      alt: "謎解き体験！",
      src: "/content/rays-blog_girl.avif",
      color: "bg-info",
      title: "午前：プログラミング体験\n午後：謎解き体験！",
      date: "2024年9月21日(土) 10:00~17:00",
      tags: ["プログラミング", "情報教育"],
    },
    {
      alt: "ロボサバ大会",
      src: "/202307/final_stage/course_challenge.avif",
      color: "bg-rose-400",
      title: "午前：ロボサバ大会\n午後：結婚式体験",
      date: "2024年9月22日(日) 10:00~17:00",
      tags: ["ロボサバ", "結婚式体験"],
    },
  ] as const

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
        <ScheduleCarousel schedules={schedules} />
      </section>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
    </>
  )
}
