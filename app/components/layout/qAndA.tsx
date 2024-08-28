import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { QandA } from "@/app/interfaces/qAndA"
import { Q_AND_A } from "@/app/lib/constant"
import Image from "next/image"
import type { JSX } from "react"

export function QA({
  qAndAs,
  lineLink,
  menu,
  submenu,
}: Readonly<{
  qAndAs: QandA[]
  lineLink: string
  menu: Menu
  submenu: Submenu
}>): JSX.Element {
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
                    width={32}
                    height={32}
                    alt="カイ"
                    className="w-full"
                  />
                </div>
              </div>
              <span className="bg-teal-100 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.question}
              </span>
            </div>
            <div className="bg-sky-50 chat chat-end rounded-b-2xl">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <Image
                    src="/miku_icon.avif"
                    width={32}
                    height={32}
                    alt="ミク"
                    className="w-full"
                    style={{ transform: "scaleX(-1)" }}
                  />
                </div>
              </div>
              <span className="bg-teal-200 chat-bubble min-h-0 text-black whitespace-pre">
                {qAndA.answer}
              </span>
            </div>
          </details>
        ))}
      </section>
      <section className="bg-amber-50 grid gap-1 mx-auto p-4 text-center w-max">
        <b className="mb-2">
          ご不明な点がございましたら、
          <br />
          LINE公式アカウントへお問い合わせ下さい。
        </b>
        <LineAddFriends linkLink={lineLink} />
      </section>
    </>
  )
}
