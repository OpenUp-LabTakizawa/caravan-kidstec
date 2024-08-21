"use client"

import type { Indicator } from "@/app/interfaces/indicator"
import type { Picture } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import { cloudfrontLoader } from "@/app/lib/loader"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"

export function Carousel(): JSX.Element {
  const pictures: Picture[] = [
    {
      alt: "自然学習",
      src: "/202407/hiroshima_university/capture_insect.avif",
    },
    {
      alt: "ロボサバ大会",
      src: "/202407/wedding/enjoy_robot_with_family.avif",
    },
    {
      alt: "結婚式体験",
      src: "/202407/wedding/bubbles_entrance.avif",
    },
    {
      alt: "ブーケ作成",
      src: "/202311/wedding/select_flowers.avif",
    },
    {
      alt: "プログラミング",
      src: "/202407/wedding/typing_with_mother.avif",
    },
  ] as const

  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const imagesRef: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())
  const [isBusy, setIsBusy] = useState<boolean>(false)

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images = imagesRef.current as Map<string, HTMLImageElement>
    for (const node of [...images.values()].reverse()) {
      const newImage = node.cloneNode(true)
      carousel.prepend(newImage)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += carousel.scrollWidth / (pictures.length * 2)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images = imagesRef.current as Map<string, HTMLImageElement>
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft = carousel.scrollLeft
    const buffer = carousel.scrollWidth / 5

    if (
      scrollLeft + buffer - 10 < maxScrollLeft &&
      maxScrollLeft < scrollLeft + buffer
    ) {
      for (const node of images.values()) {
        const newImage = node.cloneNode(true)
        carousel.append(newImage)
        carousel.firstChild?.remove()
      }
    }
    if (buffer - 10 < scrollLeft && scrollLeft < buffer) {
      for (const node of [...images.values()].reverse()) {
        const newImage = node.cloneNode(true)
        carousel.prepend(newImage)
        carousel.lastChild?.remove()
      }
    }
  }

  return (
    <>
      <div
        ref={carouselRef}
        className="carousel rounded-2xl shadow-lg w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.alt}
            ref={(node: HTMLImageElement) => {
              imagesRef.current?.set(picture.alt, node)
              return () => {
                imagesRef.current?.delete(picture.alt)
              }
            }}
            loader={cloudfrontLoader}
            src={picture.src}
            height={1000}
            width={1000}
            alt={picture.alt}
            className="aspect-square carousel-item object-cover w-full"
          />
        ))}
      </div>
      <p className="text-center text-xs">
        ※&nbsp;写真は過去開催時のものです。
        <br />
        体験学習はイベントごとに異なります。
      </p>
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
  const [isBusy, setIsBusy] = useState<boolean>(false)

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviews = reviewsRef.current as Map<string, HTMLDivElement>
    for (const node of [...reviews.values()].reverse()) {
      const newReview = node.cloneNode(true)
      carousel.prepend(newReview)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += carousel.scrollWidth / (reviews.length * 2)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviews = reviewsRef.current as Map<string, HTMLDivElement>
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft = carousel.scrollLeft
    const buffer = carousel.scrollWidth / 5

    if (
      scrollLeft + buffer - 10 < maxScrollLeft &&
      maxScrollLeft < scrollLeft + buffer
    ) {
      for (const node of reviews.values()) {
        const newReview = node.cloneNode(true)
        carousel.append(newReview)
        carousel.firstChild?.remove()
      }
    }
    if (buffer - 10 < scrollLeft && scrollLeft < buffer) {
      for (const node of [...reviews.values()].reverse()) {
        const newReview = node.cloneNode(true)
        carousel.prepend(newReview)
        carousel.lastChild?.remove()
      }
    }
  }

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center relative space-x-4"
      onMouseEnter={() => setIsBusy(true)}
      onMouseLeave={() => setIsBusy(false)}
      onTouchStart={() => setIsBusy(true)}
      onTouchEnd={() => setIsBusy(false)}
      onScroll={() => ScrollEvent()}
    >
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

