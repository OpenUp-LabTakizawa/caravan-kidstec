import type { Menu, MenuPanel, Submenu } from "@/app/interfaces/menu"
import { PARTNER, Q_AND_A, SUPPORTER } from "@/app/lib/constant"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function EventPanels({
  menu,
  submenu,
}: Readonly<{ menu: Menu; submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = getPanels(menu, submenu)

  return (
    <section className="flex gap-4 justify-items-center mr-2 text-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`border-2 group rounded-lg shadow-lg w-full hover:text-white ${panel.color.shadow}`}
        >
          <strong
            className={`mx-auto w-fit group-hover:text-white ${panel.color.text}`}
          >
            {panel.name}
          </strong>
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

export function HistoryPanels({
  menu,
  submenu,
}: Readonly<{ menu: Menu; submenu: Submenu }>): JSX.Element {
  const panels: MenuPanel[] = getPanels(menu, submenu)

  return (
    <section className="flex gap-4 justify-items-center mr-2 text-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`border-2 group rounded-lg shadow-lg w-full hover:text-white ${panel.color.shadow}`}
        >
          <strong
            className={`mx-auto w-fit group-hover:text-white ${panel.color.text}`}
          >
            {panel.name}
          </strong>
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

function getPanels(menu: Menu, submenu: Submenu): MenuPanel[] {
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
  const supporterPanel: MenuPanel = {
    name: SUPPORTER.name,
    color: {
      bg: "bg-teal-400",
      shadow: "box-teal-shadow",
      text: "text-teal-400",
      textHover: "group-hover:text-teal-400",
    },
    href: SUPPORTER.href,
    text: "企画・運営",
  }
  const partnerPanel: MenuPanel = {
    name: PARTNER.name,
    color: {
      bg: "bg-rose-400",
      shadow: "box-rose-shadow",
      text: "text-rose-400",
      textHover: "group-hover:text-rose-400",
    },
    href: PARTNER.href + submenu.href,
    text: submenu.name,
  }

  return [qaPanels, supporterPanel, partnerPanel]
}
