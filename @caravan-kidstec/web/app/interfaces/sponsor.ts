import type { Route } from "next"

export type Sponsor = {
  readonly name: string
  readonly href: Route
  readonly src: string
  readonly business: string
  readonly purpose: string
}
