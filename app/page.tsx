import { SlideUp } from "@/app/components/animation/slideUp"
import { Banner } from "@/app/components/layout/banner"
import { Carousel, ReviewCarousel } from "@/app/components/layout/carousel"
import { Video } from "@/app/components/media/video"
import type { Panel } from "@/app/interfaces/picture"
import { AREA, TOKYO_CHIBA } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function Home(): JSX.Element {
  const techPanels: Panel[] = [
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202311/eda_island/soldering.avif",
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
      src: "/202206/sandankyo/writing.avif",
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
        <div className="font-bold grid gap-4 leading-7 tracking-[.29em]">
          <p>
            プログラミング体験と
            <br />
            体験学習をかけあわせた
            <br />
            親子参加型のイベントです。
          </p>
          <p>
            プログラミング体験は、
            <br />
            ロボットを作って、
            <br />
            自分で動かせるように！
          </p>
          {/* <p>
            最終日は大会を開き、
            <br />
            みんなで競います。
          </p> */}
          <p>
            体験学習は毎回変わります。
            <br />
            過去には自然学習や結婚式体験で
            <br />
            楽しく学んできました。
          </p>
          <p>
            <span className="text-orange-400">楽しく学び、楽しく遊び、</span>
            <br />
            親子でたくさんの経験と
            <br />
            思い出を作りましょう！
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
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202311" />
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          わたしたちの想い
        </h2>
        <div className="font-bold grid gap-4 text-sm">
          <p>
            このプロジェクトでは
            <br />
            様々な人との出会いや、
            <br />
            今までにない体験等、
            <br />
            心沸き立つ瞬間があります。
          </p>
          <p>
            また、「キャラバン」を通じて、
            <br />
            家族や仲間と一緒に感動体験を
            <br />
            共有出来る新しい発見もあります。
          </p>
          <p>
            このイベントが皆様の
            <br />
            新しい可能性を開き、
            <br />
            違う景色が見えると幸いです。
          </p>
        </div>
      </section>
    </article>
  )
}

function PanelTile({ panels }: Readonly<{ panels: Panel[] }>): JSX.Element {
  return (
    <>
      {panels.map((panel, index) => (
        <figure
          key={panel.alt}
          className={`${index === 0 ? "col-span-2" : ""}`}
        >
          <Image
            loader={cloudfrontLoader}
            src={panel.src}
            height={1000}
            width={1000}
            alt={panel.alt}
            className="w-full"
          />
          <figcaption
            className={`bg-amber-50 font-bold grid items-center text-center whitespace-pre${panel.height ? ` ${panel.height}` : ""}`}
          >
            {panel.alt}
          </figcaption>
        </figure>
      ))}
    </>
  )
}
