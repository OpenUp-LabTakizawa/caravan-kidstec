import type { Route } from "next"
import type { Menu } from "./menu.ts"

export type Partner = {
  readonly name: string
  readonly href: Route
  readonly src: string
  readonly introduction: string
}

type ColorList = "border" | "text"

export type PartnerArea = {
  readonly menu: Menu
  readonly partners: Partner[]
  readonly color: Record<ColorList, string>
}
