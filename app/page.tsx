import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Link } from "next-view-transitions"
import Image from "next/image"
import type { JSX } from "react"
import banner from "../public/202505_kanto_banner_ready.avif"
import { IndicatorCarousel, ReviewCarousel } from "./carousel.tsx"
import { Video } from "./components/media/video.tsx"
import { Introduction } from "./introduction.tsx"
import { KANTO, KANTO_EVENT, NEWS, SECRETARIAT } from "./lib/constant.ts"

export default function Home(): JSX.Element {
  return (
    <article className="max-w-3xl mx-auto pb-4 space-y-6 text-center">
      <Link
        href={KANTO_EVENT.pathname}
        className="block button-pop duration-200 ease-out mb-3 sticky top-0 z-20 sm:inline sm:static"
      >
        <Image
          src={banner}
          width={540}
          height={106}
          alt="こどもテックキャラバン-関東イベントバナー"
          placeholder="blur"
          priority={true}
          className="duration-200 ease-out mb-3 w-full"
        />
      </Link>
      <Video date="202410" pathname={KANTO.pathname} />
      <section className="mx-2 space-y-4">
        <h2 className="font-bold text-3xl">ニュース</h2>
        <ul className="border-2 border-double border-orange-400 p-2 rounded-2xl space-y-2 text-center">
          {NEWS.map((news) => (
            <li
              key={news.title}
              className="bg-orange-100 border-b border-gray-300 duration-300 hover:bg-orange-200 hover:translate-x-2"
            >
              <Link
                href={news.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-6 border-orange-400 button-pop grow"
              >
                <strong className="max-w-full whitespace-pre sm:whitespace-normal">
                  {news.title}
                </strong>
                <p className="pr-2 text-gray-500 text-right text-xs sm:text-sm md:text-base">
                  {news.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="font-bold leading-7 space-y-4 text-base text-center tracking-[.29em]">
        <Introduction />
      </section>
      <section className="mx-2 space-y-4">
        <h2 className="font-bold text-3xl">ニュース</h2>
        <ul className="border-2 border-double border-orange-400 p-2 rounded-2xl space-y-2 text-center">
          {NEWS.map((news) => (
            <li
              key={news.title}
              className="bg-orange-100 border-b border-gray-300 duration-300 hover:bg-orange-200 hover:translate-x-2"
            >
              <Link
                href={news.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-6 border-orange-400 button-pop grow"
              >
                <strong className="max-w-full whitespace-pre sm:whitespace-normal">
                  {news.title}
                </strong>
                <p className="pr-2 text-gray-500 text-right text-xs sm:text-sm md:text-base">
                  {news.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-sky-300 mx-2 pb-2 rounded-2xl space-y-2">
        <div className="font-bold p-4 space-y-2 text-base text-white">
          <h1 className="mb-2">
            こどもテックキャラバンは
            <br />
            プログラミングと体験学習を
            <br />
            かけ合わせた体験型イベント！
          </h1>
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg text-gray-800 w-60">
            プログラミング体験
          </p>
          <PlusIcon className="mx-auto size-5 stroke-4" />
          <p className="border-2 border-white font-bold mx-auto p-2 rounded-2xl shadow-lg text-gray-800 w-60">
            体験学習
          </p>
          <p className="mt-2">過去の体験学習はこちら！</p>
        </div>
        <IndicatorCarousel />
      </section>
      <section className="mx-2 space-y-4">
        <h2 className="font-bold text-3xl">ニュース</h2>
        <ul className="border-2 border-dashed border-sky-400 p-2 rounded-2xl space-y-2 text-center">
          {NEWS.map((news) => (
            <li
              key={news.title}
              className="bg-sky-100 border-b border-gray-300 duration-300 flex items-center rounded-lg hover:bg-sky-200 hover:scale-105"
            >
              <ChevronRightIcon className="size-6 stroke-4 text-orange-400" />
              <Link
                href={news.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block button-pop grow"
              >
                <strong className="max-w-full whitespace-pre sm:whitespace-normal">
                  {news.title}
                </strong>
                <p className="pr-2 text-gray-500 text-right text-xs sm:text-sm md:text-base">
                  {news.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="font-bold text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <section className="relative">
        <Image
          src="/handshake.avif"
          alt="handshake"
          width={511}
          height={249}
          className="absolute object-contain opacity-10 size-full -z-10"
        />
        <h2 className="font-bold text-2xl">
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
