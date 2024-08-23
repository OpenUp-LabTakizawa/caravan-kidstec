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
      <Link href={EVENT.href + TOKYO_CHIBA.href} className="sticky top-0 z-20">
        <Image
          src="/202410_event_banner.avif"
          width={1000}
          height={1000}
          alt="イベント詳細はこちら"
          className="w-full z-10"
        />
      </Link>
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
      <section className="bg-sky-300 gap-2 grid mx-2 rounded-2xl pb-2">
        <div className="gap-2 grid p-4 text-white">
          <p className="mb-2">
            こどもテックキャラバンは
            <br />
            <strong>プログラミング</strong>と<strong>体験学習</strong>を
            <br />
            かけ合わせた体験型イベント！
          </p>
          <strong className="border-2 border-white mx-auto p-2 rounded-2xl shadow-lg w-60">
            プログラミング体験
          </strong>
          <PlusIcon className="mx-auto size-5" />
          <strong className="border-2 border-white mx-auto p-2 rounded-2xl shadow-lg w-60">
            体験学習
          </strong>
          <p className="mt-2">過去の体験学習はこちら！</p>
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
        <h2 className="font-bold font-zenMaruGothic text-2xl">事務局の想い</h2>
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
