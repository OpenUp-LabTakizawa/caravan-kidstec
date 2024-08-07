"use client"

import { OpacityZero } from "@/app/components/animation/opacityZero"
import type { Picture } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"

export function Carousel(): JSX.Element {
  const pictures: Picture[] = [
    {
      alt: "プログラミング体験",
      src: "/202206/camps/basic_programming.avif",
    },
    {
      alt: "サップ体験",
      src: "/202206/eda_island/sea_circle.avif",
    },
    {
      alt: "オリーブ体験",
      src: "/202311/eda_island/olive_smile.avif",
    },
    {
      alt: "自然学習",
      src: "/202311/sandankyo/check_a_leaf.avif",
    },
    {
      alt: "ブーケ作成",
      src: "/202311/wedding/flower_arrangement.avif",
    },
    {
      alt: "結婚式体験",
      src: "/202311/wedding/wedding_bouquet.avif",
    },
  ] as const

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)
  let slide = 0

  useEffect(() => {
    if (isMouseEnter) {
      return
    }
    const carousel: HTMLDivElement = ref.current as HTMLDivElement
    const scrollWidth: number = carousel.scrollWidth
    const interval = window.setInterval(() => {
      if (scrollWidth <= slide) {
        slide = 0
      } else {
        slide += scrollWidth / pictures.length
      }
      carousel.scrollLeft = slide
    }, 3000)
    return () => window.clearInterval(interval)
  })

  return (
    <>
      <div
        ref={ref}
        className="carousel rounded-2xl shadow-lg w-full"
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.alt}
            loader={cloudfrontLoader}
            src={picture.src}
            height={1000}
            width={1000}
            alt={picture.alt}
            className="aspect-square carousel-item object-cover w-full"
          />
        ))}
      </div>
      <p className="text-center">※自然体験は開催時期により異なります</p>
    </>
  )
}

export function ReviewCarousel(): JSX.Element {
  const reviews: Review[] = [
    {
      description:
        "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
      areaAndUser: "第1回 広島 小4",
    },
    {
      description:
        "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
      areaAndUser: "第1回 広島 小5",
    },
    {
      description:
        "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
      areaAndUser: "第2回 広島 小5",
    },
    {
      description:
        "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
      areaAndUser: "第2回 広島 小5、小6",
    },
    {
      description:
        "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
      areaAndUser: "第2回 広島 小6",
    },
    {
      description:
        "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
      areaAndUser: "第2回 広島 小5、中1",
    },
    {
      description:
        "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
      areaAndUser: "第3回 広島 小4",
    },
    {
      description:
        "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
      areaAndUser: "第3回 広島 小5",
    },
    {
      description:
        "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
      areaAndUser: "第3回 広島 小4、小6",
    },
    {
      description:
        "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
      areaAndUser: "第3回 広島 小4、中2",
    },
    {
      description: "本当に素敵な体験を\nすることができました。",
      areaAndUser: "第4回 広島 小5",
    },
    {
      description:
        "最初から最後まで子供自身が\n「やれた!できた!」の気持ちを\n少しでも感じられるように\n応援&フォローをしてくださり、\n本当にありがとうございました。\n特にハンダ付け、プロの技術の\nおかげでふさがってしまった穴を\nあけて下さり「自分のもの」で\n挑戦することができたことに\nとても感謝しています。\nお料理もすごくおいしかったです。\n幸せになりました！",
      areaAndUser: "第4回 広島 小2、小5",
    },
    {
      description:
        "とても素晴らしい体験を\nありがとうございました。\n\nまた次回も\n参加したいと思います。\n\n皆様お疲れ様でした。",
      areaAndUser: "第4回 広島 小5、中2",
    },
  ] as const
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const reviewsRef: RefObject<Map<string, HTMLDivElement>> = useRef<
    Map<string, HTMLDivElement>
  >(new Map<string, HTMLDivElement>())
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviewWidth = 240
    const interval = setInterval(() => {
      if (!isMouseEnter && carousel.classList.contains("observing")) {
        carousel.scrollLeft += reviewWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("observing")
        } else {
          entry.target.classList.remove("observing")
        }
      }
    })
    observer.observe(carouselRef.current as HTMLDivElement)
    return () => observer.disconnect()
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviews = reviewsRef.current as Map<string, HTMLDivElement>
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft = carousel.scrollLeft
    const buffer = 100

    if (maxScrollLeft < scrollLeft + buffer) {
      for (const node of reviews.values()) {
        const newReviews = node.cloneNode(true)
        carousel.append(newReviews)
      }
    }
    if (scrollLeft < buffer) {
      for (const node of [...reviews.values()].reverse()) {
        const newReviews = node.cloneNode(true)
        carousel.prepend(newReviews)
      }
    }
  }

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center relative space-x-4"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      onScroll={() => ScrollEvent()}
    >
      <ScrollRightHint />
      {reviews.map((review) => (
        <div
          key={review.description}
          ref={(node: HTMLDivElement) => {
            reviewsRef.current?.set(review.description, node)
            return () => {
              reviewsRef.current?.delete(review.description)
            }
          }}
          className="bg-blue-100 carousel-item content-between grid m-2 p-2 rounded-2xl shadow-lg w-56"
        >
          <p className="my-auto text-sm whitespace-pre">{review.description}</p>
          <p className="flex h-fit items-center justify-center text-sm whitespace-pre">
            <UserCircleIcon className="text-rose-400 size-6 mr-1" />
            {review.areaAndUser}
          </p>
        </div>
      ))}
    </div>
  )
}

export function ScheduleCarousel({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  return (
    <div className="carousel hidden relative sm:flex">
      <ScrollRightHint />
      {schedules.map((schedule, index) => (
        <div
          key={schedule.alt}
          className="card carousel-item m-2 shadow-lg w-60"
        >
          <Image
            loader={cloudfrontLoader}
            src={schedule.src}
            width={1000}
            height={1000}
            alt={schedule.alt}
            className="h-60 object-cover rounded-t-2xl"
          />
          <div className="bg-amber-50 card-body p-0 py-8 relative rounded-b-2xl">
            <strong
              className={`absolute left-0 px-2 py-1 text-white text-xs top-0 ${schedule.color}`}
            >
              Day&nbsp;{index + 1}
            </strong>
            <h3 className="card-title mx-auto text-lg whitespace-pre">
              {schedule.title}
            </h3>
            <strong className="text-sm">
              {schedule.date.year}年{schedule.date.month}月{schedule.date.day}
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
      ))}
    </div>
  )
}

function ScrollRightHint(): JSX.Element {
  return (
    <OpacityZero className="absolute bg-black/60 left-1/2 pt-20 text-white top-1/2 z-10 -translate-y-1/2 ">
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <span className="px-2 text-xs">右スクロール</span>
    </OpacityZero>
  )
}
