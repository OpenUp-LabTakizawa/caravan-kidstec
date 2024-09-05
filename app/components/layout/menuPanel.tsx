import type { Menu, MenuPanel, Submenu } from "@/app/interfaces/menu"
import { PRIVACY_POLICY, Q_AND_A } from "@/app/lib/constant"
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
    href: menu.pathname + submenu.pathname + Q_AND_A.pathname,
    text: "よくある質問",
  }
  const privacyPolicyPanel: MenuPanel = {
    name: PRIVACY_POLICY.name,
    color: {
      bg: "bg-orange-400",
      shadow: "box-orange-shadow",
      text: "text-orange-400",
      textHover: "group-hover:text-orange-400",
    },
    href: menu.pathname + submenu.pathname + PRIVACY_POLICY.pathname,
    text: "プライバシーポリシー",
  }

  const panels: MenuPanel[] = [qaPanels, privacyPolicyPanel]

  return (
    <section className="flex gap-4 justify-center pl-2 pr-4 text-center">
      {panels.map((panel) => (
        <Link
          key={panel.name}
          href={panel.href}
          className={`basis-1/2 border-2 group max-w-52 rounded-lg shadow-lg hover:text-white ${panel.color.shadow}`}
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
