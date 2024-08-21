export type Menu = {
  readonly name: string
  readonly href: string
  readonly textColor: string
  readonly submenus: Submenu[]
}

export type MenuPanel = {
  readonly name: string
  readonly color: {
    readonly bg: string
    readonly shadow: string
    readonly text: string
    readonly textHover: string
  }
  readonly href: string
  readonly text: string
}

export type Submenu = {
  readonly name: string
  readonly href: string
  readonly textColor: string
}
