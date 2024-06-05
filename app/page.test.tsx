import { expect, test } from "bun:test"
import { render } from "@testing-library/react"
import Home from "./page"

render(<Home />)

test("p test", () => {
  const p = document.querySelectorAll("p")
  expect(p[0]?.innerText).toEqual(
    "Find in-depth information about Next.js features and API.",
  )
  expect(p[1]?.innerText).toEqual(
    "Learn about Next.js in an interactive course with\u00A0quizzes!",
  )
  expect(p[2]?.innerText).toEqual("Explore starter templates for Next.js.")
  expect(p[3]?.innerText).toEqual(
    "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  )
})

test("h2 test", () => {
  const h2 = document.querySelectorAll("h2")
  expect(h2[0]?.innerText).toEqual("Docs ->")
  expect(h2[1]?.innerText).toEqual("Learn ->")
  expect(h2[2]?.innerText).toEqual("Templates ->")
  expect(h2[3]?.innerText).toEqual("Deploy ->")
})
