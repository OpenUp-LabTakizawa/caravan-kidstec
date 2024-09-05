export type Picture = {
  readonly alt: string
  readonly src: string
}

export type TilePicture = {
  readonly alt: string
  readonly name: string
  readonly src: string
}

export type Panel = {
  readonly src: string
  readonly alt: string
  readonly height?: string
}

export type Carousel = {
  readonly alt: string
  readonly src: string
  readonly key: number
}
