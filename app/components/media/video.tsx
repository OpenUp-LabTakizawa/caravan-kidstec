import type { JSX } from "react"

export function Video({ src }: Readonly<{ src: string }>): JSX.Element {
  return (
    <video
      controls={true}
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
      preload="auto"
      className="mx-auto rounded-box shadow-lg w-full"
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
      <track src={`${src}.vtt`} kind="captions" srcLang="en" label="English" />
      お使いのブラウザはビデオ対応していません。
    </video>
  )
}
