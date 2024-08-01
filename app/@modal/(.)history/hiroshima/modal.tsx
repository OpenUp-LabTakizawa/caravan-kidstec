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

export function Modal({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const router = useRouter()
  const dialogRef: RefObject<HTMLDialogElement> =
    useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  })

  return (
    <dialog ref={dialogRef} className="modal" onClose={router.back}>
      <div className="modal-box">
        <button
          type="button"
          onClick={router.back}
          className="absolute btn btn-circle btn-ghost btn-sm right-2 top-2 hover:scale-110"
          aria-label="閉じる"
        >
          <XMarkIcon className="size-7" />
        </button>
        {children}
        <div className="modal-action">
          <button type="button" onClick={router.back} className="btn">
            <XMarkIcon className="size-6" />
            閉じる
          </button>
        </div>
      </div>
    </dialog>
  )
}
