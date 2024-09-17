import { CLOUDFRONT_URL } from "@/app/lib/constant"
import type { JSX } from "react"

export function Video({
  pathname,
  date,
}: Readonly<{
  pathname: string
  date: string
}>): JSX.Element {
  return (
    <video
      controls={true}
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      preload="auto"
      className="mx-auto rounded-2xl shadow-lg w-full"
    >
      <source
        src={`${CLOUDFRONT_URL}/movie${pathname}/${date}.webm`}
        type="video/webm"
      />
      <source
        src={`${CLOUDFRONT_URL}/movie${pathname}/${date}.mp4`}
        type="video/mp4"
      />
      <track
        src={`${CLOUDFRONT_URL}/movie${pathname}/${date}.vtt`}
        kind="captions"
        srcLang="en"
        label="English"
      />
      お使いのブラウザはビデオ対応していません。
    </video>
  )
}
