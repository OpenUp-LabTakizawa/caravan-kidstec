import { NAVIGATION } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center p-4 text-base-content">
      <nav>
        <ul className="grid grid-cols-2 menu p-0 text-sm sm:grid-cols-5">
          {NAVIGATION.map((menu) => (
            <li
              key={menu.name}
              className="flex flex-col flex-wrap items-stretch relative"
            >
              {menu.submenus.length === 0 ? (
                <Link
                  href={menu.pathname}
                  className="font-bold link-hover justify-center text-orange-400"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <b className="justify-center text-orange-400">{menu.name}</b>
                  <ul className="ms-4 ps-2 relative whitespace-nowrap">
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.name}>
                        <Link
                          href={menu.pathname + submenu.pathname}
                          className="link-hover text-nowrap"
                        >
                          {submenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside className="text-center">
        <p className="text-sm">
          Copyright © こどもテックキャラバン事務局&nbsp;
          <br className="block sm:hidden" />
          All rights reserved.
        </p>
      </aside>
    </footer>
  )
}
