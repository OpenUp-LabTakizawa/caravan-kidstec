import { HIROSHIMA, KANTO, PARTNER, SPECIAL } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"
import styles from "./JapanMap.module.css"

export function JapanMap(): JSX.Element {
  return (
    <section
      className={`leading-3 relative text-center text-gray-700 text-xs before:block before:content-[""] before:pt-[100%] before:md:pt-[80%] md:leading-4 md:text-sm ${styles.japanMap}`}
    >
      <ul aria-label="北海道">
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.hokkaido} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            北海道
          </span> */}
        </li>
      </ul>
      <ul aria-label="東北">
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.aomori} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            青森
          </span> */}
        </li>
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.akita} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            秋田
          </span> */}
        </li>
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.iwate} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            岩手
          </span> */}
        </li>
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.yamagata} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            山形
          </span> */}
        </li>
        <li
          className={`absolute bg-blue-400 border border-white hover:opacity-85 sm:border-2 ${styles.miyagi} ${styles.prefectureBox}`}
        >
          <Link
            href={PARTNER.pathname + SPECIAL.pathname}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          >
            宮城
          </Link>
        </li>
        <li
          className={`absolute bg-blue-400 border border-white sm:border-2 ${styles.fukushima} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            福島
          </span> */}
        </li>
      </ul>
      <ul aria-label="関東">
        <li
          className={`absolute bg-sky-200 border border-white sm:border-2 ${styles.gunma} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            群馬
          </span> */}
        </li>
        <li
          className={`absolute bg-sky-200 border border-white sm:border-2 ${styles.tochigi} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            栃木
          </span> */}
        </li>
        <li
          className={`absolute bg-sky-200 border border-white sm:border-2 ${styles.ibaraki} ${styles.prefectureBox}`}
        >
          <a href="#pref_ibaraki">
            {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              茨城
            </span> */}
          </a>
        </li>
        <li
          className={`absolute bg-sky-200 border border-white sm:border-2 ${styles.saitama} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            埼玉
          </span> */}
        </li>
        <li
          className={`absolute bg-sky-200 border border-white hover:opacity-85 sm:border-2 ${styles.chiba} ${styles.prefectureBox}`}
        >
          <Link
            href={PARTNER.pathname + KANTO.pathname}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          >
            千葉
          </Link>
        </li>
        <li
          className={`absolute bg-sky-200 border border-white hover:opacity-85 sm:border-2 ${styles.tokyo} ${styles.prefectureBox}`}
        >
          <Link
            href={PARTNER.pathname + KANTO.pathname}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          >
            東京
          </Link>
        </li>
        <li
          className={`absolute bg-sky-200 border border-white hover:opacity-85 sm:border-2 ${styles.kanagawa} ${styles.prefectureBox}`}
        >
          <Link
            href={PARTNER.pathname + KANTO.pathname}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          >
            神奈川
          </Link>
        </li>
      </ul>
      <ul aria-label="中部">
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.nigata} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            新潟
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.toyama} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            富山
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.ishikawa} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            石川
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.fukui} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            福井
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.nagano} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            長野
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.gifu} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            岐阜
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.yamanashi} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            山梨
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.aichi} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            愛知
          </span> */}
        </li>
        <li
          className={`absolute bg-green-300 border border-white sm:border-2 ${styles.shizuoka} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            静岡
          </span> */}
        </li>
      </ul>
      <ul aria-label="近畿">
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.kyoto} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            京都
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.shiga} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            滋賀
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.osaka} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            大阪
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.nara} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            奈良
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.mie} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            三重
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.wakayama} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            和歌山
          </span> */}
        </li>
        <li
          className={`absolute bg-amber-300 border border-white sm:border-2 ${styles.hyogo} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            兵庫
          </span> */}
        </li>
      </ul>
      <ul aria-label="中国">
        <li
          className={`absolute bg-pink-300 border border-white sm:border-2 ${styles.tottori} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            鳥取
          </span> */}
        </li>
        <li
          className={`absolute bg-pink-300 border border-white sm:border-2 ${styles.okayama} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            岡山
          </span> */}
        </li>
        <li
          className={`absolute bg-pink-300 border border-white sm:border-2 ${styles.shimane} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            島根
          </span> */}
        </li>
        <li
          className={`absolute bg-pink-300 border border-white hover:opacity-85 sm:border-2 ${styles.hiroshima} ${styles.prefectureBox}`}
        >
          <Link
            href={PARTNER.pathname + HIROSHIMA.pathname}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          >
            広島
          </Link>
        </li>
        <li
          className={`absolute bg-pink-300 border border-white sm:border-2 ${styles.yamaguchi} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            山口
          </span> */}
        </li>
      </ul>
      <ul aria-label="四国">
        <li
          className={`absolute bg-violet-300 border border-white sm:border-2 ${styles.kagawa} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            香川
          </span> */}
        </li>
        <li
          className={`absolute bg-violet-300 border border-white sm:border-2 ${styles.ehime} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            愛媛
          </span> */}
        </li>
        <li
          className={`absolute bg-violet-300 border border-white sm:border-2 ${styles.tokushima} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            徳島
          </span> */}
        </li>
        <li
          className={`absolute bg-violet-300 border border-white sm:border-2 ${styles.kochi} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            高知
          </span> */}
        </li>
      </ul>
      <ul aria-label="九州">
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.fukuoka} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            福岡
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.saga} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            佐賀
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.nagasaki} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            長崎
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.oita} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            大分
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.kumamoto} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            熊本
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.miyazaki} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            宮崎
          </span> */}
        </li>
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.kagoshima} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            鹿児島
          </span> */}
        </li>
      </ul>
      <ul aria-label="沖縄">
        <li
          className={`absolute bg-red-300 border border-white sm:border-2 ${styles.okinawa} ${styles.prefectureBox}`}
        >
          {/* <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            沖縄
          </span> */}
        </li>
      </ul>
    </section>
  )
}
