import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import { HISTORY } from "@/app/lib/constant"
import { HIROSHIMA } from "@/app/lib/constant"
import type React from "react"

export default function History(): React.JSX.Element {
  return (
    <>
      <Heading content={HISTORY.name} name={HIROSHIMA.name} />
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </>
  )
}
