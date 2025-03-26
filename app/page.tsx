import { PlusIcon } from "@heroicons/react/24/solid"
import { Link } from "next-view-transitions"
import Image from "next/image"
import type { JSX } from "react"
import { IndicatorCarousel, ReviewCarousel } from "./carousel.tsx"
import { Video } from "./components/media/video.tsx"
import { Introduction } from "./introduction.tsx"
import { KANTO, SECRETARIAT } from "./lib/constant.ts"

export default function Home(): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 text-center">
      <Video className="mt-3" date="202410" pathname={KANTO.pathname} />
      <section className="font-bold leading-7 mt-6 space-y-4 text-base text-center tracking-[.29em]">
        <Introduction />
      </section>
      <section className="bg-sky-300 mt-6 mx-2 pb-2 rounded-2xl space-y-2">
        <div className="p-4 space-y-2 text-base text-white">
          <h1 className="mb-2">
            こどもテックキャラバンは
            <br />
            <strong>プログラミング</strong>と<strong>体験学習</strong>を
            <br />
            かけ合わせた体験型イベント！
          </h1>
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
      <section className="mt-6 space-y-4">
        <h2 className="font-bold font-maru text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <section className="relative mt-6">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={511}
          height={249}
          className="absolute object-contain opacity-10 size-full -z-10"
        />
        <h2 className="font-bold font-maru text-2xl">
          <Link
            href={SECRETARIAT.pathname}
            className="block button-pop text-sky-400 underline"
          >
            事務局の想い
          </Link>
        </h2>
        <div className="font-bold mt-4 space-y-4 text-sm sm:text-base">
          <p>
            このイベントでは新しい人や
            <br className="sm:hidden" />
            ものとの出会いや、 初めての体験、
            <br />
            わくわくするような瞬間がきっとあります。
          </p>
          <p>
            いままで気づかなかった
            <br className="sm:hidden" />
            新しい発見もあるかもしれません。
          </p>
          <p>
            この特別な経験をつくるためにわたしたちは
            <br />
            パートナシップを組んで協力し、
            <br className="sm:hidden" />
            このイベントを行っています。
          </p>
          <p>
            わたしたちは皆さんの可能性が広がり、
            <br className="sm:hidden" />
            心がときめく瞬間に
            <br />
            出会えることを願っています。
          </p>
        </div>
      </section>
    </article>
  )
}
