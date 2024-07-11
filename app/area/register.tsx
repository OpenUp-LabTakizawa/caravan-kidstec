import type { Guideline } from "@/app/interfaces/guideline"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import type React from "react"

export function Register({
  guideline,
}: Readonly<{ guideline: Guideline }>): React.JSX.Element {
  return (
    <section className="grid gap-4">
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
  )
}
