"use client"

import type { Picture } from "@/app/interfaces/picture"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA_HISTORY, KANTO, KANTO_HISTORY } from "@/app/lib/constant"
import { cloudfrontLoader } from "@/app/lib/loader"
import { XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  type JSX,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  type TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react"
import styles from "./modal.module.css"

const safariRegex: RegExp = /\b(iPad|iPhone|iPod)\b/
const webkitRegex: RegExp = /WebKit/
const edgeRegex: RegExp = /Edge/

export function Modal({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const router = useRouter()
  const pathname: string = usePathname()
  const pathParts: string[] = pathname.split("/")
  const history: EventDate[] =
    `/${pathParts[3]}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === pathParts[4],
  ) as EventDate
  const picture: Picture = eventDate.pictures.find(
    (picture) => picture.src.split("/")[5].split(".")[0] === pathParts[5],
  ) as Picture
  const indexOfPicture: number = eventDate.pictures.indexOf(picture)
  const dialogRef: RefObject<HTMLDialogElement | null> =
    useRef<HTMLDialogElement | null>(null)
  const [touchState, setTouchState] = useState<{
    touchStart: number
    touchEnd: number
  }>({ touchStart: 0, touchEnd: 0 })
  const minSwipeDistance = 50
  const [isWebkit, setIsWebkit] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    const isWebkit =
      safariRegex.test(userAgent) &&
      webkitRegex.test(userAgent) &&
      !edgeRegex.test(userAgent)
    setIsWebkit(isWebkit)

    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
      document.body.style.height = "100vh"
      document.body.style.overflowY = "hidden"
      if (isWebkit) {
        document.body.style.position = "fixed"
      }
    }
  })

  function closeModal() {
    document.body.style.height = "auto"
    document.body.style.overflowY = "auto"
    if (isWebkit) {
      document.body.style.position = "static"
    }
    router.back()
  }

  function onTouchStart(e: MouseEvent | TouchEvent) {
    setTouchState({
      touchStart: "targetTouches" in e ? e.targetTouches[0].clientX : e.clientX,
      touchEnd: 0,
    })
  }

  function onTouchMove(e: MouseEvent | TouchEvent) {
    setTouchState((prev) => ({
      ...prev,
      touchEnd: "targetTouches" in e ? e.targetTouches[0].clientX : e.clientX,
    }))
  }

  function onTouchEnd() {
    if (touchState.touchStart === 0 || touchState.touchEnd === 0) {
      return
    }

    const distance: number = touchState.touchStart - touchState.touchEnd
    const isLeftSwipe: boolean = minSwipeDistance < distance
    const isRightSwipe: boolean = distance < -minSwipeDistance

    if (!(isLeftSwipe || isRightSwipe)) {
      return
    }

    if (isLeftSwipe && indexOfPicture < eventDate.pictures.length - 1) {
      changePhoto(eventDate.pictures[indexOfPicture + 1])
    }
    if (isRightSwipe && indexOfPicture > 0) {
      changePhoto(eventDate.pictures[indexOfPicture - 1])
    }
  }

  function changePhoto(picture: Picture): void {
    pathParts[pathParts.length - 1] = picture.src.split("/")[5].split(".")[0]
    router.replace(pathParts.join("/"))
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={closeModal}
      className={`bg-transparent grid h-full items-center justify-items-center max-h-none max-w-none opacity-0 overflow-hidden overscroll-contain pointer-events-none w-full z-50 backdrop:bg-[#0006] open:opacity-100 open:pointer-events-auto open:visible ${styles.dialog}`}
    >
      <div
        onMouseDown={onTouchStart}
        onMouseMove={onTouchMove}
        onMouseUp={onTouchEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="bg-white col-start-1 max-h-[90vh] max-w-3xl overflow-y-auto overscroll-contain p-2 pt-7 rounded-2xl row-start-1 select-none shadow-2xl space-y-2 w-full sm:p-6 sm:space-y-4"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute button-pop cursor-pointer right-2 rounded-full size-6 top-2 hover:bg-gray-300 hover:scale-110"
        >
          <XMarkIcon className="size-6" />
        </button>
        {children}
        <div className="flex px-1">
          {eventDate.pictures.map((picture) => (
            <button
              key={picture.alt}
              type="button"
              onClick={() => changePhoto(picture)}
              className={`cursor-zoom-in group${picture === eventDate.pictures[indexOfPicture] ? " z-10" : ""}`}
            >
              <Image
                loader={cloudfrontLoader}
                src={`${picture.src.split(".")[0]}_thumbnail.${picture.src.split(".")[1]}`}
                width={256}
                height={171}
                alt={picture.alt}
                placeholder="blur"
                blurDataURL={picture.blurDataUrl}
                className={`w-full${picture === eventDate.pictures[indexOfPicture] ? " scale-120" : " brightness-50 group-hover:brightness-100"}`}
              />
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="閉じる"
        onClick={closeModal}
        className="col-start-1 justify-self-stretch row-start-1 self-stretch -z-1"
      />
    </dialog>
  )
}
