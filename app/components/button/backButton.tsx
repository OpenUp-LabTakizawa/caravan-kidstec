import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "next-view-transitions"
import type { JSX } from "react"
import styles from "./backButton.module.css"

export function BackButton({
  href,
  name,
}: Readonly<{ href: string; name: string }>): JSX.Element {
  return (
    <Link
      href={href}
      className="bg-gray-100 button-pop duration-200 ease-out flex font-bold gap-2 h-12 items-center justify-center mx-auto px-4 rounded-xl shadow-xs text-sm w-fit hover:bg-gray-300"
    >
      <ArrowUturnLeftIcon className={`size-6 ${styles.rotateZ}`} />
      {name}に戻る
    </Link>
  )
}
