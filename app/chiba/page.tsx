import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import type React from "react"

export default function Chiba(): React.JSX.Element {
  return (
    <article className="grid gap-6 text-center text-xs sm:px-12">
      <Heading content="開催予定" href="/chiba" />
      <Video src="https://caravan-kidstec.s3.ap-northeast-1.amazonaws.com/movie/202312" />
    </article>
  )
}
