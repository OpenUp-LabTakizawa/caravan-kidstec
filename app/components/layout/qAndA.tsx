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
      question: "Q：何歳から参加できますか？",
      answer:
        "A：小学４年生 ～ 中学２年生の\nお子様までが参加対象です。\n対象外の年齢（ご兄弟等）のご参加に関しては、\n一度、ご相談ください。",
    },
    {
      title: "参加人数",
      question: "Q：兄弟姉妹で一緒の参加は可能ですか？",
      answer:
        "A：参加出来ます。\n対象年齢がありますので、一度\nLINE公式アカウントへご相談ください。",
    },
    {
      title: "参加要項",
      question: "Q：子供だけの参加はできますか？",
      answer:
        "A：お子様だけの参加はできません。\n必ず親御様１名以上の\n参加が条件となります。",
    },
    {
      title: "交通費について",
      question: "Q：交通費は支給されますか？",
      answer: "A：お手数ですが、交通費は\n自己負担となっております。",
    },
    {
      title: "参加スケジュールについて",
      question: "Q：１日だけ欠席することは可能ですか？",
      answer: "A：原則、全日程参加が条件となります。",
    },
    {
      title: "天候不良の場合",
      question: "Q：雨が降った場合、当日はどうなりますか？",
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
        "A：基本的には承ることができますが、\n必ず公式アカウントへご相談ください。",
    },
    {
      title: "ロボットについて",
      question: "Q：ロボットを改造しても良いですか？",
      answer: "A：以下の規定を守れば、\n自由に改造できます。",
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
              <span className="bg-teal-200 chat-bubble min-h-0 text-black whitespace-pre">
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
