import type { Menu, Submenu } from "@/app/interfaces/menu"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  menu,
  submenu,
}: Readonly<{ menu: Menu; submenu?: Submenu }>): JSX.Element {
  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb menu={menu} submenu={submenu} />
      <div className="max-w-fit mx-auto">
        <h1
          className={`font-bold font-zenMaruGothic typing text-4xl ${menu.color}`}
        >
          {submenu && menu.submenus?.includes(submenu)
            ? submenu.name
            : menu.name}
        </h1>
      </div>
    </section>
  )
}

function Breadcrumb({
  menu,
  submenu,
}: Readonly<{ menu: Menu; submenu?: Submenu }>): JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-sky-400" />
            ホーム
          </Link>
        </li>
        <li>
          <menu.icon className={`size-5 mr-1 ${menu.color}`} />
          {menu.name}
        </li>
        {submenu && menu.submenus?.includes(submenu) && <li>{submenu.name}</li>}
      </ul>
    </div>
  )
}
