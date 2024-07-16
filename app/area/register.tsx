import type { Guideline } from "@/app/interfaces/guideline"
import {
  CheckIcon,
  ChevronDoubleDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import type React from "react"
import { LineAddFriends } from "../components/button/lineAddFriends"

export function Register({
  guideline,
}: Readonly<{ guideline: Guideline }>): React.JSX.Element {
  return (
    <>
      <section className="grid gap-4 px-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">応募要項</h2>
        <div className="alert bg-sky-400 gap-1 grid grid-rows-2 grid-flow-col justify-items-center max-w-fit mx-auto shadow-lg text-base">
          <InformationCircleIcon className="row-span-2 size-10" />
          <p>
            <span className="decoration-4 decoration-orange-400 font-bold underline">
              募集は先着順
            </span>
            になります。
          </p>
          <p>定員に達し次第、募集を終了します。</p>
        </div>
        <table className="border-2 border-sky-400 table text-center">
          <tbody>
            <tr>
              <th>募集人数</th>
              <td>{guideline.participantsNumber}</td>
            </tr>
            <tr>
              <th>対象者</th>
              <td>
                小学４年生 ～ 中学２年生の
                <br />
                お子様とご家族
                <br />
                （全日程において親子２名以上）
              </td>
            </tr>
            <tr>
              <th>参加費</th>
              <td>
                無料
                <br />
                （交通費、食事代は自己負担）
              </td>
            </tr>
            <tr>
              <th>参加条件</th>
              <td>
                <ul>
                  <li>
                    ３日間で１つのイベントである為、
                    <br />
                    全日程にご参加頂けること
                  </li>
                  <br />
                  <li>
                    イベントの感想やアンケートに
                    <br />
                    ご対応頂けること
                  </li>
                  <br />
                  <li>
                    今後のイベント募集、また、
                    <br />
                    サポーターやパートナーの
                    <br />
                    取り組み事例紹介として、
                    <br />
                    イベント写真・動画利用の
                    <br />
                    承諾を頂けること
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>応募締切</th>
              <td className="decoration-4 decoration-orange-400 font-bold underline">
                {guideline.deadline}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="grid gap-4 px-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">応募手順</h2>
        <ul className="gap-2 grid text-sm">
          <li className="border-2 border-sky-400 gap-2 grid items-center pb-2 relative">
            <span className="absolute bg-sky-400 flex font-bold items-center left-0 top-0 pr-1">
              <CheckIcon className="size-5 mr-1" />1
            </span>
            <p>
              <Link
                href={guideline.lineLink}
                className="font-bold link text-[#00C300]"
              >
                公式LINE
              </Link>
              を友達追加してトーク画面へ
            </p>
            <LineAddFriends linkLink={guideline.lineLink} />
          </li>
          <li>
            <ChevronDoubleDownIcon className="arrow-down mx-auto size-10" />
          </li>
          <li className="border-2 border-sky-400 gap-2 grid items-center pb-2 relative">
            <span className="absolute bg-sky-400 flex font-bold items-center left-0 top-0 pr-1">
              <CheckIcon className="size-5 mr-1" />2
            </span>
            <p>
              トーク画面メニューの
              <br />
              <span className="font-bold">「参加申込はこちら」</span>をタップ
            </p>
          </li>
          <li>
            <ChevronDoubleDownIcon className="arrow-down mx-auto size-10" />
          </li>
          <li className="border-2 border-sky-400 gap-2 grid items-center pb-2 relative">
            <span className="absolute bg-sky-400 flex font-bold items-center left-0 top-0 pr-1">
              <CheckIcon className="size-5 mr-1" />3
            </span>
            <p>会話に沿って必要事項を入力</p>
          </li>
          {/* <li className="border-2 border-sky-400 gap-2 grid items-center pb-2 relative">
            <span className="absolute bg-sky-400 flex font-bold items-center left-0 top-0 pr-1">
              <CheckIcon className="size-5 mr-1" />3
            </span>
            <p>会話に沿って必要事項を入力、例えば…</p>
            <div className="chat chat-start ml-1">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={guideline.botImage}
                    width={1000}
                    height={1000}
                    alt="公式LINE"
                  />
                </div>
              </div>
              <div className="chat-bubble">
                お子様の参加人数を
                <br />
                教えて下さい。
              </div>
            </div>
            <div className="chat chat-end mr-1">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src={guideline.userImage}
                    width={1000}
                    height={1000}
                    alt="ユーザー"
                  />
                </div>
              </div>
              <div className="bg-[#00C300] chat-bubble text-black">２人</div>
            </div>
          </li> */}
          <li>
            <ChevronDoubleDownIcon className="arrow-down mx-auto size-10" />
          </li>
          <li className="border-2 border-sky-400 gap-2 grid items-center pb-2 relative">
            <span className="absolute bg-sky-400 flex font-bold items-center left-0 top-0 pr-1">
              <CheckIcon className="size-5 mr-1" />4
            </span>
            <p>
              全て回答して<span className="font-bold">申込完了！</span>
              <br />
              <br />
              担当者よりご参加の確定、及び、
              <br />
              その他ご連絡をさせて頂きます。
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}
