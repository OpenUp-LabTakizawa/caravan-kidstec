import type { Menu, Submenu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({
  eventDate,
  menu,
  submenu,
}: Readonly<{
  eventDate?: EventDate
  menu: Menu
  submenu?: Submenu
}>): JSX.Element {
  function getTitle(): string {
    if (eventDate) {
      return eventDate.title
    }
    return submenu && menu.submenus?.includes(submenu)
      ? submenu.name
      : menu.name
  }

  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb menu={menu} submenu={submenu} title={eventDate?.title} />
      <h1
        className={`fade-in-up font-bold font-zenMaruGothic max-w-fit mx-auto text-4xl ${menu.color}`}
      >
        {getTitle()}
      </h1>
    </section>
  )
}

function Breadcrumb({
  menu,
  submenu,
  title,
}: Readonly<{ menu: Menu; submenu?: Submenu; title?: string }>): JSX.Element {
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
        {submenu && menu.submenus?.includes(submenu) && (
          <li>
            <Link href={menu.href + submenu.href}>{submenu.name}</Link>
          </li>
        )}
        {title && <li>{title}</li>}
      </ul>
    </div>
  )
}
