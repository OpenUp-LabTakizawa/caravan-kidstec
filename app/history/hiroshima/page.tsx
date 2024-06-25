import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type React from "react"

export default function History(): React.JSX.Element {
  return (
    <>
      <Heading content="過去の実績" href="/history/hiroshima" />
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </>
  )
}
