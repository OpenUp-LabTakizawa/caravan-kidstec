import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HISTORY,
} from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import type { Metadata } from "next"
import Link from "next/link"
import type { JSX } from "react"
import { PictureTile } from "./pictureTile.tsx"
import { Programs } from "./programs.tsx"
import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: "活動実績",
}

export default function History(): JSX.Element {
  return (
    <>
      <Heading menus={[HISTORY]} />
      <h2 className="font-bold font-zenMaruGothic text-3xl">
        {HIROSHIMA.name}
      </h2>
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.date} className="space-y-4">
          <details className={`group w-full ${styles.details}`}>
            <summary className="block bg-amber-50 font-bold font-zenMaruGothic p-4 relative rounded-2xl text-2xl w-full group-open:rounded-b-none">
              <p className="absolute outline outline-offset-2 rounded text-rose-400 text-xs -rotate-45">
                大好評で
                <br />
                開催終了
              </p>
              <span className="ml-4 sm:ml-0">{history.title}</span>
            </summary>
            <Programs programs={history.programs} />
            <PictureTile
              pathname={HIROSHIMA.pathname}
              date={history.date}
              pictures={history.pictures}
            />
            <Link
              href={`${HISTORY.pathname}/movie${HIROSHIMA.pathname}/${history.date}`}
              className={`bg-sky-400 button-pop duration-200 ease-out flex font-bold gap-2 items-center justify-center h-12 mt-2 mx-auto px-4 rounded-2xl shadow-lg text-lg text-white w-fit ${styles.blueShine}`}
            >
              イベントの様子はこちら！
              <ArrowTopRightOnSquareIcon
                className={`size-5 ${styles.arrowTopRight}`}
              />
            </Link>
          </details>
        </section>
      ))}
      <LineRegister lineLink={HIROSHIMA_LINE} />
    </>
  )
}
