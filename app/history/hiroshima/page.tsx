import { LineRegister } from "@/app/components/button/lineAddFriends"
import { Heading } from "@/app/components/layout/heading"
import { Video } from "@/app/components/media/video"
import { HISTORY } from "@/app/lib/constant"
import { HIROSHIMA, HIROSHIMA_LINE } from "@/app/lib/constant"
import type React from "react"

export default function Hiroshima(): React.JSX.Element {
  return (
    <>
      <Heading navigation={HISTORY} menu={HIROSHIMA} />
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第１回&nbsp;2022年6月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202206" />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第２回&nbsp;2023年6月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202306" />
      </section>
      <section className="grid gap-4">
        <h2 className="font-bold font-zenMaruGothic text-3xl">
          第３回&nbsp;2023年11月
        </h2>
        <Video src="https://dk75m1tgsot44.cloudfront.net/movie/202311" />
      </section>
      <section className="grid gap-4">
        <LineRegister lineLink={HIROSHIMA_LINE} />
      </section>
    </>
  )
}
