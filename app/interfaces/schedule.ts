import type { TilePicture } from "./picture"

export type Schedule = {
  readonly alt: string
  readonly src: string
  readonly date: {
    readonly year: string
    readonly month: string
    readonly day: string
    readonly dayOfWeek: string
  }
  readonly am: { title: string; url: string }
  readonly pm: { title: string; url: string }
  readonly venue: string
  readonly address: string
  readonly googleMapLink: string
  readonly tags: string[]
}

export type Program = {
  readonly date: {
    readonly year: string
    readonly month: string
    readonly day: string
    readonly dayOfWeek: string
  }
  readonly venue: string
}

export type EventDate = {
  readonly href: string
  readonly title: string
  readonly programs: Program[]
  readonly pictures: TilePicture[]
}
