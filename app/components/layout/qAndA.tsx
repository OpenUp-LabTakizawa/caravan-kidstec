import { ChatBubble } from "@/app/components/layout/chatBubble"
import { Heading } from "@/app/components/layout/heading"
import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { QandA } from "@/app/interfaces/qAndA"
import { Q_AND_A } from "@/app/lib/constant"
import type { JSX } from "react"

export function QA({
  lineLink,
  menu,
  submenu,
}: Readonly<{ lineLink: string; menu: Menu; submenu: Submenu }>): JSX.Element {
  const targetUsers: QandA[] = [
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
  ]

  const venueAndParking: QandA[] = [
    {
      title: "会場内での飲食",
      question: "会場内は飲食可能ですか？",
      answer:
        "指定された場所での飲食が可能です。\n昼食のご用意はございませんので、\nご自身でご用意下さい。",
    },
    {
      title: "会場内での写真撮影",
      question: "会場内で写真撮影は可能ですか？",
      answer: "イベント会場内は撮影可能です。",
    },
    {
      title: "更衣室の有無",
      question: "更衣室はありますか？",
      answer: "イベントによって着替えが\n必要な場合は、用意致します。",
    },
    {
      title: "駐車場の有無",
      question: "駐車場はありますか？",
      answer:
        "会場によって異なります。\n会場の駐車場、又は、会場周辺の\nパーキングをご利用ください。",
    },
    {
      title: "食事代と交通費について",
      question: "食事代と交通費は支給されますか？",
      answer: "食事代、交通費共に\n自己負担となります。",
    },
  ]

  const eventDate: QandA[] = [
    {
      title: "イベント実施頻度",
      question: "１年でイベントは何回実施しますか？",
      answer:
        "年に数回、実施予定があります。\nLINE公式アカウントを友達登録すると、\n開催通知を受け取れます。",
    },
    {
      title: "イベントの日数",
      question: "イベントの日数は何日間ですか？",
      answer:
        "イベントは基本、３日間です。\n但し、イベント毎に日程は\n変わる可能性はあります。",
    },
    {
      title: "全日程への参加は必須？",
      question: "全日程に参加しなくても良いですか？",
      answer: "全日程の参加が原則です。",
    },
    {
      title: "日程変更や会場変更について",
      question: "延期や会場変更はありますか？",
      answer:
        "延期や会場変更は原則ありません。\nしかし、天候や災害により、\n中止の場合があります。\nその場合、参加者に当日連絡します。",
    },
  ]

  const changeOrCancel: QandA[] = [
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
  ]

  const robot: QandA[] = [
    {
      title: "ロボットの改造可否",
      question: "ロボットを改造しても良いですか？",
      answer: "以下の規定を守れば、\n自由に改造出来ます。",
    },
  ]

  const sections = [
    {
      title: "参加対象者",
      qAndAs: targetUsers,
    },
    {
      title: "会場と駐車場",
      qAndAs: venueAndParking,
    },
    {
      title: "開催日程",
      qAndAs: eventDate,
    },
    {
      title: "変更・キャンセル",
      qAndAs: changeOrCancel,
    },
    {
      title: "ロボット",
      qAndAs: robot,
    },
  ]

  return (
    <>
      <Heading menu={menu} submenus={[submenu, Q_AND_A]} />
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-2xl text-center">
            {section.title}
          </h2>
          <ChatBubble lineLink={lineLink} qAndAs={section.qAndAs} />
        </section>
      ))}
    </>
  )
}
