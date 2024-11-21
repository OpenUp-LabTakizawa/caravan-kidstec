export type Menu = {
  readonly name: string
  readonly pathname: string
  readonly textColor: string
}

type ColorList = "bg" | "shadow" | "text" | "textHover"

export type MenuPanel = {
  readonly name: string
  readonly color: Record<ColorList, string>
  readonly href: string
  readonly text: string
}
