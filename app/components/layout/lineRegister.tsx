import { LineAddFriends } from "@/app/components/button/lineAddFriends"
import type React from "react"

export function LineRegister({
  lineLink,
}: Readonly<{ lineLink: string }>): React.JSX.Element {
  return (
    <section className="bg-amber-50 grid gap-1 mx-auto p-4 w-max">
      <p className="font-semibold">
        LINE公式アカウントから、
        <br />
        次回開催の通知を受け取れます。
      </p>
      <LineAddFriends linkLink={lineLink} />
    </section>
  )
}
