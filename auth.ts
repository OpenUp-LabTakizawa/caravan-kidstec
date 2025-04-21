import NextAuth from "next-auth"
import LINE from "next-auth/providers/line"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    LINE({
      checks: ["state"],
    }),
  ],
})
