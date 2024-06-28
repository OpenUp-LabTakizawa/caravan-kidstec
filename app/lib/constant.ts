import type {
  Carousel,
  ReviewCarousel,
  ScheduleCarousel,
} from "@/app/interfaces/carousel"
import type { Navigation } from "@/app/interfaces/navigation"
import type { Panel } from "@/app/interfaces/panel"
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
import type { EventInfo } from "../interfaces/eventInfo"

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

export const squareNavigation: Navigation[] = [
  {
    name: "千葉",
    icon: NewspaperIcon,
    color: "text-info",
    href: "/#news",
  },
  {
    name: "広島",
    icon: SparklesIcon,
    color: "text-yellow-400",
    href: "/#about",
  },
  {
    name: "FAQ",
    icon: QuestionMarkCircleIcon,
    color: "text-info",
    content: [...siteInfo],
  },
  {
    name: "イベント",
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
] as const

export const carouselItems: Carousel[] = [
  {
    alt: "プログラミング体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/basic_programming.webp",
  },
  {
    alt: "サップ体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/sea_circle.webp",
  },
  {
    alt: "オリーブ体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/olive_smile.webp",
  },
  {
    alt: "自然学習",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/fallen_a_leaf.webp",
  },
  {
    alt: "ブーケ作成",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/wedding/flower_arrangement.webp",
  },
  {
    alt: "結婚式体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/wedding/wedding_bouquet.webp",
  },
] as const

export const TechPanelItems: Panel[] = [
  {
    alt: "ロボサバ",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/final_stage/course_challenge.webp",
  },
  {
    alt: "はんだ付け",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/soldering.webp",
  },
  {
    alt: "IchigoJam",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/teaching.webp",
  },
  {
    alt: "センサー制御",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/final_stage/course_challenge.webp",
  },
  {
    alt: "ロボット制作",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/sandankyo/checking.webp",
  },
] as const

export const NaturePanelItems: Panel[] = [
  {
    alt: "SUP",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/mega_sap_group.webp",
  },
  {
    alt: "オリーブオイル手作り体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/eda_island/olive_grasp.webp",
  },
  {
    alt: "ロウソク作り",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/candle_making.webp",
  },
  {
    alt: "餅つき",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/making_rice_cake.webp",
  },
  {
    alt: "ブーケ作り",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/wedding/many_flowers.webp",
  },
] as const

export const reviewCarouselItems: ReviewCarousel[] = [
  {
    description:
      "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
    area: "第1回 広島",
    user: "小4",
  },
  {
    description:
      "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
    area: "第1回 広島",
    user: "小5",
  },
  {
    description:
      "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
    area: "第2回 広島",
    user: "小5",
  },
  {
    description:
      "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
    area: "第2回 広島",
    user: "小5、小6",
  },
  {
    description:
      "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
    area: "第2回 広島",
    user: "小6",
  },
  {
    description:
      "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
    area: "第2回 広島",
    user: "小5、中1",
  },
  {
    description:
      "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
    area: "第3回 広島",
    user: "小4",
  },
  {
    description:
      "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
    area: "第3回 広島",
    user: "小5",
  },
  {
    description:
      "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\n\nスタッフの方々が、\n生き生きされていたのが\n印象的で、今回のイベントに\n子どもを参加させて\nよかったです。",
    area: "第3回 広島",
    user: "小4、小6",
  },
  {
    description:
      "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
    area: "第3回 広島",
    user: "小4、中2",
  },
] as const

export const ChibaEvents: EventInfo[] = [
  {
    date: {
      month: "9",
      day: "14",
      weekday: "土",
    },
    venue: {
      name: "クルックフィールズ",
      address: "千葉県木更津市矢那2503",
    },
  },
  {
    date: {
      month: "9",
      day: "21",
      weekday: "土",
    },
    venue: {
      name: "東京虎ノ門グローバルスクエア",
      address: "東京都港区虎ノ門1-3-1",
    },
  },
  {
    date: {
      month: "9",
      day: "22",
      weekday: "日",
    },
    venue: {
      name: "ヴィクトリアガーデン恵比寿迎賓館",
      address: "東京都渋谷区恵比寿南1-14-20",
    },
  },
] as const

export const HiroshimaEvents: EventInfo[] = [
  {
    date: {
      month: "7",
      day: "6",
      weekday: "土",
    },
    venue: {
      name: "広島大学東広島キャンパス",
      address: "広島県東広島市鏡山1-3-2",
    },
  },
  {
    date: {
      month: "7",
      day: "13",
      weekday: "土",
    },
    venue: {
      name: "能美市民センター",
      address: "広島県江田島市能美町中町4859-9",
    },
  },
  {
    date: {
      month: "7",
      day: "20",
      weekday: "土",
    },
    venue: {
      name: "アーククラブ迎賓館福山",
      address: "広島県福山市西町1-6-28",
    },
  },
] as const

export const ChibaCarouselItems: ScheduleCarousel[] = [
  {
    alt: "ロボット制作",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/sandankyo/brothers.webp",
    color: "bg-teal-400",
    title: "午前：ロボット制作\n午後：自然の循環",
    date: "2024年9月14日(土) 10:00~17:00",
    tags: ["ロボット制作", "自然学習"],
  },
  {
    alt: "謎解き体験！",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/content/rays-blog_girl.webp",
    color: "bg-info",
    title: "午前：プログラミング体験\n午後：謎解き体験！",
    date: "2024年9月21日(土) 10:00~17:00",
    tags: ["プログラミング", "情報教育"],
  },
  {
    alt: "ロボサバ大会",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/final_stage/course_challenge.webp",
    color: "bg-rose-400",
    title: "午前：ロボサバ大会\n午後：結婚式体験",
    date: "2024年9月22日(日) 10:00~17:00",
    tags: ["ロボサバ", "結婚式体験"],
  },
] as const

export const HiroshimaCarouselItems: ScheduleCarousel[] = [
  {
    alt: "はんだ付け",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/soldering.webp",
    color: "bg-teal-400",
    title: "前半：ロボット制作\n後半：サマーキャンプ",
    date: "2024年7月6日(土) 10:00~17:00",
    tags: ["ロボット制作", "自然学習"],
  },
  {
    alt: "SUP体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202307/eda_island/sup_on_the_sea.webp",
    color: "bg-info",
    title: "前半：プログラミング体験\n後半：江田島の海でSUP体験",
    date: "2024年7月13日(土) 10:00~17:00",
    tags: ["プログラミング", "自然学習"],
  },
  {
    alt: "結婚式体験",
    src: "https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/202311/wedding/wrapping_bouquet.webp",
    color: "bg-rose-400",
    title: "午前：ロボサバ大会\n午後：結婚式体験",
    date: "2024年7月20日(土) 10:00~17:00",
    tags: ["ロボサバ", "結婚式体験"],
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
