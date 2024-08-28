import type { Menu, MenuPanel, Submenu } from "@/app/interfaces/menu"
import { Q_AND_A } from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function EventPanels({
  menu,
  submenu,
}: Readonly<{ menu: Menu; submenu: Submenu }>): JSX.Element {
  const qaPanels: MenuPanel = {
    name: Q_AND_A.name,
    color: {
      bg: "bg-sky-400",
      shadow: "box-sky-shadow",
      text: "text-sky-400",
      textHover: "group-hover:text-sky-400",
    },
    href: menu.href + submenu.href + Q_AND_A.href,
    text: "よくある質問",
  }

  const panels: MenuPanel[] = [qaPanels]

  return (
    <section className="flex mx-auto text-center w-40">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`border-2 group rounded-lg shadow-lg w-full hover:text-white ${panel.color.shadow}`}
        >
          <b
            className={`mx-auto w-fit group-hover:text-white ${panel.color.text}`}
          >
            {panel.name}
          </b>
          <div className="flex">
            <span className="grow">{panel.text}</span>
            <ArrowRightIcon
              className={`arrow-back-right ml-auto rounded-full size-4 text-white group-hover:bg-white ${panel.color.bg} ${panel.color.textHover}`}
            />
          </div>
        </Link>
      ))}
    </section>
  )
}
