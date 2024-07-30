import { AreaLineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { Faq } from "@/app/interfaces/faq"
import {
  FAQ,
  HIROSHIMA,
  HIROSHIMA_LINE,
  HISTORY,
  TOKYO_CHIBA,
  TOKYO_CHIBA_LINE,
} from "@/app/lib/constant"
import Image from "next/image"
import type { JSX } from "react"

export default function Faqs(): JSX.Element {
  const targetUsers: Faq[] = [
    {
      question: "参加者の対象年齢は何歳からでしょうか？",
      answer: "小学４年生 ～ 中学２年生のお子様と\nそのご家族が参加対象です。",
    },
    {
      question: "子供複数人の参加は出来ますか？",
      answer: "参加出来ます。",
    },
    {
      question: "子供だけでも参加出来ますか？",
      answer: "参加出来ません。\n必ず保護者の方１名以上とご参加下さい。",
    },
  ]

  const venueAndParking: Faq[] = [
    {
      question: "会場内は飲食可能ですか？",
      answer:
        "指定された場所での飲食が可能です。\n昼食のご用意はございませんので、\nご自身でご用意下さい。",
    },
    {
      question: "会場内で写真撮影は可能ですか？",
      answer: "イベント会場内は撮影可能です。",
    },
    {
      question: "更衣室はありますか？",
      answer: "イベントによって着替えが\n必要な場合は、用意致します。",
    },
    {
      question: "駐車場はありますか？",
      answer:
        "会場によって異なります。\n会場の駐車場、又は、会場周辺の\nパーキングをご利用ください。",
    },
  ]

  const eventDate: Faq[] = [
    {
      question: "１年でイベントは何回実施しますか？",
      answer:
        "年に数回、実施予定があります。\nLINE公式アカウントを友達登録すると、\n開催通知を受け取れます。",
    },
    {
      question: "イベントの日程は何日間ですか？",
      answer:
        "イベントは基本、３日間です。\n但し、イベント毎に日程は\n変わる可能性はあります。",
    },
    {
      question: "全日程に参加しなくても良いですか？",
      answer: "全日程の参加が原則です。",
    },
    {
      question: "延期や会場変更はありますか？",
      answer:
        "延期や会場変更は原則ありません。\nしかし、天候や災害により、\n中止の場合があります。\nその場合、参加者に当日連絡します。",
    },
  ]

  const changeOrCancel: Faq[] = [
    {
      question: "1日だけ、キャンセル出来ますか？",
      answer:
        "原則出来ません。\nやむを得ない場合は、\nLINE公式アカウントへご連絡下さい。",
    },
    {
      question: "イベント当日に、キャンセル出来ますか？",
      answer: "可能です。\nLINE公式アカウントへ\nご連絡下さい。",
    },
    {
      question: "人数変更は出来ますか？",
      answer:
        "大幅な人数変更は対応出来ません。\nまずは、LINE公式アカウントへ\nご連絡下さい。",
    },
    {
      question: "延期や会場変更はありますか？",
      answer:
        "延期や会場変更は原則ありません。\nしかし、天候や災害により、\n中止の場合があります。\nその場合、参加者に当日連絡します。",
    },
  ]

  const robot: Faq[] = [
    {
      question: "ロボットを改造しても良いですか？",
      answer: "以下の規定を守れば、\n自由に改造出来ます。",
    },
  ]

  const sections = [
    {
      title: "参加対象者",
      faqs: targetUsers,
    },
    {
      title: "会場と駐車場",
      faqs: venueAndParking,
    },
    {
      title: "開催日程",
      faqs: eventDate,
    },
    {
      title: "変更・キャンセル",
      faqs: changeOrCancel,
    },
    {
      title: "ロボット",
      faqs: robot,
    },
  ]

  return (
    <>
      <Heading menu={HISTORY} submenus={[HIROSHIMA, FAQ]} />
      {sections.map((section) => (
        <section
          key={section.title}
          className={`${section.title === "ロボット" ? "pb-4" : ""}`}
        >
          <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-3xl text-center">
            {section.title}
          </h2>
          <ChatBubble faqs={section.faqs} />
        </section>
      ))}
    </>
  )
}

function ChatBubble({ faqs }: Readonly<{ faqs: Faq[] }>): JSX.Element {
  return (
    <>
      {faqs.map((faq) => (
        <>
          <div key={faq.question} className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/kai_icon.avif"
                  width={1000}
                  height={1000}
                  alt="カイ"
                  className="w-full"
                />
              </div>
            </div>
            <span className="bg-teal-400 chat-bubble min-h-0 mt-5 text-black">
              {faq.question}
            </span>
          </div>
          <div key={faq.answer} className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="/miku_icon.avif"
                  width={1000}
                  height={1000}
                  alt="ミク"
                  className="flip-horizontal w-full"
                />
              </div>
            </div>
            <span className="bg-orange-400 chat-bubble min-h-0 text-black whitespace-pre">
              {faq.answer}
            </span>
          </div>
          {faq.question === "１年でイベントは何回実施しますか？" && (
            <div className="flex">
              <AreaLineRegister
                area={TOKYO_CHIBA.name}
                lineLink={TOKYO_CHIBA_LINE}
              />
              <AreaLineRegister
                area={HIROSHIMA.name}
                lineLink={HIROSHIMA_LINE}
              />
            </div>
          )}
          {faq.question === "ロボットを改造しても良いですか？" && (
            <div className="flex">
              <AreaLineRegister
                area={TOKYO_CHIBA.name}
                lineLink={TOKYO_CHIBA_LINE}
              />
              <AreaLineRegister
                area={HIROSHIMA.name}
                lineLink={HIROSHIMA_LINE}
              />
            </div>
          )}
        </>
      ))}
    </>
  )
}
