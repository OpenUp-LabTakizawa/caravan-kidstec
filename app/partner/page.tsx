import { Heading } from "@/app/components/layout/heading"
import type React from "react"

export default function Partner(): React.JSX.Element {
  return (
    <article className="grid gap-6 sm:px-12">
      <Heading content="サポーター/パートナー" href="/partner" />
      <section className="bg-base-200 grid gap-6 p-4">
        <h2 className="font-bold text-2xl text-center">広島エリア</h2>
      </section>
    </article>
  )
}
