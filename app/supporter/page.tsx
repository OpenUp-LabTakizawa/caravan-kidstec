import { SlideUp } from "@/app/components/animation/slideUp"
import { Divider } from "@/app/components/layout/divider"
import { Heading } from "@/app/components/layout/heading"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Supporter(): React.JSX.Element {
  return (
    <article className="grid gap-6 sm:px-12">
      <Heading content="サポーター/パートナー" href="/supporter" />
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-2xl text-center">
          <Link
            href="https://ichicommons.com/"
            target="_blank"
            className="link"
          >
            ICHI COMMONS株式会社
          </Link>
        </h2>
        <Image
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/ichi_social.webp"
          width={1000}
          height={1000}
          alt="ichi_social"
          className="w-full"
        />
        <p className="font-semibold text-center">Vision</p>
        <p className="font-bold leading-8 text-center text-xl">
          <SlideUp>
            誰もが社会課題解決の
            <br className="sm:hidden" />
            主役になれる世界
          </SlideUp>
        </p>
        <p className="font-semibold text-center">Mission</p>
        <p className="font-bold leading-8 text-center text-xl slide-up">
          <SlideUp>
            社会課題の解決に取り組むすべての
            <br className="sm:hidden" />
            人や組織の共助共創を支える
          </SlideUp>
        </p>
      </section>
      <Divider />
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-2xl text-center">
          <Link
            href="https://www.openupgroup.co.jp/"
            target="_blank"
            className="link"
          >
            株式会社オープンアップグループ
          </Link>
        </h2>
        <Image
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/openup_logo.webp"
          width={1000}
          height={1000}
          alt="openup_logo"
          className="w-full"
        />
        <h3 className="font-bold text-center text-xl">OPEN UP１%アクション</h3>
        <p className="leading-10 text-center">
          当社グループでは
          <br className="md:hidden" />
          <SlideUp className="font-bold">
            「幸せな仕事を通じてひとりひとりの
            <br className="sm:hidden" />
            可能性をひらく社会に」
          </SlideUp>
          を
          <br className="md:hidden" />
          パーパスに掲げています。
        </p>
        <p className="leading-10 text-center">
          このパーパスの目指す社会に向けて
          <br />
          <SlideUp className="font-bold">
            「子どもがモノづくりや自然を学ぶ機会を創出し、子どもの可能性をひらきたい」
          </SlideUp>
          そして
          <br />
          <SlideUp className="font-bold">
            「社会課題の解決に向けて活動する人たちの新しい可能性をひらきたい」
          </SlideUp>
          との想いから
          <br />
          このワークショップのサポーターを続けてまいります。
          <br className="sm:hidden" />
        </p>
      </section>
      <Divider />
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-2xl text-center">
          <Link href="https://www.tgn.co.jp/" target="_blank" className="link">
            株式会社テイクアンドギヴ・ニーズ
          </Link>
        </h2>
        <Image
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/T%26G_new_design.webp"
          width={1000}
          height={1000}
          alt="T&G_new_design"
          className="w-full"
        />
        <h3 className="font-bold text-center text-xl">
          ホスピタリティ業界に
          <br className="sm:hidden" />
          イノベーションを起こし日本を躍動させる
        </h3>
        <p className="font-semibold leading-5 text-center text-lg">
          MISSION
          <p className="text-xs">私たちの使命</p>
        </p>
        <p className="font-bold leading-8 text-center text-xl">
          <SlideUp>
            あそびごころとやさしさで、
            <br className="sm:hidden" />
            人の心を人生を豊かにする
          </SlideUp>
        </p>
        <p className="font-semibold leading-5 text-center text-lg">
          VISION
          <p className="text-xs">私たちのあるべき姿</p>
        </p>
        <p className="font-bold leading-8 text-center text-xl">
          <SlideUp>
            日本を代表するホスピタリティ業界の
            <br className="sm:hidden" />
            リーディングカンパニーになる
          </SlideUp>
        </p>
        <p className="font-semibold leading-5 text-center text-lg">
          VALUE
          <p className="text-xs">大切にする価値観</p>
        </p>
        <p className="font-bold leading-8 text-center text-xl">
          <SlideUp>Creativity / Challenge /Kindness</SlideUp>
        </p>
      </section>
    </article>
  )
}
