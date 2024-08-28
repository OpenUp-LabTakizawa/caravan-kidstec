import {
  IndicatorCarousel,
  ReviewCarousel,
  TopCarousel,
} from "@/app/components/layout/carousel"
import { Video } from "@/app/components/media/video"
import { Introduction } from "@/app/introduction"
import { EVENT, TOKYO_CHIBA } from "@/app/lib/constant"
import { PlusIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function Home(): JSX.Element {
  return (
    <article className="pb-4 space-y-6 text-base text-center">
      <Link
        href={EVENT.href + TOKYO_CHIBA.href}
        className="sticky top-0 z-20 sm:static"
      >
        <Image
          src="/202410_event_banner.avif"
          width={540}
          height={540}
          alt="イベント詳細はこちら"
          className="w-full z-10"
        />
      </Link>
      <section>
        <TopCarousel />
      </section>
      <section className="font-bold leading-7 space-y-4 text-center tracking-[.29em]">
        <Introduction />
      </section>
      <section className="bg-sky-300 mx-2 rounded-2xl pb-2 space-y-2">
        <div className="p-4 space-y-2 text-white">
          <p className="mb-2">
            こどもテックキャラバンは
            <br />
            <strong>プログラミング</strong>と<strong>体験学習</strong>を
            <br />
            かけ合わせた体験型イベント！
          </p>
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg w-60">
            プログラミング体験
          </p>
          <PlusIcon className="mx-auto size-5" />
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg w-60">
            体験学習
          </p>
          <p className="mt-2">過去の体験学習はこちら！</p>
        </div>
        <IndicatorCarousel />
      </section>
      <section id="review" className="space-y-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video
        src="https://dk75m1tgsot44.cloudfront.net/movie/202407"
        controls={false}
      />
      <section className="relative space-y-4">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={256}
          height={256}
          className="absolute h-full object-contain opacity-10 w-full -z-10"
        />
        <h2 className="font-bold font-zenMaruGothic text-2xl">事務局の想い</h2>
        <div className="font-bold space-y-4 text-sm">
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
            心がときめく瞬間に
            <br />
            出会えることを願っています。
          </p>
        </div>
      </section>
    </article>
  )
}
