import { NAVIGATION } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type { JSX } from "react"

export function Footer(): JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center p-4 text-base-content">
      <nav>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 menu p-0">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              {menu.submenus.length === 0 ? (
                <Link href={menu.href} className="font-bold link-hover">
                  <menu.icon className={`size-5 ${menu.color}`} />
                  {menu.name}
                </Link>
              ) : (
                <>
                  <span className="font-bold">
                    <menu.icon className={`size-5 ${menu.color}`} />
                    {menu.name}
                  </span>
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
      <aside className="flex justify-between items-center">
        <p className="text-sm">
          Copyright © Open Up Group Inc. <br className="block sm:hidden" />
          All rights reserved.
        </p>
        <Link
          href="https://github.com/OpenUp-LabTakizawa/caravan-kidstec"
          target="_blank"
        >
          <Image
            src="/github-mark.svg"
            width={24}
            height={24}
            alt="GitHub"
            className="size-8"
          />
        </Link>
      </aside>
    </footer>
  )
}