export function IndicatorCarousel(): JSX.Element {
  const programmingPictures: Picture[] = [
    {
      alt: "はんだ確認中…",
      src: "/202311/eda_island/check_solder.avif",
    },
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202407/eda_island/soldering.avif",
    },
    {
      alt: "最終日のロボサバ大会！優勝目指そう！",
      src: "/202407/wedding/watch_robot_move.avif",
    },
    {
      alt: "ロボットが上手く動くコツを伝授！",
      src: "/202407/wedding/teaching.avif",
    },
    {
      alt: "ロボサバ大会に挑戦！上手に動くかな？",
      src: "/202407/wedding/put_robot_on_course.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/202311/eda_island/using_nipper.avif",
    },
  ] as const
  const eventPictures: Picture[] = [
    {
      alt: "採れたてのお魚に興味津々！",
      src: "/202407/eda_island/holding_fish.avif",
    },
    {
      alt: "広島大学のチェックポイント確認中…",
      src: "/202407/hiroshima_university/checking_course.avif",
    },
    {
      alt: "広島大学で昆虫採集！",
      src: "/202407/hiroshima_university/insect_netting_boy.avif",
    },
    {
      alt: "手作りのオリーブオイル、最初はまだ赤い！",
      src: "/202311/eda_island/olive_pouring.avif",
    },
    {
      alt: "ブーケを持って入場！",
      src: "/202311/wedding/wedding_bouquet.avif",
    },
    {
      alt: "ケーキ作りも自分で挑戦！",
      src: "/202407/wedding/pastry_chef_boy.avif",
    },
  ] as const
  const pictures: Picture[] = [
    ...programmingPictures,
    ...eventPictures,
  ] as const
  const indicators: Indicator[] = [
    { title: "プログラミング体験", index: 11 },
    { title: "体験学習", index: 5 },
  ] as const
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const imagesRef: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())
  const [tab, setTab] = useState<string>(indicators[0].title)
  const [isBusy, setIsBusy] = useState<boolean>(false)

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images = imagesRef.current as Map<string, HTMLImageElement>
    for (const node of [...images.values()].reverse()) {
      const newImage = node.cloneNode(true)
      carousel.prepend(newImage)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += carousel.scrollWidth / (pictures.length * 2)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function onClick(indicator: Indicator): void {
    setTab(indicator.title)
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    carousel.scrollLeft =
      (carousel.scrollWidth / pictures.length / 2) * indicator.index
  }

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images = imagesRef.current as Map<string, HTMLImageElement>
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft = carousel.scrollLeft
    const buffer = carousel.scrollWidth / 4

    if (
      scrollLeft + buffer - 10 < maxScrollLeft &&
      maxScrollLeft < scrollLeft + buffer
    ) {
      for (const node of images.values()) {
        const newImage = node.cloneNode(true)
        carousel.append(newImage)
        carousel.firstChild?.remove()
      }
    }
    if (buffer - 10 < scrollLeft && scrollLeft < buffer) {
      for (const node of [...images.values()].reverse()) {
        const newImage = node.cloneNode(true)
        carousel.prepend(newImage)
        carousel.lastChild?.remove()
      }
    }
  }

  return (
    <>
      <div role="tablist" className="content-end gap-1 grid grid-cols-2">
        {indicators.map((indicator) => (
          <button
            key={indicator.title}
            type="button"
            role="tab"
            onClick={() => onClick(indicator)}
            className={`py-1 rounded-lg shadow-lg ${tab === indicator.title ? "bg-teal-400" : "bg-gray-100"}`}
          >
            <strong>{indicator.title}</strong>
          </button>
        ))}
      </div>
      <div
        ref={carouselRef}
        className="carousel rounded-2xl shadow-lg w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
      >
        {pictures.map((picture) => (
          <Image
            key={picture.alt}
            ref={(node: HTMLImageElement) => {
              imagesRef.current?.set(picture.alt, node)
              return () => {
                imagesRef.current?.delete(picture.alt)
              }
            }}
            loader={cloudfrontLoader}
            src={picture.src}
            height={1000}
            width={1000}
            alt={picture.alt}
            className="aspect-square carousel-item object-cover w-full"
            onMouseEnter={() => setIsBusy(true)}
            onMouseLeave={() => setIsBusy(false)}
            onTouchStart={() => setIsBusy(true)}
            onTouchEnd={() => setIsBusy(false)}
          />
        ))}
      </div>
      <p className="text-center text-xs">
        ※&nbsp;写真は過去開催時のものです。
        <br />
        体験学習はイベントごとに異なります。
      </p>
    </>
  )
}
