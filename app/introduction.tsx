"use client"

import { type JSX, useEffect, useState } from "react"
import { FadeInUp } from "./components/animation/fadeInUp.tsx"

const safariRegex: RegExp = /\b(iPad|iPhone|iPod)\b/
const webkitRegex: RegExp = /WebKit/
const edgeRegex: RegExp = /Edge/

export function Introduction(): JSX.Element {
  const [isWebkit, setIsWebkit] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isWebkit =
      safariRegex.test(userAgent) &&
      webkitRegex.test(userAgent) &&
      !edgeRegex.test(userAgent)
    setIsWebkit(isWebkit)
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
            プログラミング体験は、
            <br />
            ロボットを作って、
            <br />
            自分で動かせるように！
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
          <p className="fade-in-up-timeline opacity-0">
            プログラミング体験と
            <br />
            体験学習をかけあわせた
            <br />
            親子参加型のイベントです。
          </p>
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
            自然学習や社会体験など
            <br />
            学校ではできない特別な体験ができます。
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
