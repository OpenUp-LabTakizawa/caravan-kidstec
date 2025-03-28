import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { QandA } from "@/app/interfaces/qAndA"
import { KANTO, KANTO_EVENT, KANTO_LINE, Q_AND_A } from "@/app/lib/constant"
import type { Metadata } from "next"
import Image from "next/image"
import type { JSX } from "react"
import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: `${Q_AND_A.name} - ${KANTO.name}イベント`,
}

export default function QandAs(): JSX.Element {
  const qAndAs: QandA[] = [
    {
      title: "対象年齢",
      question: "Q：何歳から参加できますか？",
      answer:
        "A：小学２年生 ～ 中学２年生\n（ロボットプログラミングの\n対象年齢）までのお子さまがいる\nご家族が対象です。\n自然体験についてはその他の\n年齢のお子さまも参加できます。",
    },
    {
      title: "参加人数",
      question: "Q：兄弟姉妹で一緒の参加は可能ですか？",
      answer:
        "A：参加出来ます。\n対象年齢がありますので、一度\nLINE公式アカウントへご相談ください。",
    },
    {
      title: "子どもだけの参加",
      question: "Q：子どもだけの参加はできますか？",
      answer:
        "A：お子さまだけの参加はできません。\n必ず親御様１名以上の\n参加が条件となります。",
    },
    {
      title: "昼食について",
      question:
        "Q：当日、お弁当やコンビニで\n購入したものを持ち込みできますか？",
      answer:
        "A：クルックフィールズでは\n飲食物の持ち込みができません。\n当日、クルックフィールズが用意する\nお弁当（1100円を予定）の\nご購入をお願いいたします。",
    },
    {
      title: "飲み物について",
      question: "Q：クルックフィールズ内に\n自動販売機はありますか？",
      answer:
        "A：自動販売機のご用意はありません。\nそのため、マイボトルや水筒を\n当日はご持参ください。",
    },
    {
      title: "移動について",
      question: "Q：移動手段の指定はありますか？",
      answer: "A：指定はございません。\nまた、交通費は自己負担となります。",
    },
    {
      title: "全日参加について",
      question: "Q：全日参加が必要ですか？",
      answer: "A：原則、全日程参加が条件となります。",
    },
    {
      title: "天候不良の場合",
      question: "Q：雨が降った場合、\n当日はどうなりますか？",
      answer:
        "A：屋外イベントの場合は、\n屋内でできるイベントに\n振り替える場合もございますが、\n極端な天候不良や災害の場合は、\n中止とさせていただく可能性も\nございますのでご了承ください。\nどちらの場合にもご連絡いたします。",
    },
    {
      title: "キャンセルについて",
      question: "Q：参加確定後のキャンセルはできますか？",
      answer:
        "A：キャンセルを承ることは可能です。\nキャンセルのご連絡は、\n運営上の関係で早めに\nご連絡いただけますと幸いです。",
    },
    {
      title: "人数の変更",
      question: "Q：参加する人数の変更はできますか？",
      answer:
        "A：基本的には承ることができますが、\n必ずLINE公式アカウントにて\nご相談ください。",
    },
  ] as const

  return (
    <>
      <Heading menus={[KANTO_EVENT, Q_AND_A]} />
      <section className="px-1 space-y-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className={`w-full ${styles.details}`}
          >
            <summary className="block bg-sky-50 p-2 relative rounded-2xl text-base text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 flex gap-3 items-end mt-2 py-1 rounded-t-2xl">
              <Image
                src="/kai_icon.avif"
                width={32}
                height={32}
                alt="カイ"
                className="object-cover rounded-full w-8 sm:w-10"
              />
              <span
                className={`bg-teal-100 min-w-11 px-4 py-2 relative rounded-2xl rounded-es-none whitespace-pre ${styles.chatStartBubble}`}
              >
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 flex flex-row-reverse gap-3 items-end py-1 rounded-b-2xl">
              <Image
                src="/miku_icon.avif"
                width={32}
                height={32}
                alt="ミク"
                className="object-cover rounded-full -scale-x-100 w-8 sm:w-10"
              />
              <span
                className={`bg-teal-200 min-w-11 px-4 py-2 relative rounded-2xl rounded-ee-none text-black whitespace-pre ${styles.chatEndBubble}`}
              >
                {qAndA.answer}
              </span>
            </div>
          </details>
        ))}
      </section>
      <section className="bg-amber-50 mx-auto p-4 rounded-2xl space-y-2 text-center w-fit">
        <b>
          ご不明な点がございましたら、
          <br />
          LINE公式アカウントへお問い合わせ下さい。
        </b>
        <LineAddFriends linkLink={KANTO_LINE} />
      </section>
    </>
  )
}
