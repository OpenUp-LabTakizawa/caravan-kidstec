import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        zenMaruGothic: ["var(--font-zen-maru-gothic)"],
        zenKakuGothicNew: ["var(--font-zen-kaku-gothic-new)"],
      },
    },
  },
} satisfies Config
