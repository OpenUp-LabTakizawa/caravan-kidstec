import { SlideUp } from "@/app/components/animation/slideUp"
import { Banner } from "@/app/components/layout/banner"
import { Carousel } from "@/app/components/layout/carousel"
import { ReviewCarousel } from "@/app/components/layout/carousel"
import { Video } from "@/app/components/media/video"
import type { Panel } from "@/app/interfaces/picture"
import { AREA, TOKYO_CHIBA } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Home(): React.JSX.Element {
  const techPanels: Panel[] = [
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202206/eda_island/soldering.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/202311/eda_island/using_nipper.avif",
      height: "h-12",
    },
    {
      alt: "自分で作った\nロボットの完成！",
      src: "/202311/sandankyo/peace_sign.avif",
    },
    {
      alt: "親子で協力しながら\nプログラミング！\n上手に動くかな？",
      src: "/202311/wedding/mother_check.avif",
      height: "h-20",
    },
    {
      alt: "最終日のロボサバ大会！\n優勝目指そう！",
      src: "/202311/wedding/switch_on.avif",
      height: "h-20",
    },
  ] as const

  const naturePanels: Panel[] = [
    {
      alt: "マリンスポーツで楽しい思い出！",
      src: "/202306/eda_island/mega_sap_group.avif",
    },
    {
      alt: "手作りのオリーブオイル、\n最初はまだ赤い！",
      src: "/202311/eda_island/olive_pouring.avif",
    },
    {
      alt: "三段峡の自然に\n興味津々！",
      src: "/202306/sandankyo/writing.avif",
    },
  ] as const

  const weddingPanels: Panel[] = [
    {
      alt: "蝶ネクタイをつけて入場！　素敵！",
      src: "/202311/wedding/boys_march.avif",
    },
    {
      alt: "ブーケで使うお花選び、\nどれにするか\n決まったかな？",
      src: "/202311/wedding/select_flowers.avif",
      height: "h-20",
    },
    {
      alt: "ラッピングも\n自分で挑戦！",
      src: "/202311/wedding/pouring_water.avif",
      height: "h-20",
    },
  ] as const

  return (
    <article className="grid gap-6 pb-4 text-base text-center">
      <Banner />
      <Carousel />
      <section className="p-4 text-center">
        <SlideUp className="pb-4">
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={1000}
            height={1000}
            alt="こどもテックキャラバン"
            className="w-full"
          />
        </SlideUp>
        <div className="font-bold grid gap-4 leading-7 tracking-[.29em] sm:col-span-2">
          <p>
            自然豊かな環境を感じる
            <br className="sm:hidden" />
            アクティビティと
            <br />
            ロボット製作とプログラミングを
            <br className="sm:hidden" />
            楽しく学びます。
          </p>
          <p>
            最終日には学んだ知識を使って
            <br />
            ロボットを動かす
            <Link
              href="https://robosava.jp/"
              target="_blank"
              className="link text-sky-400"
            >
              ロボサバ大会
            </Link>
            で<br className="sm:hidden" />
            仲間と競います！
          </p>
          <p>
            最初はプログラミングも
            <br className="sm:hidden" />
            わからない子でも、
            <br />
            ロボットの動きをコントロールする
            <br />
            驚きや楽しさに夢中になります。
          </p>
          <p>女の子でも大丈夫です！</p>
          <p>
            そして、身近に広島の豊かな自然が
            <br />
            あふれていることに驚くはずです。
          </p>
          <p>
            <span className="text-orange-400">楽しむ、学ぶ、競う</span>
            を
            <br />
            満喫するイベントです！
          </p>
        </div>
      </section>
      <Link href={AREA.href + TOKYO_CHIBA.href}>
        <Image
          src="/202410_event_banner.avif"
          width={1000}
          height={1000}
          alt="イベント詳細はこちら"
          className="w-full"
        />
      </Link>
      <section className="gap-2 grid grid-cols-2">
        <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-3xl text-orange-400">
          プログラミング体験
        </h2>
        <PanelTile panels={techPanels} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <h2 className="col-span-2 font-bold font-zenMaruGothic text-3xl text-teal-400">
          自然学習
        </h2>
        <PanelTile panels={naturePanels} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <h2 className="col-span-2 font-bold font-zenMaruGothic text-3xl text-rose-400">
          結婚式体験
        </h2>
        <PanelTile panels={weddingPanels} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
    </article>
  )
}

function PanelTile({
  panels,
}: Readonly<{ panels: Panel[] }>): React.JSX.Element {
  return (
    <>
      {panels.map((item, index) => (
        <figure key={item.alt} className={`${index === 0 ? "col-span-2" : ""}`}>
          <Image
            loader={cloudfrontLoader}
            src={item.src}
            height={1000}
            width={1000}
            alt={item.alt}
            className="w-full"
          />
          <figcaption
            className={`bg-amber-50 font-bold grid items-center text-center whitespace-pre${item.height ? ` ${item.height}` : ""}`}
          >
            {item.alt}
          </figcaption>
        </figure>
      ))}
    </>
  )
}
