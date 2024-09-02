"use client"

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"
import { type JSX, type RefObject, useRef, useState } from "react"

export function Video({
  pathname,
  controls = true,
}: Readonly<{ pathname: string; controls?: boolean }>): JSX.Element {
  const [isMute, setIsMute] = useState<boolean>(true)
  const ref: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null)

  function handleClick() {
    if (controls) {
      return
    }
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
        onClick={handleClick}
        onKeyDown={handleClick}
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
            onClick={handleClick}
            className="absolute right-0 rounded-2xl top-0"
          >
            {isMute ? (
              <SpeakerXMarkIcon className="bg-black/60 rounded-2xl size-6 text-white/60 sm:size-8" />
            ) : (
              <SpeakerWaveIcon className="bg-black/60 rounded-2xl size-6 text-white/60 sm:size-8" />
            )}
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="absolute left-1/2 rounded-2xl top-1/2 -translate-x-1/2 -translate-y-1/2 sm:hidden group-hover:sm:block"
          >
            {isMute ? (
              <SpeakerXMarkIcon className="bg-black/60 fade-in-out rounded-2xl size-20 text-white/60 sm:animate-none sm:size-32" />
            ) : (
              <SpeakerWaveIcon className="bg-black/60 fade-in-out rounded-2xl size-20 text-white/60 sm:animate-none sm:size-32" />
            )}
          </button>
        </>
      )}
    </div>
  )
}
