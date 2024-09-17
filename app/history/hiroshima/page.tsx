import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HISTORY,
} from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { Programs } from "../programs.tsx"
import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での活動・実績`,
}

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} />
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.date} className="space-y-4">
          <details className="collapse collapse-arrow">
            <summary className="bg-amber-50 collapse-title font-bold font-zenMaruGothic text-2xl">
              <p className="absolute outline outline-offset-2 rounded text-rose-400 text-xs -rotate-45">
                大好評で
                <br />
                開催終了
              </p>
              <span className="ml-12">{history.title}</span>
            </summary>
            <Programs programs={history.programs} />
            <div className="gap-1 grid grid-cols-3">
              {history.pictures.map((picture) => (
                <Link
                  key={picture.alt}
                  href={`${HISTORY.pathname + HIROSHIMA.pathname}/image/${history.date}/${picture.name}`}
                  className="relative"
                >
                  <MagnifyingGlassPlusIcon className="absolute right-0 size-4 stroke-2 text-white top-0" />
                  <Image
                    loader={cloudfrontLoader}
                    src={picture.src}
                    width={256}
                    height={256}
                    alt={picture.alt}
                    className="w-full"
                  />
                </Link>
              ))}
            </div>
            <Link
              href={`${HISTORY.pathname}${HIROSHIMA.pathname}/movie/${history.date}`}
              className={`bg-sky-400 btn mt-2 mx-auto rounded-2xl shadow-lg text-lg text-white w-max ${styles.blueShine}`}
            >
              イベントの様子はこちら！
              <ArrowTopRightOnSquareIcon
                className={`${styles.arrowTopRight} size-5`}
              />
            </Link>
          </details>
        </section>
      ))}
      <LineRegister lineLink={HIROSHIMA_LINE} />
    </>
  )
}
