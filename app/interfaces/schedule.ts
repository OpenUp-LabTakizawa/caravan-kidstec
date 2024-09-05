import type { TilePicture } from "./picture"

export type Schedule = {
  readonly alt: string
  readonly date: {
    readonly year: string
    readonly month: string
    readonly day: string
    readonly dayOfWeek: string
  }
  readonly venue: string
  readonly address: string
  readonly googleMapLink: string
  readonly src: { readonly am: string; readonly pm: string }
  readonly title: { readonly am: string; readonly pm: string }
  readonly organization: { readonly am: string; readonly pm: string }
  readonly url: { readonly am: string; readonly pm: string }
  readonly tags: { readonly am: string[]; readonly pm: string[] }
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
  readonly date: string
  readonly title: string
  readonly programs: Program[]
  readonly pictures: TilePicture[]
}
