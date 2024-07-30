import { LineRegister } from "@/app/components/button/lineAddFriends"
import type { Faq } from "@/app/interfaces/faq"
import Image from "next/image"
import type { JSX } from "react"

export function ChatBubble({
  lineLink,
  faqs,
}: Readonly<{ lineLink: string; faqs: Faq[] }>): JSX.Element {
  return (
    <>
      {faqs.map((faq) => (
        <>
          <div key={faq.question} className="chat chat-start">
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
            <span className="bg-teal-400 chat-bubble min-h-0 mt-5 text-black">
              {faq.question}
            </span>
          </div>
          <div key={faq.answer} className="chat chat-end">
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
            <span className="bg-orange-400 chat-bubble min-h-0 text-black whitespace-pre">
              {faq.answer}
            </span>
          </div>
          {faq.question === "１年でイベントは何回実施しますか？" && (
            <LineRegister lineLink={lineLink} />
          )}
          {faq.question === "ロボットを改造しても良いですか？" && (
            <LineRegister lineLink={lineLink} />
          )}
        </>
      ))}
    </>
  )
}
