import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { Menu } from "@/app/interfaces/menu"
import type { QandA } from "@/app/interfaces/qAndA"
import { Q_AND_A } from "@/app/lib/constant"
import Image from "next/image"
import type { JSX } from "react"
import styles from "./qAndA.module.css"

export function QA({
  qAndAs,
  lineLink,
  menu,
}: Readonly<{ qAndAs: QandA[]; lineLink: string; menu: Menu }>): JSX.Element {
  return (
    <>
      <Heading menus={[menu, Q_AND_A]} />
      <section className="px-1 space-y-2">
        {qAndAs.map((qAndA, index) => (
          <details
            key={qAndA.title}
            open={index === 0}
            className={`w-full ${styles.details}`}
          >
            <summary className="block bg-sky-50 p-2 relative rounded-2xl text-base text-center">
              {qAndA.title}
            </summary>
            <div className="bg-sky-50 flex gap-3 items-end mt-2 py-1 rounded-t-2xl">
              <Image
                src="/kai_icon.avif"
                width={32}
                height={32}
                alt="カイ"
                className="object-cover rounded-full w-8 sm:w-10"
              />
              <span
                className={`bg-teal-100 min-w-11 px-4 py-2 relative rounded-2xl rounded-es-none whitespace-pre ${styles.chatStartBubble}`}
              >
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 flex flex-row-reverse gap-3 items-end py-1 rounded-b-2xl">
              <Image
                src="/miku_icon.avif"
                width={32}
                height={32}
                alt="ミク"
                className="object-cover rounded-full -scale-x-100 w-8 sm:w-10"
              />
              <span
                className={`bg-teal-200 min-w-11 px-4 py-2 relative rounded-2xl rounded-ee-none text-black whitespace-pre ${styles.chatEndBubble}`}
              >
                {qAndA.answer}
              </span>
            </div>
          </details>
        ))}
      </section>
      <section className="bg-amber-50 mx-auto p-4 rounded-2xl space-y-2 text-center w-fit">
        <b>
          ご不明な点がございましたら、
          <br />
          LINE公式アカウントへお問い合わせ下さい。
        </b>
        <LineAddFriends linkLink={lineLink} />
      </section>
    </>
  )
}
