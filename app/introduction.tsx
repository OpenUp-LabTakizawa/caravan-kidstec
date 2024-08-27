"use client"

import { type JSX, useEffect } from "react"
import { FadeInUp } from "./components/animation/fadeInUp"

export function Introduction(): JSX.Element {
  let isWebkit = false

  useEffect(() => {
    const userAgent = navigator.userAgent
    isWebkit =
      /\b(iPad|iPhone|iPod)\b/.test(userAgent) &&
      /WebKit/.test(userAgent) &&
      !/Edge/.test(userAgent)
  })

  return (
    <>
      {isWebkit ? (
        <>
          <FadeInUp>
            プログラミング体験と
            <br />
            体験学習をかけあわせた
            <br />
            親子参加型のイベントです。
          </FadeInUp>
          <FadeInUp>
            体験学習は毎回変わります。
            <br />
            過去には自然学習や結婚式体験で
            <br />
            楽しく学んできました。
          </FadeInUp>
          <FadeInUp>
            <span className="text-orange-400">
              たくさん学び、たくさん遊び、
            </span>
            <br />
            親子で新しい発見や、
            <br />
            楽しい思い出を作りましょう！
          </FadeInUp>
        </>
      ) : (
        <>
          <span className="fade-in-up-timeline inline-block opacity-0">
            プログラミング体験は、
            <br />
            ロボットを作って、
            <br />
            自分で動かせるように！
          </span>
          <span className="fade-in-up-timeline inline-block opacity-0">
            体験学習は毎回変わります。
            <br />
            過去には自然学習や結婚式体験で
            <br />
            楽しく学んできました。
          </span>
          <span className="fade-in-up-timeline inline-block opacity-0">
            <span className="text-orange-400">
              たくさん学び、たくさん遊び、
            </span>
            <br />
            親子で新しい発見や、
            <br />
            楽しい思い出を作りましょう！
          </span>
        </>
      )}
    </>
  )
}
