import { Breadcrumb } from "@/app/components/layout/breadcrumb"
import type { Navigation } from "@/app/interfaces/navigation"
import { navigation } from "@/app/lib/constant"
import type React from "react"

export function Heading({
  content,
  name,
}: Readonly<{ content: string; name?: string }>): React.JSX.Element {
  const crumb: Navigation = navigation.filter(
    (item) => item.name === content,
  )[0]

  return (
    <section className="grid gap-6">
      <Breadcrumb crumb={crumb} name={name} />
      <div className="max-w-fit mx-auto">
        {name ? (
          <h1 className={`font-bold typing text-4xl ${crumb.color}`}>{name}</h1>
        ) : (
          <h1 className={`font-bold typing text-4xl ${crumb.color}`}>
            {content}
          </h1>
        )}
      </div>
    </section>
  )
}
