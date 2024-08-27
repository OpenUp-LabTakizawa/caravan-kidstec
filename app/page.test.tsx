import { describe, expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page"

render(<Home />)

describe("Home", () => {
  test("article test", () => {
    const article = document.querySelector("article")
    expect(article?.className).toEqual("gap-6 grid pb-4 text-base text-center")
  })

  test("section test", () => {
    const sections = document.querySelectorAll("section")
    expect(sections[0]?.className).toEqual("")
    expect(sections[1]?.className).toEqual(
      "font-bold gap-4 grid leading-7 text-center tracking-[.29em]",
    )
    expect(sections[2]?.className).toEqual(
      "bg-sky-300 gap-2 grid mx-2 rounded-2xl pb-2",
    )
    expect(sections[3]?.className).toEqual("gap-4 grid")
    expect(sections[4]?.className).toEqual("gap-4 grid relative")
  })
})
