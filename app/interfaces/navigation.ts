import type React from "react"

export type Navigation = {
  name: string
  icon: React.ElementType
  color: string
  href: string
  content?: { name: string; href: string }[]
}
