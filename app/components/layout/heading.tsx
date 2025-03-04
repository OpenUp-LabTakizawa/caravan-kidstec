import type { Menu } from "@/app/interfaces/menu"
import { HomeIcon } from "@heroicons/react/24/solid"
import { Link } from "next-view-transitions"
import type { JSX } from "react"
import styles from "./heading.module.css"

export function Heading({ menus }: Readonly<{ menus: Menu[] }>): JSX.Element {
  return (
    <section className="px-3 space-y-6">
      <Breadcrumb menus={menus} />
      <h1
        className={`fade-in-up font-bold font-[family-name:var(--font-zen-maru-gothic)] text-4xl text-center ${menus.length === 1 ? menus[0].textColor : menus.at(-1)?.textColor}`}
      >
        {menus.at(-1)?.name}
      </h1>
    </section>
  )
}

function Breadcrumb({ menus }: Readonly<{ menus: Menu[] }>): JSX.Element {
  return (
    <div
      className={`max-w-full overflow-x-auto py-2 text-sm ${styles.breadcrumbs}`}
    >
      <ul className="flex items-center whitespace-nowrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="button-pop duration-200 ease-out flex items-center gap-1 p-1 rounded-xl underline hover:bg-gray-200"
          >
            <HomeIcon className="size-5 text-sky-400" />
            ホーム
          </Link>
        </li>
        {menus.map((menu, index) => (
          <li key={menu.name} className={`flex items-center ${menu.textColor}`}>
            {menus.length > 1 && index === 0 ? (
              <Link
                href={menu.pathname}
                className="button-pop duration-200 ease-out p-1 rounded-xl underline hover:bg-gray-200"
              >
                {menu.name}
              </Link>
            ) : (
              <span className="p-1">{menu.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
