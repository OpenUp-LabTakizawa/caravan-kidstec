export type Menu = {
  name: string
  href: string
  textColor: string
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
  textColor: string
}
