import { describe, expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page.tsx"

render(<Home />)

describe("className test", () => {
  test("article test", () => {
    const article = document.querySelector("article")
    expect(article?.className).toEqual("pb-4 space-y-6 text-base text-center")
  })

  test("section test", () => {
    const sections = document.querySelectorAll("section")
    expect(sections[0]?.className).toEqual("")
    expect(sections[1]?.className).toEqual(
      "font-bold leading-7 space-y-4 text-center tracking-[.29em]",
    )
    expect(sections[2]?.className).toEqual(
      "bg-sky-300 mx-2 rounded-2xl pb-2 space-y-2",
    )
    expect(sections[3]?.className).toEqual("space-y-4")
    expect(sections[4]?.className).toEqual("relative space-y-4")
  })
})
