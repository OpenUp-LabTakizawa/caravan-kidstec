import type React from "react"

export type Navigation = {
  name: string
  icon: React.ElementType
  color: string
  href: string
  menu: Menu[]
}

export type NavigationPanel = {
  name: string
  icon: React.ElementType
  color: string
  href: string
}

export type Menu = {
  name: string
  href: string
}
