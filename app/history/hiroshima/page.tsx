import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { HistoryTile } from "@/app/components/layout/pictureTile"
import { Programs } from "@/app/history/programs"
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

export const metadata: Metadata = {
  title: `${HIROSHIMA.name}での実績`,
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
            <HistoryTile date={history.date} pictures={history.pictures} />
            <Link
              href={`${HISTORY.pathname}${HIROSHIMA.pathname}/movie/${history.date}`}
              className="bg-sky-400 blue-shine btn mt-2 mx-auto rounded-2xl shadow-lg text-lg text-white w-max"
            >
              イベントの様子はこちら！
              <ArrowTopRightOnSquareIcon className="arrow-top-right size-5" />
            </Link>
          </details>
        </section>
      ))}
      <section>
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
    </>
  )
}
