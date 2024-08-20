"use client"

import type { Picture, TabCarousel } from "@/app/interfaces/picture"
import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, useEffect, useState } from "react"
import { OldCarousel } from "./carousel"

export function CarouselTablist(): JSX.Element {
  const programmingPictures: Picture[] = [
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202311/eda_island/soldering.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/202311/eda_island/using_nipper.avif",
    },
    {
      alt: "自分で作ったロボットの完成！",
      src: "/202311/sandankyo/peace_sign.avif",
    },
    {
      alt: "親子で協力しながらプログラミング！上手に動くかな？",
      src: "/202311/wedding/mother_check.avif",
    },
    {
      alt: "最終日のロボサバ大会！優勝目指そう！",
      src: "/202311/wedding/switch_on.avif",
    },
  ] as const
  const eventPictures: Picture[] = [
    {
      alt: "マリンスポーツで楽しい思い出！",
      src: "/202306/eda_island/mega_sap_group.avif",
    },
    {
      alt: "手作りのオリーブオイル、最初はまだ赤い！",
      src: "/202311/eda_island/olive_pouring.avif",
    },
    {
      alt: "三段峡の自然に興味津々！",
      src: "/202206/sandankyo/writing.avif",
    },
    {
      alt: "蝶ネクタイをつけて入場！ 素敵！",
      src: "/202311/wedding/boys_march.avif",
    },
    {
      alt: "ブーケで使うお花選び、どれにするか決まったかな？",
      src: "/202311/wedding/select_flowers.avif",
    },
    {
      alt: "ラッピングも自分で挑戦！",
      src: "/202311/wedding/pouring_water.avif",
    },
  ] as const
  const tabCarousels: TabCarousel[] = [
    {
      title: "プログラミング体験",
      pictures: programmingPictures,
    },
    {
      title: "体験学習",
      pictures: eventPictures,
    },
  ] as const
  const [tab, setTab] = useState<string>(tabCarousels[0].title)

  return (
    <>
      <div role="tablist" className="gap-1 grid-cols-2 tabs">
        {tabCarousels.map((tabCarousel) => (
          <button
            key={tabCarousel.title}
            type="button"
            role="tab"
            onClick={() => setTab(tabCarousel.title)}
            className={`rounded-lg shadow-lg tab ${tab === tabCarousel.title ? "bg-teal-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>{tabCarousel.title}</strong>
          </button>
        ))}
      </div>
      {tabCarousels.map(
        (tabCarousel) =>
          tab === tabCarousel.title && (
            <div key={tabCarousel.title}>
              <OldCarousel pictures={tabCarousel.pictures} />
            </div>
          ),
      )}
    </>
  )
}

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>(schedules[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBusy) {
        if (tab === schedules[0].alt) {
          setTab(schedules[1].alt)
        }
        if (tab === schedules[1].alt) {
          setTab(schedules[2].alt)
        }
        if (tab === schedules[2].alt) {
          setTab(schedules[0].alt)
        }
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <section className="gap-4 grid max-w-lg mx-auto text-center">
      <div role="tablist" className="gap-2 tabs">
        {schedules.map((schedule) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(schedule.alt)}
            className={`rounded-lg shadow-lg tab ${tab === schedule.alt ? "bg-teal-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>{schedule.alt}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule) =>
          tab === schedule.alt && (
            <div
              key={schedule.alt}
              role="tabpanel"
              onMouseEnter={() => setIsBusy(true)}
              onMouseLeave={() => setIsBusy(false)}
              onTouchStart={() => setIsBusy(true)}
              onTouchEnd={() => setIsBusy(false)}
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl sm:h-80"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong className="absolute bg-teal-400 left-0 px-2 py-1 text-white text-xs top-0">
                  {schedule.alt}
                </strong>
                <h3 className="card-title mx-auto text-xl whitespace-pre sm:whitespace-normal">
                  {schedule.title.am}
                  <br />
                  {schedule.title.pm}
                </h3>
                <strong className="text-sm">
                  {schedule.date.year}年{schedule.date.month}月
                  {schedule.date.day}
                  日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
                </strong>
                <div className="card-actions justify-center">
                  {schedule.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline bg-base-200 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
      )}
    </section>
  )
}
