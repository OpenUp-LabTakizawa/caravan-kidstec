import { Modal } from "@/app/@modal/(.)history/modal"
import { Video } from "@/app/components/media/video"
import type { Menu } from "@/app/interfaces/menu"
import type { EventDate } from "@/app/interfaces/schedule"
import {
  HIROSHIMA,
  HIROSHIMA_HISTORY,
  KANTO,
  KANTO_HISTORY,
} from "@/app/lib/constant"
import type { JSX } from "react"

export default function Movie({
  params: { area, date },
}: Readonly<{ params: { area: string; date: string } }>): JSX.Element {
  const menu: Menu = `/${area}` === KANTO.pathname ? KANTO : HIROSHIMA
  const history: EventDate[] =
    `/${area}` === KANTO.pathname ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate

  return (
    <Modal>
      <h2 className="font-bold font-zenMaruGothic mb-5 text-3xl text-center">
        {eventDate.title}
      </h2>
      <Video pathname={menu.pathname} date={eventDate.date} />
    </Modal>
  )
}
