import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { MenuPanels } from "@/app/components/layout/menuPanel"
import { Programs } from "@/app/history/programs"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HISTORY,
} from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX } from "react"

export default function Hiroshima(): JSX.Element {
  return (
    <>
      <Heading menu={HISTORY} submenu={HIROSHIMA} />
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.href} className="gap-4 grid">
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            {history.title}
          </h2>
          <details className="collapse collapse-arrow">
            <summary className="bg-amber-50 collapse-title text-xl">
              イベント情報
            </summary>
            <Programs programs={history.programs} />
            {history !== HIROSHIMA_HISTORY[1] &&
              history !== HIROSHIMA_HISTORY[4] && (
                <Link
                  href={`/history/hiroshima/${history.href}`}
                  className="pt-2"
                >
                  <button
                    type="button"
                    className="bg-sky-400 blue-shine btn rounded-2xl shadow-lg text-lg text-white w-full"
                  >
                    イベント動画を視聴する
                    <ArrowTopRightOnSquareIcon className="arrow-top-right size-5" />
                  </button>
                </Link>
              )}
          </details>
        </section>
      ))}
      <section className="gap-4 grid">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
      <MenuPanels submenu={HIROSHIMA} />
    </>
  )
}
