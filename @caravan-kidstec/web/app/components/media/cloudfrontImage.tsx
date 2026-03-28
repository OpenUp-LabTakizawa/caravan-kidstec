"use client"

import Image, { type ImageProps } from "next/image"
import type { JSX } from "react"
import { cloudfrontLoader } from "@/app/lib/loader"

export function CloudfrontImage(
  props: Readonly<Omit<ImageProps, "loader">>,
): JSX.Element {
  return <Image loader={cloudfrontLoader} {...props} />
}
