import Image from "next/image"
import type React from "react"

export function Purpose(): React.JSX.Element {
  return (
    <section className="bg-base-200 font-semibold grid gap-1 grid-cols-2 items-center p-4 text-sm md:text-xl">
      <div className="grid gap-4">
        <p>
          こどもテックキャラバンでは、
          <br />
          様々な企業や団体が
          <br className="sm:hidden" />
          手を取り合い、
          <br />
          社会課題解決を
          <br className="sm:hidden" />
          目指しています。
        </p>
        <p>
          わたしたちは
          <br className="sm:hidden" />
          関わる全ての人が、
          <br />
          学び、遊び、心
          <br className="sm:hidden" />
          沸き立つような可能性が
          <br />
          広がる社会を期待しています。
        </p>
      </div>
      <Image src="/handshake.webp" width={1000} height={1000} alt="握手" />
    </section>
  )
}
