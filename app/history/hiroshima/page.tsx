import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { HistoryPanels } from "@/app/components/layout/menuPanel"
import { HistoryPictures } from "@/app/components/layout/pictureTile"
import { Programs } from "@/app/history/programs"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HIROSHIMA_PICTURES,
  HISTORY,
} from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} />
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.href} className="gap-4 grid text-center">
          <details className="collapse collapse-arrow">
            <summary className="bg-amber-50 collapse-title font-bold font-zenMaruGothic min-h-0 text-2xl">
              <p className="absolute outline outline-offset-2 rounded text-rose-400 text-xs -rotate-45">
                大好評で
                <br />
                開催終了
              </p>
              {history.title}
            </summary>
            <Programs programs={history.programs} />
            <HistoryPictures pictures={HIROSHIMA_PICTURES} />
            <Link
              href={`${HISTORY.href}${HIROSHIMA.href}/movie${history.href}`}
              className="pt-2"
            >
              <button
                type="button"
                className="bg-sky-400 blue-shine btn rounded-2xl shadow-lg text-lg text-white w-full"
              >
                イベントの様子はこちら！
                <ArrowTopRightOnSquareIcon className="arrow-top-right size-5" />
              </button>
            </Link>
          </details>
        </section>
      ))}
      <section className="gap-4 grid">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
      <HistoryPanels menu={HISTORY} submenu={HIROSHIMA} />
    </>
  )
}
