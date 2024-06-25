import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading content="開催予定" href="/area/hiroshima" />
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </>
  )
}