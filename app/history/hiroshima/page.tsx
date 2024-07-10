import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import { HISTORY } from "@/app/lib/constant"
import { HIROSHIMA } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading navigation={HISTORY} content={HIROSHIMA} />
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202312" />
    </>
  )
}
