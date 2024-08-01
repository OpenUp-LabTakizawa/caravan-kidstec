import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { QandA } from "@/app/interfaces/qAndA"
import { Q_AND_A } from "@/app/lib/constant"
import Image from "next/image"
import type { JSX } from "react"

export function QA({
  lineLink,
  menu,
  submenu,
}: Readonly<{ lineLink: string; menu: Menu; submenu: Submenu }>): JSX.Element {
  const qAndAs: QandA[] = [
    {
      title: "対象年齢",
      question: "参加者の対象年齢は何歳からでしょうか？",
      answer: "小学４年生 ～ 中学２年生のお子様と\nそのご家族が参加対象です。",
    },
    {
      title: "参加人数",
      question: "子供複数人の参加は出来ますか？",
      answer: "参加出来ます。",
    },
    {
      title: "子供だけの参加可否",
      question: "子供だけでも参加出来ますか？",
      answer: "参加出来ません。\n必ず保護者の方１名以上とご参加下さい。",
    },
    {
      title: "食事代と交通費について",
      question: "食事代と交通費は支給されますか？",
      answer: "食事代、交通費共に\n自己負担となります。",
    },
    {
      title: "全日程に参加は必須？",
      question: "全日程に参加しなくても良いですか？",
      answer: "全日程の参加が原則です。",
    },
    {
      title: "日程変更や会場変更について",
      question: "延期や会場変更はありますか？",
      answer:
        "延期や会場変更は原則ありません。\nしかし、天候や災害により、\n中止の場合があります。\nその場合、参加者に当日連絡します。",
    },
    {
      title: "キャンセルについて",
      question: "1日だけ、キャンセル出来ますか？",
      answer:
        "原則出来ません。\nやむを得ない場合は、\nLINE公式アカウントへご連絡下さい。",
    },
    {
      title: "当日のキャンセル連絡",
      question: "イベント当日に、キャンセル出来ますか？",
      answer: "可能です。\nLINE公式アカウントへ\nご連絡下さい。",
    },
    {
      title: "参加者の人数変更",
      question: "人数変更は出来ますか？",
      answer:
        "大幅な人数変更は対応出来ません。\nまずは、LINE公式アカウントへ\nご連絡下さい。",
    },
    {
      title: "ロボットの改造可否",
      question: "ロボットを改造しても良いですか？",
      answer: "以下の規定を守れば、\n自由に改造出来ます。",
    },
  ] as const

  return (
    <>
      <Heading menu={menu} submenus={[submenu, Q_AND_A]} />
      <section className="grid gap-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className="collapse collapse-arrow"
          >
            <summary className="bg-sky-50 collapse-title min-h-0 pl-16 rounded-2xl text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 chat chat-start flex items-center mt-2 rounded-t-2xl">
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
              <span className="bg-teal-100 chat-bubble min-h-0 text-black">
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 chat chat-end rounded-b-2xl">
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
              <span className="bg-sky-100 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.answer}
              </span>
            </div>
            {qAndA.question === "ロボットを改造しても良いですか？" &&
              "修正中..."}
          </details>
        ))}
      </section>
      <section className="grid gap-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className="collapse collapse-arrow"
          >
            <summary className="bg-sky-50 collapse-title min-h-0 pl-16 rounded-2xl text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 chat chat-start flex items-center mt-2 rounded-t-2xl">
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
              <span className="bg-teal-200 chat-bubble min-h-0 text-black">
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 chat chat-end rounded-b-2xl">
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
              <span className="bg-sky-200 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.answer}
              </span>
            </div>
            {qAndA.question === "ロボットを改造しても良いですか？" &&
              "修正中..."}
          </details>
        ))}
      </section>
      <section className="grid gap-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className="collapse collapse-arrow"
          >
            <summary className="bg-sky-50 collapse-title min-h-0 pl-16 rounded-2xl text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 chat chat-start flex items-center mt-2 rounded-t-2xl">
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
              <span className="bg-teal-300 chat-bubble min-h-0 text-black">
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 chat chat-end rounded-b-2xl">
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
              <span className="bg-sky-300 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.answer}
              </span>
            </div>
            {qAndA.question === "ロボットを改造しても良いですか？" &&
              "修正中..."}
          </details>
        ))}
      </section>
      <section className="grid gap-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className="collapse collapse-arrow"
          >
            <summary className="bg-sky-50 collapse-title min-h-0 pl-16 rounded-2xl text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 chat chat-start flex items-center mt-2 rounded-t-2xl">
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
              <span className="bg-teal-400 chat-bubble min-h-0 text-black">
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 chat chat-end rounded-b-2xl">
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
              <span className="bg-sky-400 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.answer}
              </span>
            </div>
            {qAndA.question === "ロボットを改造しても良いですか？" &&
              "修正中..."}
          </details>
        ))}
      </section>
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 text-center w-max">
        <strong className="mb-2">
          ご不明な点がございましたら、
          <br />
          LINE公式アカウントへお問い合わせ下さい。
        </strong>
        <LineAddFriends linkLink={lineLink} />
      </section>
    </>
  )
}
