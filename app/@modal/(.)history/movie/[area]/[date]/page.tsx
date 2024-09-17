import { Modal } from "@/app/@modal/(.)history/modal"
import { Video } from "@/app/components/media/video"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA_HISTORY, KANTO_HISTORY } from "@/app/lib/constant"
import type { JSX } from "react"

export default function HiroshimaMovie({
  params: { area, date },
}: Readonly<{ params: { area: string; date: string } }>): JSX.Element {
  const history: EventDate[] =
    area === "kanto" ? KANTO_HISTORY : HIROSHIMA_HISTORY
  const eventDate: EventDate = history.find(
    (history) => history.date === date,
  ) as EventDate

  return (
    <Modal>
      <h2 className="font-bold font-zenMaruGothic mb-5 text-3xl text-center">
        {eventDate.title}
      </h2>
      <Video date={eventDate.date} />
    </Modal>
  )
}
