import type { Submenu } from "@/app/interfaces/menu"

export type Partner = {
  readonly id: string
  readonly name: string
  readonly href: string
  readonly src: string
  readonly introduction: string
}

export type PartnerArea = {
  readonly color: string
  readonly submenu: Submenu
  readonly partners: Partner[]
}
