"use client"

import { AREA, TOKYO_CHIBA } from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { type MutableRefObject, useEffect, useRef } from "react"

export function Banner() {
  const daysRef: MutableRefObject<HTMLSpanElement> =
    useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const hoursRef: MutableRefObject<HTMLSpanElement> =
    useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const minutesRef: MutableRefObject<HTMLSpanElement> =
    useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const secondsRef: MutableRefObject<HTMLSpanElement> =
    useRef<HTMLSpanElement>() as MutableRefObject<HTMLSpanElement>
  const applyLimitDate: Date = new Date("2024-08-31")
  const differenceInMilliseconds =
    applyLimitDate.getTime() - new Date().getTime()
  const differenceInSeconds = differenceInMilliseconds / 1000
  const differenceInMinutes = differenceInSeconds / 60
  const differenceInHours = differenceInMinutes / 60
  const differenceInDays = differenceInHours / 24

  let secondsCounter = Math.floor(differenceInSeconds % 60)
  let minutesCounter = Math.floor(differenceInMinutes % 60)
  let hoursCounter = Math.floor(differenceInHours % 24)
  let daysCounter = Math.floor(differenceInDays)

  useEffect(() => {
    daysRef.current.style.setProperty("--value", String(daysCounter))
    hoursRef.current.style.setProperty("--value", String(hoursCounter))
    minutesRef.current.style.setProperty("--value", String(minutesCounter))
    secondsRef.current.style.setProperty("--value", String(secondsCounter))

    const interval = setInterval(() => {
      secondsCounter = secondsCounter === 0 ? 60 : secondsCounter - 1
      if (secondsCounter === 0 && 0 < minutesCounter) {
        minutesCounter--
      }
      secondsRef.current.style.setProperty("--value", String(secondsCounter))

      minutesCounter = minutesCounter < 0 ? 60 : minutesCounter
      if (minutesCounter === 0 && 0 < hoursCounter) {
        hoursCounter--
      }
      minutesRef.current.style.setProperty("--value", String(minutesCounter))

      hoursCounter = hoursCounter < 0 ? 24 : hoursCounter
      if (hoursCounter === 0 && 0 < daysCounter) {
        daysCounter--
      }
      hoursRef.current.style.setProperty("--value", String(hoursCounter))
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <Link
      href={AREA.href + TOKYO_CHIBA.href}
      className="bg-sky-400 overflow-hidden"
    >
      <p className="banner flex items-center text-nowrap">
        【新着情報】<strong className={AREA.color}>{TOKYO_CHIBA.name}</strong>
        エリアで募集中！
        <ArrowTopRightOnSquareIcon className="size-5" />
      </p>
      <div className="flex gap-5 mx-auto max-w-fit">
        <div>
          応募期限残り
          <span className="countdown font-mono mx-2 text-4xl">
            <span ref={daysRef} />
          </span>
          日
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span ref={hoursRef} />
          </span>
          時
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span ref={minutesRef} />
          </span>
          分
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span ref={secondsRef} />
          </span>
          秒
        </div>
      </div>
    </Link>
  )
}
