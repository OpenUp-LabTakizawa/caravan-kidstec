import { Heading } from "@/app/components/layout/heading"
import { SECRETARIAT } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Secretariat(): JSX.Element {
  return (
    <>
      <Heading menu={SECRETARIAT} />
      <section className="grid gap-2 text-center">
        <p>
          事務局はSDGs目標の17
          <br />
          「パートナーシップで目標を達成しよう」を
          <br />
          目指しています。
          <br />
          ※国や企業・団体・専門家・個人などが
          <br />
          相互に協力し合うことを示しています。
        </p>
      </section>
    </>
  )
}
