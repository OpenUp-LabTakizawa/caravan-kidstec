import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import type { Guideline } from "@/app/interfaces/guideline"
import {
  CheckIcon,
  ChevronDoubleDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import type { JSX, ReactNode } from "react"

export function Register({
  guideline,
}: Readonly<{ guideline: Guideline }>): JSX.Element {
  return (
    <>
      <Requirement guideline={guideline} />
      <Procedure guideline={guideline} />
    </>
  )
}

function Requirement({
  guideline,
}: Readonly<{ guideline: Guideline }>): JSX.Element {
  return (
    <section id={guideline.anchorLink} className="px-2 space-y-4 text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">応募要項</h2>
      <div className="bg-sky-300 gap-1 grid grid-flow-col items-center mx-auto p-3 rounded-2xl shadow-lg text-base w-max">
        <InformationCircleIcon className="row-span-2 size-10" />
        <p>
          <span className="decoration-4 decoration-orange-400 font-bold underline">
            募集は先着順
          </span>
          になります。
        </p>
        <p>
          定員に達し次第、
          <br className="sm:hidden" />
          募集を終了します。
        </p>
      </div>
      <table className="border-2 border-sky-400 mx-auto table text-center w-80">
        <tbody>
          <tr>
            <th className="p-0 pl-4">募集人数</th>
            <td>{guideline.participantsNumber}</td>
          </tr>
          <tr>
            <th className="p-0 pl-4">対象者</th>
            <td>
              小学２年生&nbsp;～&nbsp;中学２年生の
              <br />
              お子様とご家族
              <br />
              （全日程において親子２名以上）
            </td>
          </tr>
          <tr>
            <th className="p-0 pl-4">参加費</th>
            <td>
              無料
              <br />
              （交通費、食事代は自己負担）
            </td>
          </tr>
          <tr>
            <th className="p-0 pl-4">参加条件</th>
            <td>
              <ul className="space-y-3 text-left">
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    ３日間で１つの
                    <br />
                    イベントである為、
                    <br />
                    全日程にご参加頂けること
                  </p>
                </li>
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    イベントの感想や
                    <br />
                    アンケートに
                    <br />
                    ご対応頂けること
                  </p>
                </li>
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    今後のイベント募集、また、
                    <br />
                    スポンサーやパートナーの
                    <br />
                    取り組み事例紹介として、
                    <br />
                    イベント写真・動画利用の
                    <br />
                    承諾を頂けること
                  </p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="p-0 pl-4">注意事項</th>
            <td>
              <ul className="space-y-3 text-left">
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    受付手続きや会場内の
                    <br />
                    移動を考慮し、集合時間は
                    <br />
                    数十分、早くなります。
                  </p>
                </li>
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    プログラム初日の
                    <br />
                    クルックフィールズは、
                    <br />
                    飲食物のお持ち込みが
                    <br />
                    できません。
                  </p>
                </li>
                <li className="flex gap-1 items-center">
                  <CheckIcon className="size-5 text-sky-400" />
                  <p className="grow">
                    場内でのお弁当のご購入と
                    <br />
                    マイボトルのご持参を
                    <br />
                    お願いいたします。
                  </p>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th className="p-0 pl-4">応募締切</th>
            <td className="decoration-4 decoration-orange-400 font-bold underline">
              {guideline.deadline}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

function Procedure({
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
              className="font-bold link text-[#00C300]"
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
          <ChevronDoubleDownIcon className="arrow-down mx-auto size-10" />
        </li>
      )}
    </>
  )
}
