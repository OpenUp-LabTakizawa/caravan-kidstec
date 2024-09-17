import { Modal } from "@/app/@modal/(.)history/hiroshima/modal"
import { Video } from "@/app/components/media/video"
import type { EventDate } from "@/app/interfaces/schedule"
import { HIROSHIMA, HIROSHIMA_HISTORY } from "@/app/lib/constant"
import type { JSX } from "react"

export default function Movie({
  params: { date },
}: Readonly<{ params: { date: string } }>): JSX.Element {
  const eventDate: EventDate = HIROSHIMA_HISTORY.find(
    (history) => history.date === date,
  ) as EventDate

  return (
    <Modal>
      <h2 className="font-bold font-zenMaruGothic mb-5 text-3xl text-center">
        {eventDate.title}
      </h2>
      <Video pathname={HIROSHIMA.pathname} date={eventDate.date} />
    </Modal>
  )
}
