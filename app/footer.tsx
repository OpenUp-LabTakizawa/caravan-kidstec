import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { NAVIGATION } from "./lib/constant.ts"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-stone-200 space-y-2 text-center text-sm">
      <nav>
        <ul className="gap-1 grid grid-cols-3 justify-center mx-auto p-1 w-fit sm:gap-6 sm:grid-cols-5">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="block font-bold px-3 py-1 rounded-xl scale-down-up text-orange-400 hover:bg-gray-300"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="https://www.instagram.com/ktc_caravan/"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto w-fit"
        >
          <Image
            src="/Instagram_Glyph_Gradient.avif"
            width={24}
            height={24}
            alt="こどもテックキャラバン-公式インスタグラム"
          />
        </Link>
      </nav>
      <aside className="pb-2">
        Copyright © こどもテックキャラバン事務局&nbsp;
        <br className="sm:hidden" />
        All rights reserved.
      </aside>
    </footer>
  )
}
