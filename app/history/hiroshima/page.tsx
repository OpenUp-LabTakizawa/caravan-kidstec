import { Heading } from "@/app/components/layout/heading"
import { LineRegister } from "@/app/components/layout/lineRegister"
import { Video } from "@/app/components/media/video"
import { HISTORY } from "@/app/lib/constant"
import { HIROSHIMA, HIROSHIMA_LINE } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading navigation={HISTORY} content={HIROSHIMA} />
      <h2 className="font-bold font-zenMaruGothic text-3xl">
        第１回&nbsp;2022年6月
      </h2>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202206" />
      <h2 className="font-bold font-zenMaruGothic text-3xl">
        第２回&nbsp;2023年6月
      </h2>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202306" />
      <h2 className="font-bold font-zenMaruGothic text-3xl">
        第３回&nbsp;2023年11月
      </h2>
      <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202311" />
      <LineRegister lineLink={HIROSHIMA_LINE} />
    </>
  )
}
