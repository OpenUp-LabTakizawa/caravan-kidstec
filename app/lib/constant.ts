import type { Menu } from "@/app/interfaces/menu"
import type { Partner } from "@/app/interfaces/partner"
import type { Picture } from "@/app/interfaces/picture"
import type { EventDate, Program } from "@/app/interfaces/schedule"

export const SITE_TITLE: string = "こどもテックキャラバン"
export const SITE_URL: string = "https://caravan-kidstec.com"
export const DESCRIPTION: string =
  "プログラミング×体験学習 親子で学ぶ体験型イベント"
export const HIROSHIMA_LINE: string = "https://lin.ee/eYcNlkG"
export const KANTO_LINE: string = "https://lin.ee/RHBWD7P"
export const CLOUDFRONT_URL: string = "https://dk75m1tgsot44.cloudfront.net"

export const HISTORY: Menu = {
  name: "活動実績",
  pathname: "/history",
  textColor: "text-yellow-400",
}
export const SPONSER: Menu = {
  name: "スポンサー",
  pathname: "/sponser",
  textColor: "text-teal-400",
}
export const PARTNER: Menu = {
  name: "パートナー",
  pathname: "/partner",
  textColor: "text-rose-400",
}
export const SECRETARIAT: Menu = {
  name: "事務局",
  pathname: "/secretariat",
  textColor: "text-teal-400",
}
export const SPECIAL: Menu = {
  name: "スペシャル",
  pathname: "/special",
  textColor: "text-rose-400",
}
export const KANTO: Menu = {
  name: "関東",
  pathname: "/kanto",
  textColor: "",
}
export const HIROSHIMA: Menu = {
  name: "広島",
  pathname: "/hiroshima",
  textColor: "",
}
export const Q_AND_A: Menu = {
  name: "Q&A",
  pathname: "/q-and-a",
  textColor: "text-sky-400",
}
export const PRIVACY_POLICY: Menu = {
  name: "個人情報保護方針",
  pathname: "/privacy-policy",
  textColor: "text-orange-400",
}

export const NAVIGATION: Menu[] = [
  HISTORY,
  SPONSER,
  PARTNER,
  SECRETARIAT,
] as const

export const SPECIAL_PARTNERS: Partner[] = [
  {
    name: "ICHI COMMONS",
    href: "https://corp.ichicommons.com/",
    src: "/logo/ichicommons_logo.svg",
    introduction:
      "ICHI COMMONS株式会社は、\n企業やNPO、地域、個人が\n互いを支え合いながら、社会課題の解決に\n取り組むためのプラットフォーム\n『サステナNet』を運営しています。\n\nこのプラットフォームを通じて、\n様々なステークホルダーが出会い、\n事業や社会にプラスの影響を与える\n活動を生み出しています。",
  },
  {
    name: "ロボットサバイバルプロジェクト(ロボサバ)",
    href: "https://robosava.jp/",
    src: "/logo/robosava_logo.avif",
    introduction:
      "「つくる」「学ぶ」「競う」３つの体験を軸に、\n子どもたちのクリエイティブな力を\n育むプロジェクトです。\n（運営：株式会社アイティプロジェクト／PCN仙台）\n\nはんだ付けをしてコンピュータをつくり、\n簡単なプログラムを打ち込んでロボットを動かしたり、\nセンサーを使ったプログラミングや\n電子工作体験などを行っております。\n\n自分でつくったモノをプログラムで動かすことで、\nワクワクと感動を体験することができます。",
  },
] as const

