import { SlideUp } from "@/app/components/animation/slideUp"
import { Banner } from "@/app/components/layout/banner"
import { Carousel } from "@/app/components/layout/carousel"
import { Navigation } from "@/app/components/layout/navigation"
import { Video } from "@/app/components/media/video"
import type { Panel } from "@/app/interfaces/picture"
import type { Review } from "@/app/interfaces/review"
import { AREA, TOKYO_CHIBA, TOKYO_CHIBA_SCHEDULES } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import {
  ArrowRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  FaceSmileIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Home(): React.JSX.Element {
  const techPanels: Panel[] = [
    {
      alt: "はじめてのはんだづけにどきどき",
      src: "/202207/eda_island/soldering.avif",
    },
    {
      alt: "ロボット作りに挑戦！",
      src: "/202311/eda_island/using_nipper.avif",
      height: "h-12",
    },
    {
      alt: "自分で作った\nロボットの完成！",
      src: "/202311/sandankyo/peace_sign.avif",
    },
    {
      alt: "親子で協力しながら\nプログラミング！\n上手に動くかな？",
      src: "/202311/wedding/mother_check.avif",
      height: "h-20",
    },
    {
      alt: "最終日のロボサバ大会！\n優勝目指そう！",
      src: "/202311/wedding/switch_on.avif",
      height: "h-20",
    },
  ] as const

  const naturePanels: Panel[] = [
    {
      alt: "マリンスポーツで楽しい思い出！",
      src: "/202307/eda_island/mega_sap_group.avif",
    },
    {
      alt: "手作りのオリーブオイル、\n最初はまだ赤い！",
      src: "/202311/eda_island/olive_pouring.avif",
    },
    {
      alt: "三段峡の自然に\n興味津々！",
      src: "/202307/sandankyo/writing.avif",
    },
  ] as const

  const weddingPanels: Panel[] = [
    {
      alt: "蝶ネクタイをつけて入場！　素敵！",
      src: "/202311/wedding/boys_march.avif",
    },
    {
      alt: "ブーケで使うお花選び、\nどれにするか\n決まったかな？",
      src: "/202311/wedding/select_flowers.avif",
      height: "h-20",
    },
    {
      alt: "ラッピングも\n自分で挑戦！",
      src: "/202311/wedding/pouring_water.avif",
      height: "h-20",
    },
  ] as const

  return (
    <article className="grid gap-6 pb-4 text-base text-center">
      <Banner />
      <Carousel />
      <section className="p-4 text-center">
        <SlideUp className="pb-4">
          <Image
            src="/caravan-kidstec_logo_line.avif"
            width={1000}
            height={1000}
            alt="こどもテックキャラバン"
            className="w-full"
          />
        </SlideUp>
        <div className="font-bold grid gap-4 leading-7 tracking-[.29em] sm:col-span-2">
          <p>
            自然豊かな環境を感じる
            <br className="sm:hidden" />
            アクティビティと
            <br />
            ロボット製作とプログラミングを
            <br className="sm:hidden" />
            楽しく学びます。
          </p>
          <p>
            最終日には学んだ知識を使って
            <br />
            ロボットを動かす
            <Link
              href="https://robosava.jp/"
              target="_blank"
              className="link text-sky-400"
            >
              ロボサバ大会
            </Link>
            で<br className="sm:hidden" />
            仲間と競います！
          </p>
          <p>
            最初はプログラミングも
            <br className="sm:hidden" />
            わからない子でも、
            <br />
            ロボットの動きをコントロールする
            <br />
            驚きや楽しさに夢中になります。
          </p>
          <p>女の子でも大丈夫です！</p>
          <p>
            そして、身近に広島の豊かな自然が
            <br />
            あふれていることに驚くはずです。
          </p>
          <p>
            <span className="text-orange-400">楽しむ、学ぶ、競う</span>
            を
            <br />
            満喫するイベントです！
          </p>
        </div>
      </section>
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
        <p className="font-semibold">
          2024年
          <span className="text-xl">{TOKYO_CHIBA_SCHEDULES[0].date[0]}</span>月
          {TOKYO_CHIBA_SCHEDULES.map((schedule, index) => (
            <span key={schedule.alt}>
              <span className="text-xl">{schedule.date[1]}</span>日
              {index === TOKYO_CHIBA_SCHEDULES.length - 1 ? "、" : "・"}
            </span>
          ))}
          <br />
          <span className="text-lg text-rose-400">{TOKYO_CHIBA.name}</span>
          で開催決定！
        </p>
        <Link href={AREA.href + TOKYO_CHIBA.href}>
          <button type="button" className="bg-sky-400 btn text-lg text-white">
            内容・応募はこちら
            <ArrowRightIcon className="arrow-right size-5" />
          </button>
        </Link>
      </section>
      <section className="gap-2 grid grid-cols-2">
        <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-3xl text-orange-400">
          プログラミング体験
        </h2>
        <PanelTile panels={techPanels} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <h2 className="col-span-2 font-bold font-zenMaruGothic text-3xl text-teal-400">
          自然学習
        </h2>
        <PanelTile panels={naturePanels} />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <h2 className="col-span-2 font-bold font-zenMaruGothic text-3xl text-rose-400">
          結婚式体験
        </h2>
        <PanelTile panels={weddingPanels} />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">参加者の声</h2>
        <ReviewCarousel />
      </section>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
      <Navigation />
    </article>
  )
}

function PanelTile({
  panels,
}: Readonly<{ panels: Panel[] }>): React.JSX.Element {
  return (
    <>
      {panels.map((item, index) => (
        <figure key={item.alt} className={`${index === 0 ? "col-span-2" : ""}`}>
          <Image
            loader={cloudfrontLoader}
            src={item.src}
            height={1000}
            width={1000}
            alt={item.alt}
            className="w-full"
          />
          <figcaption
            className={`bg-amber-50 font-bold grid items-center text-center whitespace-pre${item.height ? ` ${item.height}` : ""}`}
          >
            {item.alt}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

function ReviewCarousel(): React.JSX.Element {
  return (
    <>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews />
          <Reviews />
        </div>
      </div>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews2 />
          <Reviews2 />
        </div>
      </div>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews3 />
          <Reviews3 />
        </div>
      </div>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews4 />
          <Reviews4 />
        </div>
      </div>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews5 />
          <Reviews5 />
        </div>
      </div>
      <div className="carousel overflow-hidden p-4 review-scroll-left snap-none space-x-4">
        <div className="flex gap-4">
          <Reviews6 />
          <Reviews6 />
        </div>
      </div>
    </>
  )

  function Reviews(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <FaceSmileIcon className="text-yellow-400 size-6 mr-1" />
                  <ChatBubbleOvalLeftEllipsisIcon className="text-sky-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  function Reviews2(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <FaceSmileIcon className="text-rose-400 size-6 mr-1" />
                  <ChatBubbleOvalLeftEllipsisIcon className="text-sky-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  function Reviews3(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <FaceSmileIcon className="text-yellow-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  function Reviews4(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <FaceSmileIcon className="text-rose-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  function Reviews5(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <UserIcon className="text-sky-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  function Reviews6(): React.JSX.Element {
    const reviews: Review[] = [
      {
        description:
          "ロボットを使った\nプログラミングは、\n子供の興味を惹いて\nとても楽しそうでした。\n\nプログラミングだけでなく\nロボット作成やハンダ付けも\n楽しかったみたいです。\n\n自分一人で作成する\n達成感が味わえる講習が\n良かったのだと思いました。",
        areaAndUser: "第1回 広島 小4",
      },
      {
        description:
          "プログラミング教育が\n小学校で必修となりましたが、\n学校の授業では体験できない\nプログラミングを楽しく学び、\n海・山での自然も同時に\n体験できたことは、\n子供の良い思い出、\n貴重な体験となりました。\nこの夏で子供が少し\n成長できたところを\n身近で見ることができたのは\n親にとっても貴重な体験でした。",
        areaAndUser: "第1回 広島 小5",
      },
      {
        description:
          "プログラミングも\nアクティビティも\n本格的で期待以上でした。\n\nとても良かったので\n他の子にも\n体験させてあげたい。\n\n広島育ちですが、\n江田島、三段峡どちらも\nいったことがなかったので、\n行けて良かったです。",
        areaAndUser: "第2回 広島 小5",
      },
      {
        description:
          "上の子はより\n色々な経験を通して\n自信をもって\n社会と関わりを\n持っていけると感じた。\n\n下の子も新たに興味を\n持てたことがあったり、\n色々な経験が\nできてよかった。",
        areaAndUser: "第2回 広島 小5、小6",
      },
      {
        description:
          "子どもも親も\n色々な経験、\n体験をすることが出来て、\n楽しかったです！！\n\n多くの子供たちに\nこういった体験が\nできることを\n願っています。",
        areaAndUser: "第2回 広島 小6",
      },
      {
        description:
          "ロボサバスタッフや\n広島大学の学生などと\n色々なお話ができて\n子供たちも良い刺激に\nなったようです。\n\n子供たちの興味が\n広がって良い体験が\nできたと思います。",
        areaAndUser: "第2回 広島 小5、中1",
      },
      {
        description:
          "とても有意義な\n体験でした。\n子供だけでなく、\n親も満足できるという、\n他のイベントでは\n経験したことのない\nイベントでした。\n\n次回も是非是非\n参加させて\n頂きたいです。",
        areaAndUser: "第3回 広島 小4",
      },
      {
        description:
          "縁あって\n参加させていただき、\n沢山の経験を\n得ることが出来ました。\n\n学校でははみ出し気味の\n子供が、楽しそうに\n取り組んでいて、\n親としては\n嬉しく見守りました。\n\nありがとうございました。",
        areaAndUser: "第3回 広島 小5",
      },
      {
        description:
          "至れり尽くせりで\n大変驚きました。\n子供だけでなく、\n親も色々と\n学ばせてもらえて\nありがたかったです。\nスタッフの方々が、\n生き生きされて\nいたのが印象的で、\n今回のイベントに\n子どもを参加させて\nよかったです。",
        areaAndUser: "第3回 広島 小4、小6",
      },
      {
        description:
          "子供たち二人共、\nとても充実した\n3日間を過ごせました。\n\nまた次回も\nチャレンジしたいと\n思います！",
        areaAndUser: "第3回 広島 小4、中2",
      },
    ] as const

    return (
      <>
        {reviews.map((item) => (
          <div key={item.description} className="carousel-item rounded-box">
            <div className="bg-amber-50 card shadow-lg w-56 -z-20">
              <UserCircleIcon className="absolute size-full object-cover opacity-20 text-teal-400 -z-10" />
              <div className="card-body p-2">
                <p className="text-sm whitespace-pre">{item.description}</p>
                <p className="flex items-center justify-center text-sm whitespace-pre">
                  <UserIcon className="text-rose-400 size-6 mr-1" />
                  {item.areaAndUser}
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
}
