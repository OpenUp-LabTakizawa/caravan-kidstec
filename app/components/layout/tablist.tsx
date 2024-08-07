"use client"

import type { Panel, TabPanel } from "@/app/interfaces/picture"
import type { Schedule } from "@/app/interfaces/schedule"
import { cloudfrontLoader } from "@/app/lib/loader"
import Image from "next/image"
import { type JSX, useState } from "react"

export function EventTablist({
  tabPanels,
}: Readonly<{ tabPanels: TabPanel[] }>): JSX.Element {
  const [tab, setTab] = useState<string>(tabPanels[0].title)

  function PanelTile({ panels }: Readonly<{ panels: Panel[] }>): JSX.Element {
    return (
      <>
        {panels.map((panel) => (
          <figure key={panel.alt} className="first-of-type:col-span-2">
            <Image
              loader={cloudfrontLoader}
              src={panel.src}
              height={1000}
              width={1000}
              alt={panel.alt}
              className="w-full"
            />
            <figcaption
              className={`bg-amber-50 font-bold grid items-center text-center whitespace-pre${panel.height ? ` ${panel.height}` : ""}`}
            >
              {panel.alt}
            </figcaption>
          </figure>
        ))}
      </>
    )
  }

  return (
    <>
      <div role="tablist" className="gap-2 tabs">
        {tabPanels.map((tabPanel) => (
          <button
            key={tabPanel.title}
            type="button"
            role="tab"
            onClick={() => setTab(tabPanel.title)}
            className={`rounded-lg shadow-lg tab ${tab === tabPanel.title ? "bg-teal-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>{tabPanel.title}</strong>
          </button>
        ))}
      </div>
      <div className="gap-2 grid grid-cols-2">
        {tabPanels.map(
          (tabPanel) =>
            tab === tabPanel.title && <PanelTile panels={tabPanel.panels} />,
        )}
      </div>
    </>
  )
}

export function ScheduleTablist({
  schedules,
}: Readonly<{ schedules: Schedule[] }>): JSX.Element {
  const [tab, setTab] = useState<string>("Day 1")

  return (
    <div className="sm:hidden">
      <div role="tablist" className="gap-2 tabs">
        {schedules.map((schedule, index) => (
          <button
            key={schedule.alt}
            type="button"
            role="tab"
            onClick={() => setTab(`Day ${index + 1}`)}
            className={`rounded-lg shadow-lg tab ${tab === `Day ${index + 1}` ? "bg-teal-400 tab-active" : "bg-gray-100"}`}
          >
            <strong>Day&nbsp;{index + 1}</strong>
          </button>
        ))}
      </div>
      {schedules.map(
        (schedule, index) =>
          tab === `Day ${index + 1}` && (
            <div
              key={schedule.alt}
              role="tabpanel"
              className="card m-2 shadow-lg"
            >
              <Image
                loader={cloudfrontLoader}
                src={schedule.src}
                width={1000}
                height={1000}
                alt={schedule.alt}
                className="h-60 object-cover rounded-t-2xl"
              />
              <div className="bg-amber-50 card-body p-0 py-2 relative rounded-b-2xl">
                <strong className="absolute bg-teal-400 left-0 px-2 py-1 text-white text-xs top-0">
                  Day&nbsp;{index + 1}
                </strong>
                <h3 className="card-title mx-auto text-2xl whitespace-pre">
                  {schedule.title}
                </h3>
                <strong className="text-sm">
                  {schedule.date.year}年{schedule.date.month}月
                  {schedule.date.day}
                  日({schedule.date.dayOfWeek})&nbsp;10:00~17:00
                </strong>
                <div className="card-actions justify-center">
                  {schedule.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-outline bg-base-200 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ),
      )}
    </div>
  )
}
