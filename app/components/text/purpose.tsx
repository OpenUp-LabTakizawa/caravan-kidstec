import Image from "next/image"
import type React from "react"

export function Purpose(): React.JSX.Element {
  return (
    <section className="hero text-sm max-h-min">
      <Image
        src="/handshake.avif"
        alt="handshake"
        width={1000}
        height={1000}
        className="max-h-48 object-contain opacity-20 -z-10"
      />
      <div className="font-bold hero-content grid text-center text-gray-700">
        <p>
          こどもテックキャラバンでは、
          <br />
          様々な企業や団体が手を取り合い、
          <br />
          社会課題解決を 目指しています。
        </p>
        <p>
          わたしたちは 関わる全ての人が、
          <br />
          学び、遊び、心 沸き立つような可能性が
          <br />
          広がる社会を期待しています。
        </p>
      </div>
    </section>
  )
}
