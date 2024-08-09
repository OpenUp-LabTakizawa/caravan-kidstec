import { NAVIGATION } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center p-4 text-base-content">
      <nav>
        <ul className="grid grid-cols-2 menu p-0 sm:grid-cols-4">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              {menu.submenus.length === 0 ? (
                <Link
                  href={menu.href}
                  className="font-bold link-hover justify-center text-orange-400"
                >
                  {menu.name}
                </Link>
              ) : (
                <>
                  <strong className="justify-center text-orange-400">
                    {menu.name}
                  </strong>
                  <ul>
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.name}>
                        <Link
                          href={menu.href + submenu.href}
                          className="link-hover"
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
      <aside>
        <p className="text-sm">
          Copyright © こどもテックキャラバン 運営事務局&nbsp;
          <br className="block sm:hidden" />
          All rights reserved.
        </p>
      </aside>
    </footer>
  )
}
