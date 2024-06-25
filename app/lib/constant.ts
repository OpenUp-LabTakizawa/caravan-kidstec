import type { CardCarousel, Carousel } from "@/app/interfaces/carousel"
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

const area: SiteUrl[] = [
  { name: "広島", href: "/area/hiroshima" },
  { name: "千葉", href: "/area/chiba" },
] as const
const history: SiteUrl[] = [
  { name: "広島", href: "/history/hiroshima" },
] as const
const helper: SiteUrl[] = [
  { name: "企業サポーター", href: "/supporter/company" },
  { name: "千葉パートナー", href: "/partner/chiba" },
  { name: "広島パートナー", href: "/partner/hiroshima" },
] as const
const siteInfo: SiteUrl[] = [
  { name: "FAQ", href: "/contact/faq" },
  { name: "個人情報保護方針", href: "/contact/privacy-policy" },
] as const

export const navigation: Navigation[] = [
  {
    name: "最新情報",
    icon: NewspaperIcon,
    color: "text-info",
    href: "/#news",
  },
  {
    name: "活動紹介",
    icon: SparklesIcon,
    color: "text-yellow-400",
    href: "/#about",
  },
  {
    name: "開催予定",
    icon: TruckIcon,
    color: "text-teal-400",
    content: [...area],
  },
  {
    name: "過去の実績",
    icon: TrophyIcon,
    color: "text-orange-400",
    content: [...history],
  },
  {
    name: "サポーター/パートナー",
    icon: HeartIcon,
    color: "text-rose-400",
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
  },
  {
    name: "teaching",
    alt: "講義中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/teaching.webp",
  },
  {
    name: "girl_boy_river",
    alt: "お魚探し中…",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/girl_boy_river.webp",
  },
  {
    name: "loupe_gather",
    alt: "ロウソク作り",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/loupe_gather.webp",
  },
  {
    name: "olive_grasp",
    alt: "オリーブ体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/olive_grasp.webp",
  },
] as const

export const cardCarouselItems: CardCarousel[] = [
  {
    alt: "ロボット制作",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/soldering.webp",
    category: "イベント",
    title: "前半：ロボット制作\n後半：サマーキャンプ",
    date: "2024年7月6日(土) 10:00~17:00",
    tags: ["広島", "ロボット制作", "自然体験"],
  },
  {
    alt: "プログラミング体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/sup_on_the_sea.webp",
    category: "イベント",
    title: "前半：プログラミング体験\n後半：江田島の海でSUP体験",
    date: "2024年7月13日(土) 10:00~17:00",
    tags: ["広島", "プログラミング", "自然体験"],
  },
  {
    alt: "結婚式体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/wedding/walking_bouquet.webp",
    category: "イベント",
    title: "午前：ロボサバ大会\n午後：結婚式体験",
    date: "2024年7月20日(土) 10:00~17:00",
    tags: ["広島", "ロボサバ", "結婚式体験"],
  },
  {
    alt: "ロボット制作",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/brothers.webp",
    category: "イベント",
    title: "午前：ロボット制作\n午後：自然の循環",
    date: "2024年8月0日(土) 10:00~17:00",
    tags: ["千葉", "ロボット制作", "自然体験"],
  },
  {
    alt: "プログラミング体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/content/rays-blog_girl.webp",
    category: "イベント",
    title: "午前：プログラミング体験\n午後：謎解き体験！",
    date: "2024年8月0日(土) 10:00~17:00",
    tags: ["千葉", "プログラミング", "情報教育"],
  },
  {
    alt: "ロボサバ大会",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/final_stage/course_challenge.webp",
    category: "イベント",
    title: "午前：ロボサバ大会\n午後：結婚式体験",
    date: "2024年9月0日(土) 10:00~17:00",
    tags: ["千葉", "ロボサバ", "結婚式体験"],
  },
] as const

