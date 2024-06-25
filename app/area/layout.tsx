import type React from "react"

export default function AreaLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <article className="grid gap-6 p-4 text-center">{children}</article>
}
