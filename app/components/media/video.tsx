"use client"

import { PlayCircleIcon, StopCircleIcon } from "@heroicons/react/24/outline"
import { type JSX, type RefObject, useRef, useState } from "react"

export function Video({
  pathname,
  controls = true,
}: Readonly<{ pathname: string; controls?: boolean }>): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null)

  function handlePlayState() {
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
        onClick={handlePlayState}
        onKeyDown={handlePlayState}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="group mx-auto rounded-2xl shadow-lg w-full"
      >
        <source
          src={`https://dk75m1tgsot44.cloudfront.net/movie${pathname}.webm`}
          type="video/webm"
        />
        <source
          src={`https://dk75m1tgsot44.cloudfront.net/movie${pathname}.mp4`}
          type="video/mp4"
        />
        <track
          src={`https://dk75m1tgsot44.cloudfront.net/movie${pathname}.vtt`}
          kind="captions"
          srcLang="en"
          label="English"
        />
        お使いのブラウザはビデオ対応していません。
      </video>
      {!controls && (
        <>
          <button
            type="button"
            onClick={handlePlayState}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:block${isPlaying ? " hidden" : ""}`}
          >
            {isPlaying ? (
              <StopCircleIcon className="bg-black/60 size-32 text-white/60" />
            ) : (
              <PlayCircleIcon className="bg-black/60 size-32 text-white/60" />
            )}
          </button>
          {/* <button
          type="button"
          onClick={handlePlayState}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:block${isPlaying ? " hidden" : ""}`}
        >
          {isPlaying ? (
            <StopCircleIcon className="bg-black/60 size-32 text-white/60" />
          ) : (
            <PlayCircleIcon className="bg-black/60 size-32 text-white/60" />
          )}
        </button> */}
        </>
      )}
    </div>
  )
}
