import { navItems } from "@/app/lib/constant"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export function Footer(): React.JSX.Element {
  return (
    <footer className="footer items-center bg-base-300 justify-center p-4 text-base-content gap-2">
      <div className="grid grid-cols-3">
        {navItems.map((item) => (
          <nav key={item.name} className="flex flex-col">
            {item.href && (
              <h6 className="footer-title">
                <Link
                  href={item.href as string}
                  className="flex link link-hover"
                >
                  <item.icon className={`size-5 mr-1 ${item.color}`} />
                  {item.name}
                </Link>
              </h6>
            )}
            {item.content && (
              <>
                <h6 className="flex footer-title break-keep">
                  <item.icon className={`size-5 mr-1 ${item.color}`} />
                  {item.name}
                </h6>
                {item.content.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href as string}
                    className="link link-hover block pb-1 mx-auto break-keep"
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            )}
          </nav>
        ))}
      </div>
      <aside className="flex justify-between items-center gap-4 w-full">
        <p>
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
