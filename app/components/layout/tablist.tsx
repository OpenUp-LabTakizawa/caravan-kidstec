"use client"

import type { Picture, TabCarousel } from "@/app/interfaces/picture"
import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, useState } from "react"
import { Carousel } from "./carousel"

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
              <Carousel pictures={tabCarousel.pictures} />
            </div>
          ),
      )}
    </>
  )
}

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <div className="sm:hidden">
      <div role="tablist" className="gap-2 tabs">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`rounded-lg shadow-lg tab ${tab === `Day ${index + 1}` ? "bg-teal-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>Day&nbsp;{index + 1}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong className="absolute bg-teal-400 left-0 px-2 py-1 text-white text-xs top-0">
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-xl whitespace-pre">
                  {schedule.title}
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
    </div>
  )
}
