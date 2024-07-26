import type { ElementType } from "react"

export type Menu = {
  name: string
  icon: ElementType
  color: string
  href: string
  submenus: Submenu[]
}

export type MenuPanel = {
  name: string
  icon: ElementType
  color: string
  href: string
}

export type MenuPanel2 = {
  name: string
  textColor: string
  bgColor: string
  href: string
  text: string
}

export type Submenu = {
  name: string
  href: string
}
