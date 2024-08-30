import { FadeInUp } from "@/app/components/animation/fadeInUp"
import { Heading } from "@/app/components/layout/heading"
import type { Sponser } from "@/app/interfaces/sponser"
import { SPONSER } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
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
      src: "/logo/take_and_give_needs_logo.avif",
      business: "ウェディング事業・ホテル事業",
      purpose: "ホスピタリティ業界に\nイノベーションを起こし\n日本を躍動させる",
    },
  ] as const

  return (
    <>
      <Heading menu={SPONSER} />
      <section className="px-2 space-y-6">
        {sponsers.map((sponser) => (
          <section
            key={sponser.name}
            className="bg-base-200 gap-1 grid grid-cols-6 items-center min-h-32 p-1 rounded-2xl shadow-lg sm:grid-cols-2"
          >
            <div className="bg-white col-span-2 flex h-full items-center rounded-2xl my-4 sm:col-span-1">
              <Image
                loader={cloudfrontLoader}
                src={sponser.src}
                width={256}
                height={256}
                alt={sponser.name}
                className="bg-white h-full object-contain rounded-2xl w-full sm:max-h-20"
              />
            </div>
            <div className="col-span-4 space-y-2 text-center sm:col-span-1">
              <h2 className="font-bold text-sm">
                <Link
                  href={sponser.href}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  {sponser.name}
                </Link>
              </h2>
              <p className="flex gap-1 items-center justify-center">
                <BuildingOffice2Icon className="size-5" />
                {sponser.business}
              </p>
              <FadeInUp className="font-bold whitespace-pre">
                {sponser.purpose}
              </FadeInUp>
            </div>
          </section>
        ))}
      </section>
    </>
  )
}
