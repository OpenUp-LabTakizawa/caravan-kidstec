import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
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
        <section key={history.href} className="grid gap-4">
          <h2 className="font-bold font-zenMaruGothic text-3xl">
            {history.title}
          </h2>
          {history.programs && <Programs programs={history.programs} />}
          {history !== HIROSHIMA_HISTORY[3] && (
            <Link href={`/history/hiroshima/${history.href}`}>
              <button
                type="button"
                className="bg-sky-400 blue-shine btn shadow-lg text-lg text-white w-full"
              >
                イベント動画を視聴する
                <ArrowTopRightOnSquareIcon className="arrow-top-right size-5" />
              </button>
            </Link>
          )}
        </section>
      ))}
      <section className="grid gap-4">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
    </>
  )
}
