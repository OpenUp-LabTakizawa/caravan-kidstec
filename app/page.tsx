import { SlideUp } from "@/app/components/animation/slideUp"
import {
  CardCarousel,
  Carousel,
  ReviewCarousel,
} from "@/app/components/layout/carousel"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { Banner } from "./components/layout/banner"
import { Video } from "./components/media/video"

export default function Home(): React.JSX.Element {
  return (
    <article className="grid gap-6 pb-4 text-base text-center">
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
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <p>
          <Link href="/area/chiba" className="link link-info">
            応募要項
          </Link>
          をご確認の上、
          <br />
          応募画面へお進み下さい。
        </p>
        <Link href="https://lin.ee/nWiS1Sq">
          <button type="button" className="bg-[#00C300] btn text-lg text-white">
            LINEで簡単応募する！
            <ArrowRightIcon className="size-5" />
          </button>
        </Link>
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl text-orange-400">
          プログラミング体験
        </h2>
        <Link href="https://robosava.jp/" target="_blank">
          <figure className="w-full">
            <Image
              src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/final_stage/course_challenge.webp"
              height={1000}
              width={1000}
              alt="ロボサバ"
              className="object-contain w-full"
            />
            <figcaption className="bg-base-200 font-bold py-1 text-center">
              ロボサバ
            </figcaption>
          </figure>
        </Link>
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl text-orange-400">
          自然学習
        </h2>
        <figure className="w-full">
          <Image
            src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/pointing_leaf.webp"
            height={1000}
            width={1000}
            alt="自然学習"
            className="object-contain w-full"
          />
          <figcaption className="bg-base-200 font-bold py-1 text-center">
            三段峡
          </figcaption>
        </figure>
      </section>
      <section id="about" className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl text-orange-400">
          過去のイベント
        </h2>
        <CardCarousel />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </article>
  )
}
