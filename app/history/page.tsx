import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { History } from "@/app/interfaces/history.ts"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  HIROSHIMA_LINE,
  HISTORY,
  KANTO,
  KANTO_HISTORY,
  KANTO_LINE,
} from "@/app/lib/constant"
import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid"
import { Link } from "next-view-transitions"
import type { JSX } from "react"
import { PictureTile } from "./pictureTile.tsx"
import { Programs } from "./programs.tsx"
import styles from "./styles.module.css"

export default function HistoryPage(): JSX.Element {
  const histories: History[] = [
    {
      area: KANTO,
      history: KANTO_HISTORY,
      lineLink: KANTO_LINE,
    },
    {
      area: HIROSHIMA,
      history: HIROSHIMA_HISTORY,
      lineLink: HIROSHIMA_LINE,
    },
  ] as const

  return (
    <>
      <Heading menus={[HISTORY]} />
      {histories.map(({ area, history, lineLink }) => (
        <section key={area.name} className="space-y-6">
          <h2 className="font-bold text-3xl">{area.name}</h2>
          {history.map((history) => (
            <section key={history.date} className="space-y-4 px-2">
              <details className={`w-full ${styles.details}`}>
                <summary className="block bg-amber-50 cursor-pointer font-bold p-4 relative rounded-2xl text-2xl in-open:rounded-b-none">
                  <p className="absolute outline outline-offset-2 rounded-sm text-rose-400 text-xs -rotate-45">
                    大好評で
                    <br />
                    開催終了
                  </p>
                  <span className="ml-8 sm:ml-0">{history.title}</span>
                </summary>
                <Programs programs={history.programs} />
                <PictureTile
                  pathname={area.pathname}
                  date={history.date}
                  pictures={history.pictures}
                />
                <Link
                  href={`${HISTORY.pathname}/movie${area.pathname}/${history.date}`}
                  className={`bg-sky-400 button-pop cursor-zoom-in flex font-bold gap-2 items-center justify-center h-12 mt-2 mx-auto px-4 rounded-2xl shadow-lg text-lg text-white w-fit ${styles.blueShine}`}
                >
                  イベントの様子はこちら！
                  <MagnifyingGlassPlusIcon
                    className={`size-5 ${styles.scaleUp}`}
                  />
                </Link>
              </details>
            </section>
          ))}
          <LineRegister areaName={area.name} lineLink={lineLink} />
        </section>
      ))}
    </>
  )
}
