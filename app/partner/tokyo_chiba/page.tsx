import { Heading } from "@/app/components/layout/heading"
import type { Partner } from "@/app/interfaces/partner"
import { PARTNER, TOKYO_CHIBA } from "@/app/lib/constant"
import { Partners } from "@/app/partner/partners"
import type { JSX } from "react"

export default function TokyoChiba(): JSX.Element {
  const partners: Partner[] = [
    {
      name: "クルックフィールズ",
      href: "https://kurkkufields.jp/",
      src: "/logo/kurkkufields_logo.avif",
      introduction:
        "30haの広大な農場を舞台に繰り広げられる、\n消費や食のあり方を「農業」 「食」 「アート」の\n３つのコンテンツを軸に提案する、\nサステナブルファーム＆パーク「KURKKUFIELDS」。\n\n自然やアートに触れる様々なフィールドツアー、\nイベント、施設での宿泊体験などを通じて、\n人間本来の生きる喜びや、いのちのてざわり、\nそして持続可能な社会を実現していくためのヒントを\n共有出来ればと考えています。",
    },
    {
      name: "CLASSROOM ADVENTURE",
      href: "https://www.classroom-adventure.com/",
      src: "/logo/classroom-adventure_logo.svg",
      introduction:
        "ワクワクする学びを。 学びのゲーミフィケーション\n(ゲームの要素を活かして楽しく学ぶこと。)に情熱を燃やし、\n情報検証の最前線に立つ慶応義塾大学の\n大学生が運営する団体です。\n\n「レイのブログ」とは真実を見つける力を全ての人へ。\n真実と噓を見分けるスキルを教育する\n今までにないメディアリテラシープログラムです。",
    },
    {
      name: "griteen",
      href: "https://griteen.com/",
      src: "/logo/griteen_logo.avif",
      introduction:
        "「griteen」は小学生・中学生の女の子と保護者様が一緒に学ぶ、\n子供向け/大人向けのプログラミングスクールです。\n\n女の子がプログラミングに\n興味を持つことができるような授業を提供し、\n理系へのハードルを取り払うことをサポートします。\n\n誰もが自ら考え行動することが必要となるこれからの社会で、\n女の子たちが自信を持ち、技術的なスキルとともにやり抜く力\n「Grit」を身につけることで、将来の選択肢が広がります。",
    },
  ] as const

  return (
    <>
      <Heading menu={PARTNER} submenu={TOKYO_CHIBA} />
      <Partners partners={partners} />
    </>
  )
}
