import type { Menu, Submenu } from "@/app/interfaces/menu"
import { HIROSHIMA, TOKYO_CHIBA } from "@/app/lib/constant"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  menu,
  submenus,
  title,
}: Readonly<{
  menu: Menu
  submenus?: Submenu[]
  title?: string
}>): JSX.Element {
  function getTitle(): string {
    if (title) {
      return title
    }
    if (submenus) {
      return submenus[submenus.length - 1].name
    }
    return menu.name
  }

  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb menu={menu} submenus={submenus} title={title} />
      <h1
        className={`fade-in-up font-bold font-zenMaruGothic max-w-fit mx-auto text-4xl ${submenus?.length === 2 ? "text-sky-400" : menu.color}`}
      >
        {getTitle()}
      </h1>
    </section>
  )
}

function Breadcrumb({
  menu,
  submenus,
  title,
}: Readonly<{
  menu: Menu
  submenus?: Submenu[]
  title?: string
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
        <li>
          <menu.icon className={`size-5 mr-1 ${menu.color}`} />
          {menu.name}
        </li>
        {submenus?.map((submenu) =>
          submenu === HIROSHIMA || submenu === TOKYO_CHIBA ? (
            <li key={submenu.name}>
              <Link href={menu.href + submenu.href} className="link">
                {submenu.name}
              </Link>
            </li>
          ) : (
            <li key={submenu.name}>{submenu.name}</li>
          ),
        )}
        {title && <li>{title}</li>}
      </ul>
    </div>
  )
}
