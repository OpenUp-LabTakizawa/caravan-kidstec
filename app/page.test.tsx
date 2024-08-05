import { describe, expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page"

render(<Home />)

describe("Home", () => {
  test("article test", () => {
    const article = document.querySelector("article")
    expect(article?.className).toEqual("grid gap-6 pb-4 text-base text-center")
  })

  test("section test", () => {
    const sections = document.querySelectorAll("section")
    expect(sections[0]?.className).toEqual("")
    expect(sections[1]?.className).toEqual("gap-4 grid text-center")
    expect(sections[2]?.className).toEqual("gap-2 grid grid-cols-2")
    expect(sections[3]?.className).toEqual("gap-2 grid grid-cols-2")
    expect(sections[4]?.className).toEqual("gap-2 grid grid-cols-2")
    expect(sections[5]?.className).toEqual("gap-4 grid")
    expect(sections[6]?.className).toEqual("gap-4 grid relative")
  })
})
