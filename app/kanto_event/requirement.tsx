import type { Guideline } from "@/app/interfaces/guideline"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import type { JSX } from "react"

export function Requirement({
  guideline,
}: Readonly<{ guideline: Guideline }>): JSX.Element {
  return (
    <section id={guideline.anchorLink} className="px-2 space-y-4 text-center">
      <h2 className="font-bold font-zenMaruGothic text-3xl">応募要項</h2>
      <section className="bg-sky-300 flex gap-1 items-center mx-auto p-3 rounded-2xl shadow-lg text-base text-center w-fit">
        <InformationCircleIcon className="size-10" />
        <div>
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
      </section>
      <div className="border-2 border-sky-400 mx-auto py-2 space-y-2 text-center text-sm sm:hidden">
        <div className="border-b border-b-gray-200 pb-2">
          <b>募集人数</b>
          <p>{guideline.participantsNumber}</p>
        </div>
        <div className="border-b border-b-gray-200 pb-2">
          <b>対象者</b>
          <p>
            小学２年生&nbsp;～&nbsp;中学２年生のお子様とご家族
            <br />
            （全日程において親子２名以上）
          </p>
        </div>
        <div className="border-b border-b-gray-200 pb-2">
          <b>参加費</b>
          <p>無料（交通費、食事代は自己負担）</p>
        </div>
        <div className="border-b border-b-gray-200 pb-2">
          <b>参加条件</b>
          <ul className="list-disc pl-7 space-y-3 text-left">
            <li>
              ３日間で１つのイベントである為、
              <br />
              全日程にご参加頂けること
            </li>
            <li>イベントの感想やアンケートにご対応頂けること</li>
            <li>
              今後のイベント募集、また、スポンサーやパートナーの取り組み事例紹介として、イベント写真・動画利用の承諾を頂けること
            </li>
          </ul>
        </div>
        <div className="border-b border-b-gray-200 pb-2">
          <b>注意事項</b>
          <ul className="list-disc pl-7 space-y-3 text-left">
            <li>
              受付手続きや会場内の移動を考慮し、
              <br />
              集合時間は数十分、早くなります。
            </li>
            <li>
              プログラム初日のクルックフィールズは、
              <br />
              飲食物のお持ち込みができません。
            </li>
            <li>
              場内でのお弁当のご購入と、
              <br />
              マイボトルのご持参をお願いいたします。
            </li>
          </ul>
        </div>
        <div className="border-b border-b-gray-200 pb-2">
          <b>応募開始</b>
          <p>{guideline.startDate}</p>
        </div>
        <div>
          <b>応募締切</b>
          <p className="decoration-4 decoration-orange-400 font-bold underline">
            {guideline.deadline}
          </p>
        </div>
      </div>
      <table className="border-2 border-sky-400 hidden mx-auto text-left text-sm sm:table">
        <tbody>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">募集人数</th>
            <td className="px-4 py-3">{guideline.participantsNumber}</td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">対象者</th>
            <td className="px-4 py-3">
              小学２年生&nbsp;～&nbsp;中学２年生のお子様とご家族
              <br className="md:hidden" />
              （全日程において親子２名以上）
            </td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">参加費</th>
            <td className="px-4 py-3">無料（交通費、食事代は自己負担）</td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">参加条件</th>
            <td className="px-4 py-3">
              <ul className="list-disc pl-4 space-y-3">
                <li>
                  ３日間で１つのイベントである為、
                  <br className="md:hidden" />
                  全日程にご参加頂けること
                </li>
                <li>イベントの感想やアンケートにご対応頂けること</li>
                <li>
                  今後のイベント募集、また、スポンサーや
                  <br className="md:hidden" />
                  パートナーの
                  <br className="hidden md:block" />
                  取り組み事例紹介として、
                  <br className="md:hidden" />
                  イベント写真・動画利用の承諾を頂けること
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">注意事項</th>
            <td className="px-4 py-3">
              <ul className="list-disc pl-4 space-y-3">
                <li>
                  受付手続きや会場内の移動を考慮し、
                  <br className="md:hidden" />
                  集合時間は数十分、早くなります。
                </li>
                <li>
                  プログラム初日のクルックフィールズは、
                  <br className="md:hidden" />
                  飲食物のお持ち込みができません。
                </li>
                <li>
                  場内でのお弁当のご購入と、
                  <br className="md:hidden" />
                  マイボトルのご持参をお願いいたします。
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">応募開始</th>
            <td className="font-bold px-4 py-3">{guideline.startDate}</td>
          </tr>
          <tr className="border-b-gray-200 border-b">
            <th className="px-4 py-3">応募締切</th>
            <td className="decoration-4 decoration-orange-400 font-bold px-4 py-3 underline">
              {guideline.deadline}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
