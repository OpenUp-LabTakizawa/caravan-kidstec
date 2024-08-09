import { FadeInUp } from "@/app/components/animation/fadeInUp"
import { Heading } from "@/app/components/layout/heading"
import type { Supporter } from "@/app/interfaces/supporter"
import { SUPPORTER } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import { BuildingOffice2Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function SupporterPage(): JSX.Element {
  const supporters: Supporter[] = [
    {
      name: "ICHI COMMONS",
      href: "https://ichicommons.com/",
      src: "/logo/ichicommons_logo.svg",
      business: "社会課題解決への\nインフラ事業",
      purpose: "サステナビリティ活動で\n企業も、社会も持続可能に",
    },
    {
      name: "オープンアップグループ",
      href: "https://www.openupgroup.co.jp/",
      src: "/logo/openup_logo.svg",
      business: "エンジニア派遣事業",
      purpose: "幸せな仕事を通じて\nひとりひとりの可能性を\nひらく社会に",
    },
    {
      name: "テイクアンドギヴ・ニーズ",
      href: "https://www.tgn.co.jp/",
      src: "/logo/take_and_give_needs_logo.svg",
      business: "ホテルウェディング事業",
      purpose: "ホスピタリティ業界に\nイノベーションを起こし\n日本を躍動させる",
    },
  ] as const

  return (
    <>
      <Heading menu={SUPPORTER} />
      <section className="grid gap-6 px-4">
        {supporters.map((supporter) => (
          <section
            key={supporter.name}
            className="bg-base-200 gap-1 grid grid-cols-2 items-center min-h-32 p-4 rounded-2xl shadow-lg sm:grid-cols-2"
          >
            <Image
              loader={cloudfrontLoader}
              src={supporter.src}
              width={1000}
              height={1000}
              alt={supporter.name}
              className="w-full object-contain sm:max-h-20"
            />
            <div className="grid gap-2 text-center sm:col-span-1">
              <h2 className="flex font-bold items-center justify-center text-sm">
                <Link href={supporter.href} target="_blank" className="link">
                  {supporter.name}
                </Link>
              </h2>
              <p className="flex items-center justify-center whitespace-pre sm:whitespace-normal">
                <BuildingOffice2Icon className="size-5 mr-1" />
                {supporter.business}
              </p>
              <FadeInUp className="font-bold text-sky-400 whitespace-pre">
                {supporter.purpose}
              </FadeInUp>
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
