import type { Navigation } from "@/app/interfaces/navigation"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Breadcrumb({
  crumb,
  href,
}: Readonly<{ crumb: Navigation; href: string }>): React.JSX.Element {
  const content = crumb.content?.filter((item) => item.href === href)[0]

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
        {content && <li>{content.name}</li>}
      </ul>
    </div>
  )
}
