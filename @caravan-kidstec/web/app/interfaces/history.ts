import type { Menu } from "./menu.ts"
import type { EventDate } from "./schedule.ts"

export type History = {
  readonly area: Menu
  readonly history: EventDate[]
  readonly lineLink: string
}
