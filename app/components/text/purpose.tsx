import Image from "next/image"
import type React from "react"
import { Divider } from "../layout/divider"

export function Purpose(): React.JSX.Element {
  return (
    <>
      <h3>今まで</h3>
      <section className="bg-base-200 grid gap-1 grid-cols-2 items-center p-4 text-xs">
        <div className="grid gap-4 text-center">
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
        <Image
          src="/handshake.webp"
          width={1000}
          height={1000}
          alt="握手"
          className="w-full max-h-28 object-contain"
        />
      </section>
      <Divider />
      <h3>テキストパターンA</h3>
      <section className="hero bg-[url('/handshake.webp')] text-xs">
        <div className="hero-overlay bg-opacity-80" />
        <div className="hero-content text-center text-neutral-content">
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
      </section>
      <Divider />
      <h3>テキストパターンB</h3>
      <section className="hero bg-[url('/handshake.webp')] text-xs">
        <div className="hero-overlay bg-opacity-80" />
        <div className="hero-content grid text-center text-neutral-content">
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
      <Divider />
      <h3>コンパクトサイズパターン</h3>
      <section className="hero bg-[url('/handshake.webp')] text-xs w-fit mx-auto">
        <div className="hero-overlay bg-opacity-80" />
        <div className="hero-content grid text-center text-neutral-content">
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
      <Divider />
      <h3>カラーパターンA</h3>
      <section className="hero bg-[url('/handshake.webp')] text-xs">
        <div className="h-full w-full bg-orange-100 bg-opacity-80" />
        <div className="hero-content text-center">
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
      </section>
      <Divider />
      <h3>カラーパターンB</h3>
      <section className="hero bg-[url('/handshake.webp')] text-xs">
        <div className="hero-overlay bg-sky-100 bg-opacity-80" />
        <div className="hero-content grid text-center text-green-600">
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
    </>
  )
}
