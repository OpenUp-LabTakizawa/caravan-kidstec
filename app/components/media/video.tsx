"use client"

import {
  PlayCircleIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  StopCircleIcon,
} from "@heroicons/react/24/outline"
import { type JSX, type RefObject, useRef, useState } from "react"

export function Video({
  pathname,
  controls = true,
}: Readonly<{ pathname: string; controls?: boolean }>): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMute, setIsMute] = useState<boolean>(true)
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

  function handleSoundState() {
    const video = ref.current as HTMLVideoElement
    const nextIsMute = !isMute
    setIsMute(nextIsMute)

    if (nextIsMute) {
      video.muted = true
    } else {
      video.muted = false
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
            className={`absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:sm:block${isPlaying ? " hidden" : ""}`}
          >
            {isPlaying ? (
              <StopCircleIcon className="bg-black/60 size-20 text-white/60 sm:size-32" />
            ) : (
              <PlayCircleIcon className="bg-black/60 size-20 text-white/60 sm:size-32" />
            )}
          </button>
          <button
            type="button"
            onClick={handleSoundState}
            className={`absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:sm:block${isPlaying ? " hidden" : ""}`}
          >
            {isMute ? (
              <SpeakerWaveIcon className="bg-black/60 size-20 text-white/60 sm:size-32" />
            ) : (
              <SpeakerXMarkIcon className="bg-black/60 size-20 text-white/60 sm:size-32" />
            )}
          </button>
        </>
      )}
    </div>
  )
}
