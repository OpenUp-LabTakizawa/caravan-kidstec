"use client"

import { type JSX, useEffect, useState } from "react"
import { FadeInUp } from "./components/animation/fadeInUp"

export function Introduction(): JSX.Element {
  const [isWebkit, setIsWebkit] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isWebkit =
      /\b(iPad|iPhone|iPod)\b/.test(userAgent) &&
      /WebKit/.test(userAgent) &&
      !/Edge/.test(userAgent)
    setIsWebkit(isWebkit)
  })

  return (
    <>
      {isWebkit ? (
        <>
          <FadeInUp>
            <p>
              プログラミング体験と
              <br />
              体験学習をかけあわせた
              <br />
              親子参加型のイベントです。
            </p>
          </FadeInUp>
          <FadeInUp>
            <p>
              体験学習は毎回変わります。
              <br />
              過去には自然学習や結婚式体験で
              <br />
              楽しく学んできました。
            </p>
          </FadeInUp>
          <FadeInUp>
            <p>
              <span className="text-orange-400">
                たくさん学び、たくさん遊び、
              </span>
              <br />
              親子で新しい発見や、
              <br />
              楽しい思い出を作りましょう！
            </p>
          </FadeInUp>
        </>
      ) : (
        <>
          <p className="fade-in-up-timeline opacity-0">
            プログラミング体験は、
            <br />
            ロボットを作って、
            <br />
            自分で動かせるように！
          </p>
          <p className="fade-in-up-timeline opacity-0">
            体験学習は毎回変わります。
            <br />
            過去には自然学習や結婚式体験で
            <br />
            楽しく学んできました。
          </p>
          <p className="fade-in-up-timeline opacity-0">
            <span className="text-orange-400">
              たくさん学び、たくさん遊び、
            </span>
            <br />
            親子で新しい発見や、
            <br />
            楽しい思い出を作りましょう！
          </p>
        </>
      )}
    </>
  )
}
