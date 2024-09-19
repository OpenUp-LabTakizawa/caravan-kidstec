import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"
import { NAVIGATION } from "./lib/constant.ts"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center space-y-2 text-center text-base-content">
      <nav>
        <ul className="gap-y-4 grid grid-cols-2 p-2 text-sm sm:grid-cols-5 sm:gap-6">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="font-bold link-hover text-orange-400"
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
        <p className="text-sm">
          Copyright © こどもテックキャラバン事務局&nbsp;
          <br className="block sm:hidden" />
          All rights reserved.
        </p>
      </aside>
    </footer>
  )
}
