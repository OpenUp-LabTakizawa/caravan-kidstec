import { Heading } from "@/app/components/layout/heading"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center text-xs sm:px-12">
      <Heading content="開催予定" href="/hiroshima" />
      <video
        width="320"
        height="240"
        controls={true}
        autoPlay={true}
        loop={true}
        muted={true}
        preload="auto"
        className="mx-auto w-full"
      >
        <source
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312.webm"
          type="video/webm"
        />
        <source
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312.mp4"
          type="video/mp4"
        />
        <track
          src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312.vtt"
          kind="captions"
          srcLang="en"
          label="English"
        />
        お使いのブラウザはビデオ対応していません。
      </video>
    </article>
  )
}
