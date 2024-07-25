export type Schedule = {
  alt: string
  src: string
  color: string
  title: string
  date: { month: string; day: string; dayOfWeek: string }
  venue: string
  address: string
  tags: string[]
}

export type EventDate = {
  date: string
  title: string
}
