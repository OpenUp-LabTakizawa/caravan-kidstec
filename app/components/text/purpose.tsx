import type React from "react"
import { Divider } from "../layout/divider"

export function Purpose(): React.JSX.Element {
  return (
    <>
      <h3>基本パターン（背景透過率90%、黒文字）</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-xs">
        <div className="hero-overlay bg-gray-50 bg-opacity-90" />
        <div className="hero-content grid text-center">
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
      <h3>パターンA（背景透過率80%、青文字）</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-xs">
        <div className="hero-overlay bg-gray-50 bg-opacity-80" />
        <div className="hero-content grid text-center text-primary">
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
      <h3>パターンB（背景透過率70%、緑文字）</h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-xs">
        <div className="hero-overlay bg-gray-50 bg-opacity-70" />
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
      <Divider />
      <h3>
        パターンC（背景透過率60%、オレンジ文字、テキスト部分に更に薄い背景）
      </h3>
      <section className="hero bg-[url('/handshake.webp')] bg-contain bg-no-repeat text-xs">
        <div className="hero-overlay bg-gray-50 bg-opacity-60" />
        <div className="rounded-box bg-white bg-opacity-60 hero-content grid text-center text-orange-600">
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
