import type { Panel } from "@/app/interfaces/panel"
import Image from "next/image"
import type React from "react"

export function PanelTile({
  panelItems,
}: Readonly<{ panelItems: Panel[] }>): React.JSX.Element {
  return (
    <>
      {panelItems.map((item, index) => (
        <figure
          key={item.alt}
          className={`w-full${index === 0 ? " col-span-2" : ""}`}
        >
          <Image
            src={item.src}
            height={1000}
            width={1000}
            alt={item.alt}
            className={`object-contain w-full${index !== 0 ? " aspect-square object-cover" : ""}`}
          />
          <figcaption className="bg-base-200 font-bold py-1 text-center">
            {item.alt}
          </figcaption>
        </figure>
      ))}
    </>
  )
}
