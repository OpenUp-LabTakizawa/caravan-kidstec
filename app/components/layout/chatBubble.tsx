import { LineRegister } from "@/app/components/button/lineAddFriends"
import type { QandA } from "@/app/interfaces/qAndA"
import Image from "next/image"
import type { JSX } from "react"

export function ChatBubble({
  lineLink,
  qAndAs,
}: Readonly<{ lineLink: string; qAndAs: QandA[] }>): JSX.Element {
  return (
    <>
      {qAndAs.map((qAndA) => (
        <>
          <div key={qAndA.question} className="chat chat-start">
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
              {qAndA.question}
            </span>
          </div>
          <div key={qAndA.answer} className="chat chat-end">
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
              {qAndA.answer}
            </span>
          </div>
          {qAndA.question === "１年でイベントは何回実施しますか？" && (
            <LineRegister lineLink={lineLink} />
          )}
          {qAndA.question === "ロボットを改造しても良いですか？" && (
            <LineRegister lineLink={lineLink} />
          )}
        </>
      ))}
    </>
  )
}
