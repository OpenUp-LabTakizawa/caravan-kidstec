"use client"

import { XMarkIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import {
  type JSX,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
} from "react"
import styles from "./modal.module.css"

export function Modal({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const router = useRouter()
  const dialogRef: RefObject<HTMLDialogElement | null> =
    useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  })

  return (
    <dialog
      ref={dialogRef}
      onClose={router.back}
      className={`bg-transparent duration-200 ease-out grid h-full items-center justify-items-center max-h-none max-w-none opacity-0 overflow-hidden overscroll-contain pointer-events-none w-full z-50 backdrop:bg-[#0006] open:opacity-100 open:pointer-events-auto open:visible ${styles.dialog}`}
    >
      <div className="bg-white col-start-1 duration-200 ease-out max-h-[90vh] max-w-3xl overflow-y-auto overscroll-contain p-2 pt-7 rounded-2xl row-start-1 scale-90 shadow-2xl space-y-2 transition w-full in-open:scale-100 sm:p-6 sm:space-y-4">
        <button
          type="button"
          onClick={router.back}
          className="absolute button-pop cursor-pointer right-2 rounded-full size-6 top-2 hover:bg-gray-300 hover:scale-110"
        >
          <XMarkIcon className="size-6" />
        </button>
        {children}
        <button
          type="button"
          onClick={router.back}
          className="bg-gray-100 button-pop cursor-pointer flex float-right font-bold gap-2 h-12 items-center justify-center px-4 rounded-xl shadow-xs text-sm hover:bg-gray-300"
        >
          <XMarkIcon className="size-6" />
          閉じる
        </button>
      </div>
      <button
        type="button"
        aria-label="閉じる"
        onClick={router.back}
        className="col-start-1 justify-self-stretch row-start-1 self-stretch -z-1"
      />
    </dialog>
  )
}
