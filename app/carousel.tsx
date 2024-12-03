"use client"

import { OpacityZero } from "@/app/components/animation/opacityZero"
import type { Indicator } from "@/app/interfaces/indicator"
import type { Picture } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import { cloudfrontLoader } from "@/app/lib/loader"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { type JSX, type RefObject, useEffect, useRef, useState } from "react"

export function TopCarousel(): JSX.Element {
  const topPictures: Picture[] = [
    {
      alt: "自然学習",
      src: "/image/hiroshima/202407/hiroshima_university/capture_insect.avif",
    },
    {
      alt: "ロボサバ大会",
      src: "/image/hiroshima/202407/wedding/enjoy_robot_with_family.avif",
    },
    {
      alt: "結婚式体験",
      src: "/image/hiroshima/202407/wedding/bubbles_entrance_square.avif",
    },
    {
      alt: "ブーケ作成",
      src: "/image/hiroshima/202311/wedding/select_flowers.avif",
    },
    {
      alt: "プログラミング",
      src: "/image/hiroshima/202407/wedding/typing_with_mother.avif",
    },
    {
      alt: "サップ体験",
      src: "/image/hiroshima/202206/eda_island/sea_circle.avif",
    },
    {
      alt: "サシェ体験",
      src: "/image/kanto/202410/tgn/sashie_pick.avif",
    },
  ] as const
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const imagesRef: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    for (const node of [...images.values()].reverse()) {
      const newImage = node.cloneNode(true)
      carousel.prepend(newImage)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    const imageNode: HTMLImageElement = images.get(
      topPictures[0].alt,
    ) as HTMLImageElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += imageNode.clientWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    const imageNode: HTMLImageElement = images.get(
      topPictures[0].alt,
    ) as HTMLImageElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = imageNode.clientWidth * 2

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer) {
        for (const node of images.values()) {
          const newImage = node.cloneNode(true)
          carousel.append(newImage)
          // TODO: Safari works correctly with remove()
          // carousel.firstChild?.remove()
        }
      }
      // TODO: Safari works correctly with remove()
      // if (scrollLeft < buffer) {
      //   for (const node of [...images.values()].reverse()) {
      //     const newImage = node.cloneNode(true)
      //     carousel.prepend(newImage)
      //     carousel.lastChild?.remove()
      //   }
      // }
    }, 100)
  }

  return (
    <>
      <div
        ref={carouselRef}
        className="aspect-square flex overflow-x-scroll rounded-2xl scroll-smooth shadow-lg snap-mandatory snap-x w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
        style={{ scrollbarWidth: "none" }}
      >
        {topPictures.map((picture, index) => (
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
            width={256}
            height={256}
            alt={picture.alt}
            priority={index === 0}
            className="flex-none snap-start w-full"
          />
        ))}
      </div>
      <Attention />
    </>
  )
}

