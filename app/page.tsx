import { SlideUp } from "@/app/components/animation/slideUp"
import { Carousel } from "@/app/components/layout/carousel"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Banner } from "./components/layout/banner"

export default function Home(): React.JSX.Element {
  return (
    <>
      <Banner />
      <article className="grid gap-6 text-center">
        <Carousel />
        <section className="bg-base-200 grid gap-6 items-center p-4 rounded-box shadow-lg sm:grid-cols-4">
          <SlideUp className="whitespace-pre sm:col-span-4 sm:whitespace-normal">
            <Image
              src="/caravan-kidstec_logo_line.webp"
              width={1000}
              height={1000}
              alt="こどもテックキャラバン"
              className="w-full"
            />
          </SlideUp>
          <Image
            src="/miku.webp"
            width={1000}
            height={1000}
            alt="ミク"
            className="hidden w-full sm:block"
          />
          <div className="grid gap-4 sm:col-span-2">
            <p>
              自然豊かな環境を感じるアクティビティと
              <br />
              ロボット製作とプログラミングを楽しく学びます。
            </p>
            <p>
              最終日には学んだ知識を使って
              <br />
              ロボットを動かす
              <Link
                href="https://robosava.jp/"
                target="_blank"
                className="link link-primary"
              >
                ロボサバ大会
              </Link>
              で仲間と競います！
            </p>
            <p>
              最初はプログラミングもわからない子でも、
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
            <p>楽しむ、学ぶ、競うを満喫するイベントです！</p>
          </div>
          <Image
            src="/kai.webp"
            width={1000}
            height={1000}
            alt="カイ"
            className="hidden w-full sm:block"
          />
        </section>
        <section
          id="news"
          className="bg-base-200 grid gap-6 p-4 rounded-box shadow-lg"
        >
          <h2 className="font-bold leading-10 text-2xl">
            2024年8月
            <span className="font-extrabold text-3xl text-primary">千葉</span>で
            <span className="text-error">開催決定！</span>
          </h2>
        </section>
      </article>
    </>
  )
}
