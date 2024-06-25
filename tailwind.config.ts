import daisyui from "daisyui"
import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [daisyui],
}
export default config
