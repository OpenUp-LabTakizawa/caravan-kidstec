import type { Menu } from "@/app/interfaces/menu"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  menus,
}: Readonly<{
  menus: Menu[]
}>): JSX.Element {
  return (
    <section className="px-4 space-y-6">
      <Breadcrumb menus={menus} />
      <h1
        className={`fade-in-up font-bold font-zenMaruGothic text-4xl text-center ${menus.length === 1 ? menus[0].textColor : menus.at(-1)?.textColor}`}
      >
        {menus.at(-1)?.name}
      </h1>
    </section>
  )
}

function Breadcrumb({
  menus,
}: Readonly<{
  menus: Menu[]
}>): JSX.Element {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/" className="gap-1 underline">
            <HomeIcon className="size-5 text-sky-400" />
            ホーム
          </Link>
        </li>
        {menus.map((menu, index) => (
          <li key={menu.name} className={menu.textColor}>
            {menus.length > 1 && index === 0 ? (
              <Link href={menu.pathname} className="underline">
                {menu.name}
              </Link>
            ) : (
              menu.name
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