export const KANTO_PARTNERS: Partner[] = [
  {
    name: "クルックフィールズ",
    href: "https://kurkkufields.jp/",
    src: "/logo/kurkkufields_logo.avif",
    introduction:
      "30haの広大な農場を舞台に繰り広げられる、\n消費や食のあり方を「農業」 「食」 「アート」の\n３つのコンテンツを軸に提案する、\nサステナブルファーム＆パーク\n「KURKKUFIELDS」。\n\n自然やアートに触れる様々なフィールドツアー、\nイベント、施設での宿泊体験などを通じて、\n人間本来の生きる喜びや、いのちのてざわり、\nそして持続可能な社会を実現していくための\nヒントを共有出来ればと考えています。",
  },
  {
    name: "Classroom Adventure",
    href: "https://www.classroom-adventure.com/",
    src: "/logo/classroom-adventure_logo.avif",
    introduction:
      "ワクワクする学びを。\n学びのゲーミフィケーション\n(ゲームの要素を活かして楽しく学ぶこと。)に\n情熱を燃やし、情報検証の最前線に立つ\n慶応義塾大学の大学生が運営する団体です。\n\n「レイのブログ」とは\n真実を見つける力を全ての人へ。\n真実と噓を見分けるスキルを教育する\n今までにないメディアリテラシープログラムです。",
  },
  {
    name: "Griteen",
    href: "https://griteen.com/",
    src: "/logo/griteen_logo.avif",
    introduction:
      "「griteen」は小学生・中学生の女の子と\n保護者様が一緒に学ぶ、子供向け/大人向けの\nプログラミングスクールです。\n女の子がプログラミングに興味を持つことが\nできるような授業を提供し、理系へのハードルを\n取り払うことをサポートします。\n\n誰もが自ら考え行動することが必要となる\nこれからの社会で、女の子たちが自信を持ち、\n技術的なスキルとともにやり抜く力「Grit」を\n身につけることで、将来の選択肢が広がります。",
  },
] as const

export const HIROSHIMA_PARTNERS: Partner[] = [
  {
    name: "BPL",
    href: "https://bplab.biz/",
    src: "/logo/bpl_logo.svg",
    introduction:
      "株式会社BPLは、ブランディング、\n経営・マーケティング、企画・運営など通して、\n地域の活性化につながる\n事業活動をおこなっております。\n\nどこにいても、実際に稼げる職業、\n若者が憧れる職業をつくりを、\n地域全体を活性化していくことで、\nニッポンを元気にしていくことを\n志命としています。",
  },
  {
    name: "フウド",
    href: "https://fuudo.jp/",
    src: "/logo/fuudo_logo.avif",
    introduction:
      "江田島市沖美町の移住交流拠点施設\n「フウド」を拠点に、島内外の人々の“縁”が\nつながる活動に取り組んでいます。\n\n移住のサポートや交流の場づくりに加え、\nビーチクリーン活動や\nマリンアクティビティの普及など、\n島の里海環境を生かした活動にも\n取り組んでいます。",
  },
  {
    name: "三段峡-太田川流域研究会（さんけん）",
    href: "https://sanken-hiroshima.org/",
    src: "/logo/sanken_logo.avif",
    introduction:
      "私たちはフィールドの中で生態系を学び、\n自然と人とのかかわりを共に考え、\n一人ひとりの価値や、人と人の繋がりの\nあり方を提案し続けます。\n\n子ども達が『ここ』で\n誇りをもって暮らしていける為に。",
  },
  {
    name: "広島大学さんけん部",
    href: "https://www.instagram.com/hu_sankenbu/",
    src: "/logo/sanken_club_logo.avif",
    introduction:
      "数多くの自然がある広島大学のキャンパスは、\n自然を学ぶ絶好のフィールドです。\n\n“さんけん”は調査や保全、\n環境教育を実施する団体です。\n\n皆さんと一緒に広島大学の\n自然の豊かさについて学びます。",
  },
] as const

const KANTO_FIRST_PROGRAMS: Program[] = [
  {
    date: { year: "2024", month: "10", day: "26", dayOfWeek: "土" },
    venue: "クルックフィールズ",
  },
  {
    date: { year: "2024", month: "11", day: "9", dayOfWeek: "土" },
    venue: "東京虎ノ門グローバルスクエア",
  },
  {
    date: { year: "2024", month: "11", day: "10", dayOfWeek: "日" },
    venue: "アクアテラス迎賓館 新横浜",
  },
] as const

