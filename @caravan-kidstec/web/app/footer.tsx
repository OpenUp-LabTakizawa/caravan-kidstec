import Image from "next/image"
import { Link } from "next-view-transitions"
import type { JSX } from "react"
import { NAVIGATION } from "./lib/constant.ts"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-stone-200 text-center text-sm sm:text-base">
      <nav>
        <ul
          className={`font-bold gap-1 grid justify-center mx-auto p-1 w-fit sm:gap-6 ${NAVIGATION.length === 5 ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4"}`}
        >
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.pathname}
                className="block button-pop px-3 py-1 rounded-xl text-orange-400 hover:bg-gray-300"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <aside className="pb-2 space-y-2">
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
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          こどもテックキャラバン事務局&nbsp;
          <br className="sm:hidden" />
          All rights reserved.
        </p>
      </aside>
    </footer>
  )
}
