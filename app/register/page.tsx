import { SignIn } from "@/app/components/button/signIn"
import { auth } from "@/auth"
import type { JSX } from "react"

export default async function RegisterPage(): Promise<JSX.Element> {
  const session = await auth()
  if (session) {
    return (
      <article className="pb-4 space-y-6">
        <h1 className="font-bold text-3xl text-center">Register</h1>
        <p className="text-center">Register page</p>
      </article>
    )
  }

  return <SignIn />
}
