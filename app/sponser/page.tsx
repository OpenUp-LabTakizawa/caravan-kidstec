import { FadeInUp } from "@/app/components/animation/fadeInUp"
import { Heading } from "@/app/components/layout/heading"
import type { Sponser } from "@/app/interfaces/sponser"
import { SPONSER } from "@/app/lib/constant"
import { BuildingOffice2Icon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export default function SponserPage(): JSX.Element {
  const sponsers: Sponser[] = [
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
      <Heading menu={SPONSER} />
      <section className="grid gap-6 px-4">
        {sponsers.map((sponser) => (
          <section
            key={sponser.name}
            className="bg-base-200 gap-1 grid grid-cols-6 items-center min-h-32 p-4 rounded-2xl shadow-lg sm:grid-cols-2"
          >
            <Image
              // loader={cloudfrontLoader}
              // src={sponser.src}
              src={`https://dk75m1tgsot44.cloudfront.net${sponser.src}`}
              width={256}
              height={256}
              alt={sponser.name}
              className="col-span-2 object-contain w-full sm:col-span-1 sm:max-h-20"
            />
            <div className="col-span-4 gap-2 grid text-center sm:col-span-1">
              <h2 className="flex font-bold items-center justify-center text-sm">
                <Link href={sponser.href} target="_blank" className="link">
                  {sponser.name}
                </Link>
              </h2>
              <p className="flex items-center justify-center whitespace-pre sm:whitespace-normal">
                <BuildingOffice2Icon className="size-5 mr-1" />
                {sponser.business}
              </p>
              <FadeInUp className="font-bold text-sky-400 whitespace-pre">
                {sponser.purpose}
              </FadeInUp>
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
