import type { Picture } from "./picture.ts"

type DateList = "year" | "month" | "day" | "dayOfWeek"
type TimeList = "am" | "pm"

export type Schedule = {
  readonly date: Record<DateList, string>
  readonly venue: string
  readonly address: string
  readonly googleMapLink: string
  readonly src: Record<TimeList, string>
  readonly alt: Record<TimeList, string>
  readonly title: Record<TimeList, string>
  readonly organization: Record<TimeList, string>
  readonly url: Record<TimeList, string>
  readonly tags: Record<TimeList, string[]>
}

export type Program = {
  readonly date: Record<DateList, string>
  readonly venue: string
}

export type EventDate = {
  readonly date: string
  readonly title: string
  readonly programs: Program[]
  readonly pictures: Picture[]
}
