import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'

export function Footer(): React.JSX.Element {
  return (
    <footer className="footer flex flex-row items-center bg-base-300 justify-center p-4 text-base-content">
      <aside>
        <p>Copyright © Open Up Group Inc. All rights reserved.</p>
      </aside>
      <nav>
        <Link
          href="https://github.com/OpenUp-LabTakizawa/caravan-kidstec"
          target="_blank"
        >
          <Image src="/github-mark.svg" alt="GitHub" width={24} height={24} />
        </Link>
      </nav>
    </footer>
  )
}
