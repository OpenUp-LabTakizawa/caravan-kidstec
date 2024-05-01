import type React from 'react'

export type NavbarItem = {
  name: string
  icon: React.ElementType
  href?: string
  content?: { name: string; href: string }[]
}
