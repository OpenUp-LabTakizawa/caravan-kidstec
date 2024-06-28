import { SlideUp } from "@/app/components/animation/slideUp"
import { Carousel, ReviewCarousel } from "@/app/components/layout/carousel"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { PanelTile } from "./components/layout/panelTile"
import { Video } from "./components/media/video"
import { NaturePanelItems, TechPanelItems } from "./lib/constant"

export default function Home(): React.JSX.Element {
  return (
    <article className="grid gap-6 pb-4 text-base text-center">
      {/* <Banner /> */}
      <Carousel />
      <section className="p-4 text-center">
        <SlideUp className="pb-4">
          <Image
            src="/caravan-kidstec_logo_line.webp"
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
              className="link link-info"
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
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <p className="font-semibold">
          2024年<span className="text-xl">9</span>月
          <span className="text-xl">14</span>日・
          <span className="text-xl">21</span>日・
          <span className="text-xl">22</span>日、
          <br />
          <span className="text-lg text-rose-400">千葉・東京エリア</span>
          で開催決定！
        </p>
        <Link href="https://lin.ee/nWiS1Sq">
          <button type="button" className="bg-info btn text-lg text-white">
            内容・応募はこちら
            <ArrowRightIcon className="arrow-right size-5" />
          </button>
        </Link>
      </section>
      <section className="gap-2 grid grid-cols-2">
        <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-3xl text-orange-400">
          プログラミング体験
        </h2>
        <PanelTile panelItems={TechPanelItems} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <h2 className="col-span-2 font-bold font-zenMaruGothic text-3xl text-teal-400">
          自然学習
        </h2>
        <PanelTile panelItems={NaturePanelItems} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </article>
  )
}
