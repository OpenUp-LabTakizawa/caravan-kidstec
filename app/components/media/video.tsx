"use client"

import { PlayCircleIcon, StopCircleIcon } from "@heroicons/react/24/outline"
import { type JSX, type RefObject, useRef, useState } from "react"

export function Video({
  src,
  controls = true,
}: Readonly<{ src: string; controls?: boolean }>): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      ref.current?.play()
    } else {
      ref.current?.pause()
    }
  }

  return (
    <div className="group relative">
      <video
        ref={ref}
        controls={controls}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        preload="auto"
        onClick={handleClick}
        onKeyDown={handleClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="group mx-auto rounded-2xl shadow-lg w-full"
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
        <track
          src={`${src}.vtt`}
          kind="captions"
          srcLang="en"
          label="English"
        />
        お使いのブラウザはビデオ対応していません。
      </video>
      {!controls && (
        <button
          type="button"
          onClick={handleClick}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:block${isPlaying ? " hidden" : ""}`}
        >
          {isPlaying ? (
            <StopCircleIcon className="size-32 text-orange-400" />
          ) : (
            <PlayCircleIcon className="size-32 text-orange-400" />
          )}
        </button>
      )}
    </div>
  )
}
