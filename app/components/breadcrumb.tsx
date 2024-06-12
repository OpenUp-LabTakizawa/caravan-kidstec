import type { Navigation } from "@/app/interfaces/navigation"
import type { SiteUrl } from "@/app/interfaces/siteUrl"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Breadcrumb({
  crumb,
  href,
}: { crumb: Navigation; href: string }): React.JSX.Element {
  const content: SiteUrl = crumb.content?.filter(
    (item) => item.href === href,
  )[0] as SiteUrl

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-primary" />
            ホーム
          </Link>
        </li>
        <li>
          <crumb.icon className={`size-5 mr-1 ${crumb.color}`} />
          {crumb.name}
        </li>
        <li>
          <Link href={content.href}>{content.name}</Link>
        </li>
      </ul>
    </div>
  )
}