export function IndicatorCarousel(): JSX.Element {
  const programmingPictures: Picture[] = [
    {
      alt: "お父さんとはんだ確認中…",
      src: "/image/kanto/202410/kurkku_fields/pointing_ichigodake.avif",
    },
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/image/hiroshima/202407/hiroshima_university/soldering.avif",
    },
    {
      alt: "最終日のロボサバ大会！優勝目指そう！",
      src: "/image/hiroshima/202407/wedding/watch_robot_move.avif",
    },
    {
      alt: "ロボットが上手く動くコツを伝授！",
      src: "/image/hiroshima/202407/wedding/teaching.avif",
    },
    {
      alt: "ロボサバ大会に挑戦！上手に動くかな？",
      src: "/image/hiroshima/202407/wedding/put_robot_on_course.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/image/kanto/202410/kurkku_fields/assemble_insect.avif",
    },
  ] as const
  const eventPictures: Picture[] = [
    {
      alt: "採れたてのお魚に興味津々！",
      src: "/image/hiroshima/202407/eda_island/holding_fish.avif",
    },
    {
      alt: "広島大学のチェックポイント確認中…",
      src: "/image/hiroshima/202407/hiroshima_university/checking_course.avif",
    },
    {
      alt: "クルックフィールズで芋掘り体験！",
      src: "/image/kanto/202410/kurkku_fields/digging_potato.avif",
    },
    {
      alt: "力を合わせて、レイのブログに挑戦だ！",
      src: "/image/kanto/202410/openup/watch_phone.avif",
    },
    {
      alt: "ブーケを持って入場！",
      src: "/image/hiroshima/202311/wedding/wedding_bouquet.avif",
    },
    {
      alt: "ケーキ作りも自分で挑戦！",
      src: "/image/hiroshima/202407/wedding/pastry_chef_boy.avif",
    },
  ] as const
  const pictures: Picture[] = [...programmingPictures, ...eventPictures]
  const indicators: Indicator[] = [
    { title: "プログラミング体験", alt: programmingPictures[0].alt },
    { title: "体験学習", alt: eventPictures[0].alt },
  ] as const
  const carouselRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const imagesRef: RefObject<Map<string, HTMLImageElement>> = useRef<
    Map<string, HTMLImageElement>
  >(new Map<string, HTMLImageElement>())
  const [activeTab, setActiveTab] = useState<string>(programmingPictures[0].alt)
  const [isBusy, setIsBusy] = useState<boolean>(false)
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    for (const node of [...images.values()].reverse()) {
      const newImage = node.cloneNode(true)
      carousel.prepend(newImage)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += imageNode.clientWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function onClick(indicator: Indicator): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    const imageWidth: number = imageNode.clientWidth

    if (indicator.alt === activeTab) {
      return
    }

    if (indicator.alt === programmingPictures[0].alt) {
      carousel.scrollLeft = imageWidth * pictures.length
    } else if (indicator.alt === eventPictures[0].alt) {
      carousel.scrollLeft =
        imageWidth * (pictures.length + programmingPictures.length)
    }
  }

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const images: Map<string, HTMLImageElement> = imagesRef.current as Map<
      string,
      HTMLImageElement
    >
    const imageNode: HTMLImageElement = images.get(
      pictures[0].alt,
    ) as HTMLImageElement
    // imageWidth is floating point so that it should be minus 1
    const imageWidth: number = imageNode.clientWidth - 1
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = imageWidth * 2

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (
        scrollLeft % (imageWidth * pictures.length) <
        imageWidth * programmingPictures.length
      ) {
        setActiveTab(programmingPictures[0].alt)
      } else if (
        imageWidth * programmingPictures.length <=
        scrollLeft % (imageWidth * pictures.length)
      ) {
        setActiveTab(eventPictures[0].alt)
      }

      if (maxScrollLeft < scrollLeft + buffer) {
        for (const node of images.values()) {
          const newImage = node.cloneNode(true)
          carousel.append(newImage)
          // TODO: Safari works correctly with remove()
          // carousel.firstChild?.remove()
        }
      }
      // TODO: Safari works correctly with remove()
      // if (scrollLeft < buffer) {
      //   for (const node of [...images.values()].reverse()) {
      //     const newImage = node.cloneNode(true)
      //     carousel.prepend(newImage)
      //     carousel.lastChild?.remove()
      //   }
      // }
    }, 100)
  }

  return (
    <>
      <div className="gap-1 grid grid-cols-2 px-1 text-sm sm:text-base">
        {indicators.map((indicator) => (
          <button
            key={indicator.title}
            type="button"
            onClick={() => onClick(indicator)}
            className={`border-b-4 duration-300 font-bold py-1 rounded-lg shadow-xl ${indicator.alt === activeTab ? "bg-teal-400 border-teal-700 hover:border-b-2 hover:translate-y-0.5" : "bg-gray-100 border-gray-400 hover:border-b-2 hover:translate-y-0.5"}`}
          >
            {indicator.title}
          </button>
        ))}
      </div>
      <div
        ref={carouselRef}
        className="aspect-square flex overflow-x-scroll rounded-2xl scroll-smooth shadow-lg snap-mandatory snap-x w-full"
        onMouseEnter={() => setIsBusy(true)}
        onMouseLeave={() => setIsBusy(false)}
        onTouchStart={() => setIsBusy(true)}
        onTouchEnd={() => setIsBusy(false)}
        onScroll={() => ScrollEvent()}
        style={{ scrollbarWidth: "none" }}
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
            width={256}
            height={256}
            alt={picture.alt}
            className="flex-none snap-start w-full"
          />
        ))}
      </div>
      <Attention />
    </>
  )
}

export function Attention(): JSX.Element {
  return (
    <p className="text-center sm:text-sm">
      ※&nbsp;写真は過去開催時のものです。
      <br className="sm:hidden" />
      体験学習はイベントごとに異なります。
    </p>
  )
}

