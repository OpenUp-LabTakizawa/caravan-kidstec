import { FadeInUp } from "@/app/components/animation/fadeInUp"
import { Carousel, ReviewCarousel } from "@/app/components/layout/carousel"
import { Video } from "@/app/components/media/video"
import type { Panel } from "@/app/interfaces/picture"
import { EVENT, TOKYO_CHIBA } from "@/app/lib/constant"
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
      alt: "蝶ネクタイをつけて入場！ 素敵！",
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

  const sections = [
    {
      title: "プログラミング体験",
      color: "text-orange-400",
      panels: techPanels,
    },
    {
      title: "自然学習",
      color: "text-teal-400",
      panels: naturePanels,
    },
    {
      title: "結婚式体験",
      color: "text-rose-400",
      panels: weddingPanels,
    },
  ] as const

  return (
    <article className="gap-6 grid pb-4 text-base text-center">
      <section>
        <Carousel />
      </section>
      <section className="gap-4 grid text-center">
        <FadeInUp>
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={1000}
            height={1000}
            alt="こどもテックキャラバン"
            className="w-full px-1"
          />
        </FadeInUp>
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
      <Link href={EVENT.href + TOKYO_CHIBA.href}>
        <Image
          src="/202410_event_banner.avif"
          width={1000}
          height={1000}
          alt="イベント詳細はこちら"
          className="w-full"
        />
      </Link>
      {sections.map((section) => (
        <section key={section.title} className="gap-2 grid grid-cols-2">
          <h2
            className={`col-span-2 font-bold font-zenMaruGothic text-3xl ${section.color}`}
          >
            {section.title}
          </h2>
          <PanelTile panels={section.panels} />
        </section>
      ))}
      <section id="review" className="gap-4 grid">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video
        src="https://dk75m1tgsot44.cloudfront.net/movie/202311"
        controls={false}
      />
      <section className="gap-4 grid relative">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={1000}
          height={1000}
          className="absolute bottom-0 max-h-48 object-contain opacity-10 -z-10"
        />
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          わたしたちの想い
        </h2>
        <div className="font-bold gap-4 grid text-sm">
          <p>
            このイベントでは新しい人やものとの出会いや、
            <br />
            初めての体験、わくわくするような瞬間がきっとあります。
          </p>
          <p>
            いままで気づかなかった
            <br />
            新しい発見もあるかもしれません。
          </p>
          <p>
            みなさんの可能性が広がり、
            <br />
            新しい何かを見つけられることを願っています。
          </p>
        </div>
      </section>
    </article>
  )
}

function PanelTile({ panels }: Readonly<{ panels: Panel[] }>): JSX.Element {
  return (
    <>
      {panels.map((panel) => (
        <figure key={panel.alt} className="first-of-type:col-span-2">
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
