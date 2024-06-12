import { navItems } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-base-300 grid items-center justify-center p-4 text-base-content">
      <nav>
        <ul className="grid grid-cols-3 lg:grid-cols-6 menu p-0">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.href && (
                <Link
                  href={item.href as string}
                  className="break-keep font-bold link-hover"
                >
                  <item.icon className={`size-5 ${item.color}`} />
                  {item.name}
                </Link>
              )}
              {item.content && (
                <>
                  <span className="break-keep font-bold">
                    <item.icon className={`size-5 ${item.color}`} />
                    {item.name}
                  </span>
                  <ul>
                    {item.content.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href as string} className="link-hover">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <aside className="flex justify-between items-center">
        <p className="text-sm">
          Copyright © Open Up Group Inc. <br className="block sm:hidden" />
          All rights reserved.
        </p>
        <Link
          href="https://github.com/OpenUp-LabTakizawa/caravan-kidstec"
          target="_blank"
        >
          <Image
            src="/github-mark.svg"
            width={24}
            height={24}
            alt="GitHub"
            className="size-8"
          />
        </Link>
      </aside>
    </footer>
  )
}
