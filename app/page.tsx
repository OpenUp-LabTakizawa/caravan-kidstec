import { SlideUp } from "@/app/components/animation/slideUp"
import { Carousel } from "@/app/components/layout/carousel"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Banner } from "./components/layout/banner"

export default function Home(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-base text-center">
      <Banner />
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
            楽しむ、学ぶ、競うを
            <br />
            満喫するイベントです！
          </p>
        </div>
      </section>
      <section
        id="news"
        className="bg-base-200 grid gap-6 p-4 rounded-box shadow-lg"
      />
    </article>
  )
}
