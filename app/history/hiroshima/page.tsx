import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import {
  HistoryPanels,
  HistoryPictures,
} from "@/app/components/layout/menuPanel"
import { Programs } from "@/app/history/programs"
import type { Picture } from "@/app/interfaces/picture"
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
  const pictures: Picture[] = [
    {
      alt: "writing",
      src: "/202206/sandankyo/writing.avif",
    },
    {
      alt: "using_nipper",
      src: "/202311/eda_island/using_nipper.avif",
    },
    {
      alt: "peace_sign",
      src: "/202311/sandankyo/peace_sign.avif",
    },
    {
      alt: "mother_check",
      src: "/202311/wedding/mother_check.avif",
    },
    {
      alt: "switch_on",
      src: "/202311/wedding/switch_on.avif",
    },
    {
      alt: "olive_pouring",
      src: "/202311/eda_island/olive_pouring.avif",
    },
  ] as const

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA]} />
      {HIROSHIMA_HISTORY.map((history) => (
        <section key={history.href} className="gap-4 grid text-center">
          <details className="collapse collapse-arrow">
            <summary className="bg-amber-50 collapse-title flex font-bold font-zenMaruGothic min-h-0 text-2xl">
              <div className="absolute outline outline-offset-2 rounded text-rose-400 text-xs -rotate-45">
                大好評で
                <br />
                開催終了
              </div>
              <span className="grow">{history.title}</span>
            </summary>
            <Programs programs={history.programs} />
            <HistoryPictures pictures={pictures} />
            {history !== HIROSHIMA_HISTORY[3] && (
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
            )}
          </details>
        </section>
      ))}
      <section className="gap-4 grid">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
      <HistoryPanels menuHref={HISTORY.href} submenu={HIROSHIMA} />
    </>
  )
}
