import { Heading } from "@/app/components/layout/heading"
import { CONTACT, FAQ } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Faq(): JSX.Element {
  return (
    <>
      <Heading menu={CONTACT} submenu={FAQ} />
      <section className="gap-2 grid text-center">
        <h2 className="col-span-2 font-bold font-zenMaruGothic pb-2 text-3xl">
          イベント関連
        </h2>
      </section>
    </>
  )
}
