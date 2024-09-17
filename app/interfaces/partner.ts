import type { Submenu } from "./menu.ts"

export type Partner = {
  readonly name: string
  readonly href: string
  readonly src: string
  readonly introduction: string
}

export type PartnerArea = {
  readonly submenu: Submenu
  readonly partners: Partner[]
  readonly color: {
    border: string
    text: string
  }
}
