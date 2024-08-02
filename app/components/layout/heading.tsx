import type { Menu, Submenu } from "@/app/interfaces/menu"
import { HIROSHIMA, TOKYO_CHIBA } from "@/app/lib/constant"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  menu,
  submenus,
}: Readonly<{
  menu: Menu
  submenus?: Submenu[]
}>): JSX.Element {
  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb menu={menu} submenus={submenus} />
      <h1
        className={`fade-in-up font-bold font-zenMaruGothic max-w-fit mx-auto text-4xl ${submenus?.length === 2 ? submenus[1].textColor : menu.textColor}`}
      >
        {submenus ? submenus[submenus.length - 1].name : menu.name}
      </h1>
    </section>
  )
}

function Breadcrumb({
  menu,
  submenus,
}: Readonly<{
  menu: Menu
  submenus?: Submenu[]
}>): JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/" className="link">
            <HomeIcon className="size-5 mr-1 text-sky-400" />
            ホーム
          </Link>
        </li>
        <li className={menu.textColor}>{menu.name}</li>
        {submenus?.map((submenu) =>
          submenu === HIROSHIMA || submenu === TOKYO_CHIBA ? (
            <li key={submenu.name}>
              <Link href={menu.href + submenu.href} className="link">
                {submenu.name}
              </Link>
            </li>
          ) : (
            <li key={submenu.name} className={submenu.textColor}>
              {submenu.name}
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
