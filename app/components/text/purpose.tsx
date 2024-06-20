import type React from "react"
import { Divider } from "../layout/divider"

export function Purpose(): React.JSX.Element {
  return (
    <>
      <h3>先程のパターンA（文字サイズ小、太さ普通）</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="hero-content grid text-center">
          <p className="">
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
      <h3>先程のパターンC（文字サイズ小、太さ大）</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="font-bold hero-content grid text-center">
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
      <h3>グレーパターンA：rgb(107 114 128)</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="hero-content grid text-center text-gray-500">
          <p className="">
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
      <h3>グレーパターンC：rgb(107 114 128)</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="font-bold hero-content grid text-center text-gray-500">
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
      <h3>グレー2パターンA：rgb(55 65 81)</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="hero-content grid text-center text-gray-700">
          <p className="">
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
      <h3>グレー2パターンC：rgb(55 65 81)</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-sm">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
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
      {/* <Divider />
      <h3>パターンA</h3>
      <section className="text-xs">
        <Image
          src="/handshake.webp"
          alt="handshake"
          width={1000}
          height={1000}
          className="w-full object-contatin opacity-30"
        />
        <div className="grid text-center text-green-600 z-10">
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
      </section> */}
    </>
  )
}
