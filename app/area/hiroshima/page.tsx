import { HiroshimaLine } from "@/app/components/button/hiroshimaLine"
import { PlanCarousel } from "@/app/components/layout/carousel"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import { HiroshimaCarouselItems, HiroshimaEvents } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading content="開催予定" href="/area/hiroshima" />
      <section className="grid gap-4">
        <div className="bg-amber-50 grid mx-auto w-max">
          <span className="bg-sky-400 font-bold justify-self-start p-1">
            開催日時
          </span>
          <ul>
            {HiroshimaEvents.map((item) => (
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
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">スケジュール</h2>
        <PlanCarousel carouselItems={HiroshimaCarouselItems} />
      </section>
      <section>
        <div className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
          <p className="font-semibold">
            公式LINEアカウントから、
            <br />
            次回開催の通知を受け取れます。
          </p>
          <HiroshimaLine />
        </div>
      </section>
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </>
  )
}