export const ChibaPartners: Partner[] = [
  {
    name: "クルックフィールズ",
    href: "https://kurkkufields.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/kurkkufields_logo.webp",
    introduction:
      "30haの広大な農場を舞台に繰り広げられる、\n消費や食のあり方を「農業」 「食」 「アート」の\n３つのコンテンツを軸に提案する、\nサステナブルファーム＆パーク「KURKKUFIELDS」。\n\n自然やアートに触れる様々なフィールドツアー、\nイベント、施設での宿泊体験などを通じて、\n人間本来の生きる喜びや、いのちのてざわり、\nそして持続可能な社会を実現していくためのヒントを\n共有出来ればと考えています。",
  },
  {
    name: "CLASSROOM ADVENTURE",
    href: "https://www.classroom-adventure.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/classroom-adventure_logo.svg",
    introduction:
      "ワクワクする学びを。 学びのゲーミフィケーション\n(ゲームの要素を活かして楽しく学ぶこと。)に情熱を燃やし、\n情報検証の最前線に立つ慶応義塾大学の\n大学生が運営する団体です。\n\n「レイのブログ」とは真実を見つける力を全ての人へ。\n真実と噓を見分けるスキルを教育する\n今までにないメディアリテラシープログラムです。",
  },
  {
    name: "griteen",
    href: "https://griteen.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/griteen_logo.webp",
    introduction:
      "「griteen」は小学生・中学生の女の子と保護者様が一緒に学ぶ、\n子供向け/大人向けのプログラミングスクールです。\n\n女の子がプログラミングに興味を持つことができるような\n授業を提供し、理系へのハードルを取り払うことをサポートします。\n\n誰もが自ら考え行動することが必要となるこれからの社会で、\n女の子たちが自信を持ち、技術的なスキルとともにやり抜く力\n「Grit」を身につけることで、将来の選択肢が広がります。",
  },
] as const

export const HiroshimaPartners: Partner[] = [
  {
    name: "BPL Inc.",
    href: "https://bplab.biz/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/bpl_logo.svg",
    introduction:
      "株式会社BPLは、ブランディング、経営・マーケティング、\n企画・運営など通して、地域の活性化につながる\n事業活動をおこなっております。\n\nどこにいても、実際に稼げる職業、若者が憧れる職業をつくりを、\n地域全体を活性化していくことで、\nニッポンを元気にしていくことを志命としています。",
  },
  {
    name: "一般社団法人 フウド",
    href: "https://fuudo.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/fuudo_logo.webp",
    introduction:
      "江田島市沖美町の移住交流拠点施設「フウド」を拠点に、\n島内外の人々の“縁”がつながる活動に取り組んでいます。\n\n移住のサポートや交流の場づくりに加え、\nビーチクリーン活動やマリンアクティビティの普及など、\n島の里海環境を生かした活動にも取り組んでいます。",
  },
  {
    name: "広島大学(さんけん部)",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/sanken_club_logo.webp",
    introduction:
      "数多くの自然がある広島大学のキャンパスは、\n自然を学ぶ絶好のフィールドです。\n\n“さんけん”は調査や保全、環境教育を実施する団体です。\n\n皆さんと一緒に広島大学の自然の豊かさについて学びます。",
  },
] as const

export const supporters: Supporter[] = [
  {
    name: "ICHI COMMONS株式会社",
    href: "https://ichicommons.com/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/ichicommons_logo.svg",
    business: "社会課題解決への\nインフラ事業",
    purpose: "サステナビリティ活動で\n企業も、社会も持続可能に",
  },
  {
    name: "株式会社オープンアップグループ",
    href: "https://www.openupgroup.co.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/openup_logo.svg",
    business: "エンジニア派遣事業",
    purpose: "幸せな仕事を通じて\nひとりひとりの可能性を\nひらく社会に",
  },
  {
    name: "株式会社テイクアンドギヴ・ニーズ",
    href: "https://www.tgn.co.jp/",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/logo/take_and_give_needs_logo.svg",
    business: "ホテルウェディング事業",
    purpose: "ホスピタリティ業界に\nイノベーションを起こし\n日本を躍動させる",
  },
] as const
