export type Picture = {
  alt: string
  src: string
}

export type Panel = {
  src: string
  alt: string
  height?: string
}

export type TabCarousel = {
  title: string
  pictures: Picture[]
}
