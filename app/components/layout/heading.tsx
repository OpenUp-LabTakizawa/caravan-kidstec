import { Breadcrumb } from "@/app/components/layout/breadcrumb"
import type { Navigation } from "@/app/interfaces/navigation"
import type { SiteUrl } from "@/app/interfaces/siteUrl"
import { navigation } from "@/app/lib/constant"
import type React from "react"

export function Heading({
  content,
  href,
}: { content: string; href: string }): React.JSX.Element {
  const crumb: Navigation = navigation.filter(
    (item) => item.name === content,
  )[0]
  const heading: SiteUrl = crumb.content?.filter(
    (item) => item.href === href,
  )[0] as SiteUrl

  return (
    <section>
      <div className="max-w-fit mx-auto">
        <h1 className="typing font-bold text-3xl">{heading.name}</h1>
      </div>
      <Breadcrumb crumb={crumb} href={href} />
    </section>
  )
}
