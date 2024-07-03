import type React from "react"

export type Navigation = {
  name: string
  icon: React.ElementType
  color: string
  href: string
  content?: Content[]
}

export type NavigationSquare = {
  name: string
  icon: string | React.ElementType
  color: string
  href: string
}

export type Content = {
  name: string
  href: string
}
