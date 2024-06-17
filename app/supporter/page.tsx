import { SlideUp } from "@/app/components/animation/slideUp"
import { Heading } from "@/app/components/layout/heading"
import { BuildingOffice2Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Supporter(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center sm:px-12">
      <Heading content="サポーター/パートナー" href="/supporter" />
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-xl">
          <Link
            href="https://ichicommons.com/"
            target="_blank"
            className="link"
          >
            ICHI COMMONS株式会社
          </Link>
        </h2>
        <Image
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/ichi_commons.svg"
          width={1000}
          height={1000}
          alt="ichi_commons"
          className="w-full sm:max-h-60 sm:object-contain"
        />
        <h3 className="flex font-semibold items-center justify-center text-xl">
          <BuildingOffice2Icon className="size-5 mr-1" />
          社会課題解決へのインフラ事業
        </h3>
        <p className="font-bold leading-8 text-xl">
          <SlideUp>
            サステナビリティ活動で
            <br className="sm:hidden" />
            企業も、社会も持続可能に
          </SlideUp>
        </p>
      </section>
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-xl">
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
          className="w-full sm:max-h-60 sm:object-contain"
        />
        <h3 className="flex font-semibold items-center justify-center text-xl">
          <BuildingOffice2Icon className="size-5 mr-1" />
          エンジニア派遣事業
        </h3>
        <p className="font-bold leading-8 text-xl">
          <SlideUp>
            幸せな仕事を通じて
            <br className="sm:hidden" />
            ひとりひとりの可能性をひらく社会に
          </SlideUp>
        </p>
      </section>
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-xl">
          <Link href="https://www.tgn.co.jp/" target="_blank" className="link">
            株式会社テイクアンドギヴ・ニーズ
          </Link>
        </h2>
        <Image
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/T%26G_new_design.webp"
          width={1000}
          height={1000}
          alt="T&G_new_design"
          className="w-full sm:max-h-60 sm:object-contain"
        />
        <h3 className="flex font-semibold items-center justify-center text-xl">
          <BuildingOffice2Icon className="size-5 mr-1" />
          ホテルウェディング事業
        </h3>
        <p className="font-bold leading-8 text-xl">
          <SlideUp>
            ホスピタリティ業界に
            <br className="sm:hidden" />
            イノベーションを起こし日本を躍動させる
          </SlideUp>
        </p>
      </section>
      <section className="bg-base-200 font-semibold grid gap-6 p-4 text-xl">
        <p>
          こどもテックキャラバンでは、
          <br className="sm:hidden" />
          様々な企業や団体が手を取り合い、
          <br />
          社会課題解決を目指しています。
        </p>
        <p>
          関わる全ての人が、学び、遊び、
          <br className="sm:hidden" />
          心沸き立つ可能性が
          <br />
          広がる社会を期待しています。
        </p>
      </section>
    </article>
  )
}