export function ReviewCarousel(): JSX.Element {
  const reviews: Review[] = [
    {
      description:
        "子供はこの3日間でお友達もでき、\nとても楽しかったようで\n「こどもテックキャラバン今度は\nいつあるの？また行けるの？」と\n言っています。\nまたLEDライトもとても気に入り、\n「作ってくれてありがとう！」を\n連発しています。\n親の私達も謎解きを\n他の親御さんと一緒に\n本気で挑んだりと、\n予想以上に楽しいひと時でした。",
      areaAndUser: "第1回 関東 小2",
    },
    {
      description:
        "このような親子で学べる体験\nイベントの開催をしていただき\nありがとうございました。\n自分のやりたいことを\nみつけるヒントや体験、\n学びを通して様々な\n気づきがありました。\n学校や習い事では\n経験できない事がたくさんあり\n社会全体で日本の将来を\n考える取り組みをされていて\n凄いなと思います。",
      areaAndUser: "第1回 関東 小2、小3",
    },
    {
      description:
        "非常に充実したイベントでした。\n特にプログラミングでは、\n親の力を借りず、子供自身で\nスタッフの方の助言をもらい\n試行錯誤し、最終的に、\n目的を達成し、貴重な成功体験を\n経験させていただき、\n子供たちは今回のことで\n大変自信が付き、\nたくさんの学びがありました。\nありがとうございました。",
      areaAndUser: "第1回 関東 小2、小5",
    },
    {
      description:
        "3日間だけではなく、\nもっと長くやりたい。\n\nロボサバ大会をもっとやりたい。\n大人の大会もやってほしい。\nアドバイスや、\n応援する側にもなってみたい。\n\nプログラミングだけでなく、\n様々な体験もできて、\nとても楽しかった。\n絶対また参加したい。",
      areaAndUser: "第1回 関東 小2、小5",
    },
    {
      description:
        "3日間とも内容が非常に濃く、\n親子とも楽しみながら\n学ぶことができました。\n最終日の大会やチャペル入場では\n涙ぐんでしまい、まさかこんな\n感動があるとは参加を決めた\n時には思いもよりませんでした。\n本当に無料で良かったの\nでしょうか…。\n一緒に参加させてもらった5歳の\n弟も、次はロボットつくりたい！\nと意気込んでおります。",
      areaAndUser: "第1回 関東 小3",
    },
    {
      description:
        "親子共に楽しめるイベントを\n行っていただき\nありがとうございます。\n3日間を通じてほかのお友達や\nスタッフの方とも親近感を持って\n楽しく過ごせました。\n\nまた機会があれば、\n今回は年齡制限で\n参加できなかった\n兄弟も含めて参加させて\nもらいたいと思います。",
      areaAndUser: "第1回 関東 小5",
    },
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
  let timeoutId: globalThis.Timer

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviews: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    for (const node of [...reviews.values()].reverse()) {
      const newReview = node.cloneNode(true)
      carousel.prepend(newReview)
    }
  }, [])

  useEffect(() => {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviewsNode: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    const reviewNode: HTMLDivElement = reviewsNode.get(
      reviews[0].description,
    ) as HTMLDivElement
    const interval = setInterval(() => {
      if (!isBusy) {
        carousel.scrollLeft += reviewNode.clientWidth
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  function ScrollEvent(): void {
    const carousel: HTMLDivElement = carouselRef.current as HTMLDivElement
    const reviewsNode: Map<string, HTMLDivElement> = reviewsRef.current as Map<
      string,
      HTMLDivElement
    >
    const reviewNode: HTMLDivElement = reviewsNode.get(
      reviews[0].description,
    ) as HTMLDivElement
    const maxScrollLeft: number = carousel.scrollWidth - carousel.clientWidth
    const scrollLeft: number = carousel.scrollLeft
    const buffer: number = reviewNode.clientWidth * 2

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (maxScrollLeft < scrollLeft + buffer) {
        for (const node of reviewsNode.values()) {
          const newReview = node.cloneNode(true)
          carousel.append(newReview)
          // TODO: Safari works correctly with remove()
          // carousel.firstChild?.remove()
        }
      }
      if (scrollLeft < buffer) {
        for (const node of [...reviewsNode.values()].reverse()) {
          const newReview = node.cloneNode(true)
          carousel.prepend(newReview)
          // TODO: Safari works correctly with remove()
          // carousel.lastChild?.remove()
        }
      }
    }, 100)
  }

  return (
    <div
      ref={carouselRef}
      className="flex gap-2 overflow-x-scroll relative scroll-smooth snap-mandatory snap-x w-full"
      onMouseEnter={() => setIsBusy(true)}
      onMouseLeave={() => setIsBusy(false)}
      onTouchStart={() => setIsBusy(true)}
      onTouchEnd={() => setIsBusy(false)}
      onScroll={() => ScrollEvent()}
      style={{ scrollbarWidth: "none" }}
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
          className="bg-blue-100 flex flex-col flex-none justify-between m-2 p-2 rounded-2xl shadow-lg snap-center text-sm w-56"
        >
          <p className="whitespace-pre">{review.description}</p>
          <p className="flex gap-1 items-center justify-center">
            <UserCircleIcon className="size-6 text-rose-400" />
            {review.areaAndUser}
          </p>
        </div>
      ))}
    </div>
  )
}

function ScrollRightHint(): JSX.Element {
  return (
    <OpacityZero className="absolute bg-black/60 left-1/2 pt-20 text-white top-1/2 z-10 -translate-y-1/2">
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <ChevronRightIcon className="scroll-right size-20" />
      <span className="px-2 text-xs">右スクロール</span>
    </OpacityZero>
  )
}
