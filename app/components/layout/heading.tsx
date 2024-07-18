import type { Menu, Navigation } from "@/app/interfaces/navigation"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Heading({
  navigation,
  menu,
}: Readonly<{ navigation: Navigation; menu?: Menu }>): React.JSX.Element {
  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb navigation={navigation} menu={menu} />
      <div className="max-w-fit mx-auto">
        {menu && navigation.menu?.includes(menu) ? (
          <h1
            className={`font-bold font-zenMaruGothic typing text-4xl ${navigation.color}`}
          >
            {menu.name}
          </h1>
        ) : (
          <h1
            className={`font-bold font-zenMaruGothic typing text-4xl ${navigation.color}`}
          >
            {navigation.name}
          </h1>
        )}
      </div>
    </section>
  )
}

function Breadcrumb({
  navigation,
  menu,
}: Readonly<{ navigation: Navigation; menu?: Menu }>): React.JSX.Element {
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
          <navigation.icon className={`size-5 mr-1 ${navigation.color}`} />
          {navigation.name}
        </li>
        {menu && navigation.menu?.includes(menu) && <li>{menu.name}</li>}
      </ul>
    </div>
  )
}
