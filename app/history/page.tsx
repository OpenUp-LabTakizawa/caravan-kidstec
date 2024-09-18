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
      <Heading menu={HISTORY} />
      <h2 className="font-bold font-zenMaruGothic text-3xl">
        {HIROSHIMA.name}
      </h2>
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
            <PictureTile
              pathname={HIROSHIMA.pathname}
              date={history.date}
              pictures={history.pictures}
            />
            <Link
              href={`${HISTORY.pathname}/movie${HIROSHIMA.pathname}/${history.date}`}
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
