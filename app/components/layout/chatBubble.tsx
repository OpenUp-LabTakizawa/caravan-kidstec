import { LineRegister } from "@/app/components/button/lineAddFriends"
import type { QandA } from "@/app/interfaces/qAndA"
import Image from "next/image"
import type { JSX } from "react"

export function ChatBubble({
  lineLink,
  qAndA,
}: Readonly<{ lineLink: string; qAndA: QandA }>): JSX.Element {
  return (
    <details className="bg-amber-50 collapse collapse-arrow mb-2">
      <summary className="collapse-title min-h-0 p-2">
        <div className="chat chat-start flex items-center">
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
          <span className="bg-teal-400 chat-bubble min-h-0 text-black">
            {qAndA.question}
          </span>
        </div>
      </summary>
      <div key={qAndA.answer} className="chat chat-end pb-2">
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
      {qAndA.question === "ロボットを改造しても良いですか？" && (
        <LineRegister lineLink={lineLink} />
      )}
    </details>
  )
}
