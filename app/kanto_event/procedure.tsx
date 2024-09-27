import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import type { Guideline } from "@/app/interfaces/guideline"
import { CheckIcon, ChevronDoubleDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX, ReactNode } from "react"
import styles from "./procedure.module.css"

export function Procedure({
  guideline,
}: Readonly<{ guideline: Guideline }>): JSX.Element {
  return (
    <section className="px-2 space-y-4 text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">応募手順</h2>
      <ul className="mx-auto space-y-2 text-sm w-80">
        <Step index={1}>
          <p>
            <Link
              href={guideline.lineLink}
              className="font-bold text-[#00C300] underline"
            >
              LINE公式アカウント
            </Link>
            を<br />
            友達追加してトーク画面へ
          </p>
          <LineAddFriends linkLink={guideline.lineLink} />
        </Step>
        <Step index={2}>
          <p>
            トーク画面メニューの
            <br />
            <b>「参加申込はこちら」</b>をタップ
          </p>
        </Step>
        <Step index={3}>
          <p>会話に沿って必要事項を入力</p>
        </Step>
        <Step index={4} isLast={true}>
          <p>
            全て回答して<b>申込完了！</b>
          </p>
          <p>
            担当者よりご参加の確定、及び、
            <br />
            その他のご連絡をさせて頂きます。
          </p>
        </Step>
      </ul>
    </section>
  )
}

function Step({
  children,
  index,
  isLast = false,
}: Readonly<{
  children: ReactNode
  index: number
  isLast?: boolean
}>): JSX.Element {
  return (
    <>
      <li className="border-2 border-sky-400 pb-2 relative space-y-2">
        <b className="absolute bg-sky-400 flex gap-1 items-center left-0 pr-1 top-0">
          <CheckIcon className="size-5" />
          {index}
        </b>
        {children}
      </li>
      {!isLast && (
        <li>
          <ChevronDoubleDownIcon
            className={`mx-auto size-10 ${styles.arrowDown}`}
          />
        </li>
      )}
    </>
  )
}
