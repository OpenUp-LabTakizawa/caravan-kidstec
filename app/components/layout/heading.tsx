import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  menu,
  eventDate,
  submenus,
}: Readonly<{
  menu: Menu
  eventDate?: EventDate
  submenus?: Submenu[]
}>): JSX.Element {
  function getTitle(): string {
    if (eventDate) {
      return eventDate.title
    }
    if (submenus) {
      return submenus[submenus.length - 1].name
    }
    return menu.name
  }

  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb menu={menu} submenus={submenus} title={eventDate?.title} />
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
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-sky-400" />
            ホーム
          </Link>
        </li>
        <li>
          <menu.icon className={`size-5 mr-1 ${menu.color}`} />
          {menu.name}
        </li>
        {submenus?.map((submenu, index) =>
          index === submenus.length - 1 ? (
            <li key={submenu.name}>{submenu.name}</li>
          ) : (
            <li key={submenu.name}>
              <Link href={menu.href + submenu.href}>{submenu.name}</Link>
            </li>
          ),
        )}
        {title && <li>{title}</li>}
      </ul>
    </div>
  )
}
