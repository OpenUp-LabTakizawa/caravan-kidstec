import { Breadcrumb } from "@/app/components/layout/breadcrumb"
import type { Navigation } from "@/app/interfaces/navigation"
import { navigation } from "@/app/lib/constant"
import type React from "react"

export function Heading({
  content,
  href,
}: Readonly<{ content: string; href: string }>): React.JSX.Element {
  const crumb: Navigation = navigation.filter(
    (item) => item.name === content,
  )[0]
  const heading = crumb.content?.filter((item) => item.href === href)[0]

  return (
    <section className="grid gap-6">
      <Breadcrumb crumb={crumb} href={href} />
      <div className="max-w-fit mx-auto">
        {heading ? (
          <h1 className={`font-bold typing text-4xl ${crumb.color}`}>
            {heading.name}
          </h1>
        ) : (
          <h1 className={`font-bold typing text-4xl ${crumb.color}`}>
            {content}
          </h1>
        )}
      </div>
    </section>
  )
}
