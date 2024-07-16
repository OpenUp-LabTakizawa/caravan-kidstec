import type { Content, Navigation } from "@/app/interfaces/navigation"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Heading({
  navigation,
  content,
}: Readonly<{ navigation: Navigation; content?: Content }>): React.JSX.Element {
  return (
    <section className="grid gap-6 pl-4">
      <Breadcrumb navigation={navigation} content={content} />
      <div className="max-w-fit mx-auto">
        {content && navigation.content?.includes(content) ? (
          <h1
            className={`font-bold font-zenMaruGothic typing text-4xl ${navigation.color}`}
          >
            {content.name}
          </h1>
        ) : (
          <h1
            className={`font-bold font-zenMaruGothic typing text-4xl ${navigation.color}`}
          >
            {navigation.name}
          </h1>
        )}
      </div>
    </section>
  )
}

function Breadcrumb({
  navigation,
  content,
}: Readonly<{ navigation: Navigation; content?: Content }>): React.JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-sky-400" />
            ホーム
          </Link>
        </li>
        <li>
          <navigation.icon className={`size-5 mr-1 ${navigation.color}`} />
          {navigation.name}
        </li>
        {content && navigation.content?.includes(content) && (
          <li>{content.name}</li>
        )}
      </ul>
    </div>
  )
}
