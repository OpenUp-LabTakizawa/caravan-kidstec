import { describe, expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page"

render(<Home />)

describe("Home", () => {
  test("article test", () => {
    const article = document.querySelector("article")
    expect(article?.className).toEqual("grid gap-6 pb-4 text-base text-center")
  })
})
