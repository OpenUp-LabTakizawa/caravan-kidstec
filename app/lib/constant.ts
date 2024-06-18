import type { Carousel } from "@/app/interfaces/carousel"
import type { Navigation } from "@/app/interfaces/navigation"
import type { Partner } from "@/app/interfaces/partner"
import type { SiteUrl } from "@/app/interfaces/siteUrl"
import type { Supporter } from "@/app/interfaces/supporter"
import {
  HeartIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrophyIcon,
  TruckIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "こどもテックキャラバン"

const nextArea: SiteUrl[] = [
  { name: "広島", href: "/hiroshima" },
  { name: "千葉", href: "/chiba" },
] as const
const history: SiteUrl[] = [{ name: "広島", href: "/history" }] as const
const helper: SiteUrl[] = [
  { name: "企業サポーター", href: "/supporter" },
  { name: "地域パートナー", href: "/partner" },
] as const
const siteInfo: SiteUrl[] = [
  { name: "FAQ", href: "/faq" },
  { name: "個人情報保護方針", href: "/privacy-policy" },
] as const

export const navigation: Navigation[] = [
  {
    name: "最新情報",
    icon: NewspaperIcon,
    color: "text-primary",
    href: "/#news",
  },
  {
    name: "活動紹介",
    icon: SparklesIcon,
    color: "text-warning",
    href: "/#about",
  },
  {
    name: "開催予定",
    icon: TruckIcon,
    color: "text-accent",
    content: [...nextArea],
  },
  {
    name: "過去の実績",
    icon: TrophyIcon,
    color: "text-error",
    content: [...history],
  },
  {
    name: "サポーター/パートナー",
    icon: HeartIcon,
    color: "text-secondary",
    content: [...helper],
  },
  {
    name: "お問い合わせ",
    icon: QuestionMarkCircleIcon,
    color: "text-info",
    content: [...siteInfo],
  },
] as const

export const carouselItems: Carousel[] = [
  {
    name: "everyone_rowing",
    alt: "メガサップ",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/everyone_rowing.webp",
    title: "こどもテックキャラバン",
    content: {
      first: "広島の都市部・里山里海で\n自然体験を楽しみながら、",
      second: "プログラミングを学ぶ\nマルチ体験プログラムです。",
    },
  },
  {
    name: "teaching",
    alt: "講義中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/teaching.webp",
    title: "ロボット X 自然体験",
    content: {
      first: "ロボット制作や自然体験など\n様々な挑戦ができます。",
      second:
        "苦労を重ねて乗り越えた挑戦は\n一生忘れられない思い出となります。",
    },
  },
  {
    name: "girl_boy_river",
    alt: "お魚探し中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/girl_boy_river.webp",
    title: "好きを見つけよう！",
    content: {
      first: "このイベントが皆様の\n新しい扉となり、",
      second: "扉を開いた先に違う景色が\n見えると幸いです。",
    },
  },
  {
    name: "loupe_gather",
    alt: "ロウソク作り",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/loupe_gather.webp",
    title: "オリジナルロウソク作り",
    content: {
      first: "過去には、様々な色を\n組み合わせた自分だけの、",
      second: "お洒落なロウソクも\n作成しました！",
    },
  },
  {
    name: "olive_grasp",
    alt: "オリーブ体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/olive_grasp.webp",
    title: "オリーブ体験",
    content: {
      first: "オリーブ農家の方から\nオリーブオイルの",
      second: "作り方を丁寧に\n楽しく学びました！",
    },
  },
] as const

export const ChibaPartners: Partner[] = [
  {
    name: "クルックフィールズ",
    href: "https://kurkkufields.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/kurkkufields_logo.webp",
    introduction:
      "30haの広大な農場を舞台に\n繰り広げられる、消費や食のあり方を\n「農業」 「食」 「アート」の\n３つのコンテンツを軸に提案する、\nサステナブルファーム＆パーク\n「KURKKUFIELDS」。\n\n自然やアートに触れる\n様々なフィールドツアー、イベント、\n施設での宿泊体験などを通じて、\n人間本来の生きる喜びや、いのちのてざわり、\nそして持続可能な社会を\n実現していくためのヒントを\n共有出来ればと考えています。",
  },
  {
    name: "ロボサバ",
    href: "https://robosava.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/robot-survival_logo.webp",
    introduction:
      "「つくる」 「学ぶ」 「競う」体験を通して\nクリエイティブな力を育む\n総合プロジェクト“ロボサバ”。\n\nロボット制作やプログラミングの基礎を学び、\nロボット競技大会で腕試し。\nIT教育だけでなく、人との関わりや達成感など、\n子どもが大きく成長できる、\n非常に意義深い企画です。",
  },
  {
    name: "CLASSROOM ADVENTURE",
    href: "https://www.classroom-adventure.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/classroom-adventure_logo.svg",
    introduction:
      "ワクワクする学びを。\n学びのゲーミフィケーション\n(ゲームの要素を活かして楽しく学ぶこと。)に\n情熱を燃やし、情報検証の\n最前線に立つ慶応義塾大学の\n大学生が運営する団体です。\n\n「レイのブログ」とは真実を\n見つける力を全ての人へ。\n\n真実と噓を見分けるスキルを\n教育する今までにない\nメディアリテラシープログラムです。",
  },
  {
    name: "griteen",
    href: "https://griteen.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/griteen_logo.webp",
    introduction:
      "「griteen」は小学生・中学生の\n女の子と保護者様が一緒に学ぶ、\n子供向け/大人向けの\nプログラミングスクールです。\n\n女の子がプログラミングに\n興味を持つことができるような\n授業を提供し、理系へのハードルを\n取り払うことをサポートします。\n\n誰もが自ら考え行動することが\n必要となるこれからの社会で、\n女の子たちが自信を持ち、\n技術的なスキルとともにやり抜く力\n「Grit」を身につけることで、\n将来の選択肢が広がります。",
  },
]

export const HiroshimaPartners: Partner[] = [
  {
    name: "BPL Inc.",
    href: "https://bplab.biz/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/bpl_logo.svg",
    introduction:
      "株式会社BPLは、ブランディング、\n経営・マーケティング、企画・運営など通して、\n地域の活性化につながる事業活動を\nおこなっております。\n\nどこにいても、実際に稼げる職業、\n若者が憧れる職業をつくりを、\n地域全体を活性化していくことで、\nニッポンを元気にしていくことを\n志命としています。\n\n一緒に、地域を盛り上げていきませんか？",
  },
  {
    name: "一般社団法人フウド",
    href: "https://fuudo.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/fuudo_logo.webp",
    introduction:
      "江田島市沖美町の移住交流\n拠点施設「フウド」を拠点に、\n島内外の人々の“縁”がつながる\n活動に取り組んでいます。\n\n移住のサポートや\n交流の場づくりに加え、\nビーチクリーン活動や\nマリンアクティビティの普及など、\n島の里海環境を生かした\n活動にも取り組んでいます。",
  },
  {
    name: "広島大学(さんけん部)",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/sanken_club_logo.webp",
    introduction:
      "数多くの自然がある\n広島大学のキャンパスは、\n自然を学ぶ絶好のフィールドです。\n\n“さんけん”は調査や保全、\n環境教育を実施する団体です。\n\n皆さんと一緒に広島大学の\n自然の豊かさについて学びます。",
  },
  {
    name: "PCN仙台",
    href: "http://sendai.pcn.club/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/pcn-sendai_logo.webp",
    introduction:
      "「つくる」 「学ぶ」 「競う」体験を通して\nクリエイティブな力を育む\n総合プロジェクト“ロボサバ”。\n\nロボット制作やプログラミングの基礎を学び、\nロボット競技大会で腕試し。\nIT教育だけでなく、人との関わりや達成感など、\n子どもが大きく成長できる、\n非常に意義深い企画です。",
  },
]

export const supporters: Supporter[] = [
  {
    name: "ICHI COMMONS株式会社",
    href: "https://ichicommons.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/ichicommons_logo.svg",
    business: "社会課題解決へのインフラ事業",
    purpose: "サステナビリティ活動で\n企業も、社会も持続可能に",
  },
  {
    name: "株式会社オープンアップグループ",
    href: "https://www.openupgroup.co.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/openup_logo.svg",
    business: "エンジニア派遣事業",
    purpose: "幸せな仕事を通じて\nひとりひとりの可能性をひらく社会に",
  },
  {
    name: "株式会社テイクアンドギヴ・ニーズ",
    href: "https://www.tgn.co.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/take_and_give_needs_logo.svg",
    business: "ホテルウェディング事業",
    purpose: "ホスピタリティ業界に\nイノベーションを起こし日本を躍動させる",
  },
]
