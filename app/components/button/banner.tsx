"use client"

import { EVENT, TOKYO_CHIBA, TOKYO_CHIBA_DEADLINE } from "@/app/lib/constant"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { type JSX, type RefObject, useEffect, useRef } from "react"

export function Banner(): JSX.Element {
  const daysRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)
  const hoursRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)
  const minutesRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)
  const secondsRef: RefObject<HTMLSpanElement> = useRef<HTMLSpanElement>(null)
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
    daysRef.current?.style.setProperty("--value", String(daysCounter))
    hoursRef.current?.style.setProperty("--value", String(hoursCounter))
    minutesRef.current?.style.setProperty("--value", String(minutesCounter))
    secondsRef.current?.style.setProperty("--value", String(secondsCounter))
    if (
      secondsCounter === 0 &&
      minutesCounter === 0 &&
      hoursCounter === 0 &&
      daysCounter === 0
    ) {
      return
    }

    const interval = setInterval(() => {
      secondsCounter = secondsCounter === 0 ? 59 : secondsCounter - 1
      secondsRef.current?.style.setProperty("--value", String(secondsCounter))

      if (minutesCounter === 0 && hoursCounter === 0 && daysCounter === 0) {
        return
      }
      if (secondsCounter === 59) {
        minutesCounter = minutesCounter === 0 ? 59 : minutesCounter - 1
        minutesRef.current?.style.setProperty("--value", String(minutesCounter))
      }

      if (hoursCounter === 0 && daysCounter === 0) {
        return
      }
      if (secondsCounter === 59 && minutesCounter === 59) {
        hoursCounter = hoursCounter === 0 ? 23 : hoursCounter - 1
        hoursRef.current?.style.setProperty("--value", String(hoursCounter))
      }

      if (
        secondsCounter === 59 &&
        minutesCounter === 59 &&
        hoursCounter === 23 &&
        0 < daysCounter
      ) {
        daysCounter--
        daysRef.current?.style.setProperty("--value", String(daysCounter))
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <Link
      href={EVENT.href + TOKYO_CHIBA.href}
      className="bg-sky-300 overflow-hidden"
    >
      <p className="banner inline-flex items-center text-nowrap">
        【新着情報】
        <strong className="text-orange-400">{TOKYO_CHIBA.name}</strong>
        で参加者を募集中！&nbsp;応募期限は
        <strong>{TOKYO_CHIBA_DEADLINE}</strong>
        まで&nbsp;
        <ArrowTopRightOnSquareIcon className="size-5" />
      </p>
      <div className="flex gap-3 max-w-fit mx-auto">
        <div>
          応募期限残り
          <span className="countdown font-mono ml-2 text-4xl">
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
