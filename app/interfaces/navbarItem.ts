import type React from 'react'

export type NavbarItem = {
  name: string
  icon: React.ElementType
  color: string
  href?: string
  content?: { name: string; href: string }[]
}
