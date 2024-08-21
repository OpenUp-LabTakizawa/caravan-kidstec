import { ScaleUpDown } from "@/app/components/animation/scaleUpDown"
import {
  IndicatorCarousel,
  ReviewCarousel,
  TopCarousel,
} from "@/app/components/layout/carousel"
import { Video } from "@/app/components/media/video"
import { EVENT, TOKYO_CHIBA } from "@/app/lib/constant"
import { PlusIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function Home(): JSX.Element {
  return (
    <article className="gap-6 grid pb-4 text-base text-center">
      <ScaleUpDown>
        <Link href={EVENT.href + TOKYO_CHIBA.href}>
          <Image
            src="/202410_event_banner.avif"
            width={1000}
            height={1000}
            alt="イベント詳細はこちら"
            className="w-full"
          />
        </Link>
      </ScaleUpDown>
      <section>
        <TopCarousel />
      </section>
      <section className="gap-4 grid text-center">
        <div className="font-bold gap-4 grid leading-7 tracking-[.29em]">
          <span className="fade-in-up-timeline inline-block opacity-0">
            プログラミング体験と
            <br />
            体験学習をかけあわせた
            <br />
            親子参加型のイベントです。
          </span>
          <span className="fade-in-up-timeline inline-block opacity-0">
            プログラミング体験は、
            <br />
            ロボットを作って、
            <br />
            自分で動かせるように！
          </span>
          <span className="fade-in-up-timeline inline-block opacity-0">
            体験学習は毎回変わります。
            <br />
            過去には自然学習や結婚式体験で
            <br />
            楽しく学んできました。
          </span>
          <span className="fade-in-up-timeline inline-block opacity-0">
            <span className="text-orange-400">
              たくさん学び、たくさん遊び、
            </span>
            <br />
            親子で新しい発見や、
            <br />
            楽しい思い出を作りましょう！
          </span>
        </div>
      </section>
      <section className="gap-2 grid">
        <div className="bg-sky-400 gap-4 grid p-4 rounded-2xl text-white">
          <p>
            こどもテックキャラバンは
            <br />
            <strong>プログラミング</strong>と<strong>体験学習</strong>を
            <br />
            かけ合わせた体験型イベント！
          </p>
          <strong className="bg-white p-2 rounded-2xl shadow-lg text-sky-400">
            プログラミング体験
          </strong>
          <PlusIcon className="mx-auto size-5" />
          <strong className="bg-white p-2 rounded-2xl shadow-lg text-sky-400">
            体験学習
          </strong>
          過去の体験学習はこちら！
        </div>
        <IndicatorCarousel />
      </section>
      <section id="review" className="gap-4 grid">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video
        src="https://dk75m1tgsot44.cloudfront.net/movie/202407"
        controls={false}
      />
      <section className="gap-4 grid relative">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={1000}
          height={1000}
          className="absolute h-full object-contain opacity-10 w-full -z-10"
        />
        <div className="font-bold gap-4 grid text-sm">
          <p>
            このイベントでは新しい人や
            <br />
            ものとの出会いや、 初めての体験、
            <br />
            わくわくするような瞬間がきっとあります。
          </p>
          <p>
            いままで気づかなかった
            <br />
            新しい発見もあるかもしれません。
          </p>
          <p>
            普段は関係のない異業種同士のわたしたちが
            <br />
            お互いに協力し、このイベントを行っています。
          </p>
          <p>
            わたしたちは皆さんの可能性が広がり
            <br />
            心がときめく瞬間に出会えることを願っています。
          </p>
        </div>
      </section>
    </article>
  )
}