const KANTO_FIRST_PICTURES: Picture[] = [
  {
    alt: "かわいい牛の角にタッチ！",
    src: "/image/kanto/202410/kurkku_fields/touch_cow_horn.avif",
  },
  {
    alt: "お父さんとはんだ付けに挑戦！",
    src: "/image/kanto/202410/kurkku_fields/father_soldering.avif",
  },
  {
    alt: "ロボット走行を友達と皆で採点！",
    src: "/image/kanto/202410/tgn/mark_score.avif",
  },
  {
    alt: "スマートフォンで調べて謎解き",
    src: "/image/kanto/202410/openup/group_investigate.avif",
  },
  {
    alt: "大切な人を想って作るサシェ",
    src: "/image/kanto/202410/tgn/putted_in_the_bag.avif",
  },
  {
    alt: "結婚式場で記念撮影",
    src: "/image/kanto/202410/tgn/weading_gathering.avif",
  },
] as const

export const KANTO_HISTORY: EventDate[] = [
  {
    date: "202410",
    title: "第１回 2024年10月",
    programs: KANTO_FIRST_PROGRAMS,
    pictures: KANTO_FIRST_PICTURES,
  },
]

const HIROSHIMA_FIRST_PROGRAMS: Program[] = [
  {
    date: { year: "2022", month: "6", day: "18", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2022", month: "6", day: "19", dayOfWeek: "日" },
    venue: "イノベーション・ハブ・ひろしまCamps",
  },
  {
    date: { year: "2022", month: "7", day: "2", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2022", month: "7", day: "23", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2022", month: "7", day: "30", dayOfWeek: "土" },
    venue: "イノベーション・ハブ・ひろしまCamps",
  },
] as const
const HIROSHIMA_SECOND_PROGRAMS: Program[] = [
  {
    date: { year: "2023", month: "5", day: "27", dayOfWeek: "木" },
    venue: "ひと・まちプラザ",
  },
  {
    date: { year: "2023", month: "6", day: "3", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2023", month: "6", day: "10", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2023", month: "6", day: "24", dayOfWeek: "土" },
    venue: "ひろぎんホールディングス",
  },
] as const
const HIROSHIMA_THIRD_PROGRAMS: Program[] = [
  {
    date: { year: "2023", month: "11", day: "23", dayOfWeek: "木" },
    venue: "コミュニティスペース「フウド」",
  },
  {
    date: { year: "2023", month: "11", day: "25", dayOfWeek: "土" },
    venue: "三段峡ホテル",
  },
  {
    date: { year: "2023", month: "12", day: "2", dayOfWeek: "土" },
    venue: "アーククラブ迎賓館広島",
  },
] as const
const HIROSHIMA_FOURTH_PROGRAMS: Program[] = [
  {
    date: { year: "2024", month: "7", day: "6", dayOfWeek: "土" },
    venue: "広島大学東広島キャンパス",
  },
  {
    date: { year: "2024", month: "7", day: "13", dayOfWeek: "土" },
    venue: "能美市民センター",
  },
  {
    date: { year: "2024", month: "7", day: "20", dayOfWeek: "土" },
    venue: "アーククラブ迎賓館福山",
  },
] as const

const HIROSHIMA_FIRST_PICTURES: Picture[] = [
  {
    alt: "プログラミング体験",
    src: "/image/hiroshima/202206/sandankyo/initial_screen.avif",
  },
  {
    alt: "家族ではんだ付けに挑戦！",
    src: "/image/hiroshima/202206/sandankyo/soldering_by_mother.avif",
  },
  {
    alt: "採れたての魚をパクリ！",
    src: "/image/hiroshima/202206/sandankyo/eating_char.avif",
  },
  {
    alt: "三段峡で記念撮影！",
    src: "/image/hiroshima/202206/sandankyo/group_peace.avif",
  },
  {
    alt: "三段峡の神秘的な自然に圧倒！",
    src: "/image/hiroshima/202206/sandankyo/magnificent_natural_landscape.avif",
  },
  {
    alt: "サップ体験の準備ができましたか？",
    src: "/image/hiroshima/202206/eda_island/ready_for_sup.avif",
  },
] as const
const HIROSHIMA_SECOND_PICTURES: Picture[] = [
  {
    alt: "正しく取り付け出来るかな？",
    src: "/image/hiroshima/202306/m-plaza/check_parts.avif",
  },
  {
    alt: "メガサップに挑戦！",
    src: "/image/hiroshima/202306/eda_island/rowing_mega_sup.avif",
  },
  {
    alt: "記念の集合写真をパシャリ！",
    src: "/image/hiroshima/202306/eda_island/group_mega_sup.avif",
  },
  {
    alt: "初めてのプログラミング体験",
    src: "/image/hiroshima/202306/sandankyo/thinking_girl.avif",
  },
  {
    alt: "みんなと川下り体験",
    src: "/image/hiroshima/202306/sandankyo/going_downstream.avif",
  },
  {
    alt: "雄大な自然を楽しみながら川下り体験",
    src: "/image/hiroshima/202306/sandankyo/rowing_boat.avif",
  },
] as const
const HIROSHIMA_THIRD_PICTURES: Picture[] = [
  {
    alt: "はんだ付けに興味津々！",
    src: "/image/hiroshima/202311/eda_island/teaching_soldering.avif",
  },
  {
    alt: "三段峡の自然と触れ合う",
    src: "/image/hiroshima/202311/sandankyo/laminate_leaf.avif",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    src: "/image/hiroshima/202311/sandankyo/mochi_pounding.avif",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    src: "/image/hiroshima/202311/wedding/thinking_boy.avif",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    src: "/image/hiroshima/202311/wedding/wraping_flower.avif",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    src: "/image/hiroshima/202311/wedding/group.avif",
  },
] as const
const HIROSHIMA_FOURTH_PICTURES: Picture[] = [
  {
    alt: "はんだ付けに興味津々！",
    src: "/image/hiroshima/202407/hiroshima_university/teaching_soldering_to_girl.avif",
  },
  {
    alt: "三段峡の自然と触れ合う",
    src: "/image/hiroshima/202407/hiroshima_university/looking_for_paper.avif",
  },
  {
    alt: "ぺったんぺったん、餅つき体験！",
    src: "/image/hiroshima/202407/hiroshima_university/pointing_out_map.avif",
  },
  {
    alt: "ロボサバ大会に挑戦中…",
    src: "/image/hiroshima/202407/wedding/judging.avif",
  },
  {
    alt: "結婚式場でフラワーアレンジメント体験！",
    src: "/image/hiroshima/202407/wedding/make_cream.avif",
  },
  {
    alt: "最後に集合写真をパシャリ！",
    src: "/image/hiroshima/202407/wedding/group_with_sofa.avif",
  },
] as const

export const HIROSHIMA_HISTORY: EventDate[] = [
  {
    date: "202206",
    title: "第１回 2022年6月",
    programs: HIROSHIMA_FIRST_PROGRAMS,
    pictures: HIROSHIMA_FIRST_PICTURES,
  },
  {
    date: "202306",
    title: "第２回 2023年6月",
    programs: HIROSHIMA_SECOND_PROGRAMS,
    pictures: HIROSHIMA_SECOND_PICTURES,
  },
  {
    date: "202311",
    title: "第３回 2023年11月",
    programs: HIROSHIMA_THIRD_PROGRAMS,
    pictures: HIROSHIMA_THIRD_PICTURES,
  },
  {
    date: "202407",
    title: "第４回 2024年7月",
    programs: HIROSHIMA_FOURTH_PROGRAMS,
    pictures: HIROSHIMA_FOURTH_PICTURES,
  },
]
