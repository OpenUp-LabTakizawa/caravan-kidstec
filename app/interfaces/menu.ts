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
  color: {
    bg: string
    shadow: string
    text: string
    textHover: string
  }
  href: string
  text: string
}

export type Submenu = {
  name: string
  href: string
}
