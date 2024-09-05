import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"
import styles from "./backButton.module.css"

export function BackButton({
  href,
  name,
}: Readonly<{ href: string; name: string }>): JSX.Element {
  return (
    <Link href={href} className="btn mx-auto">
      <ArrowUturnLeftIcon className={`size-6 ${styles.rotateZ}`} />
      {name}に戻る
    </Link>
  )
}
