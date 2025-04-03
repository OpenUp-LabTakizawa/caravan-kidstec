import { SignIn } from "@/app/components/button/signIn"
import { auth } from "@/auth"
import type { JSX } from "react"

export default async function RegisterPage(): Promise<JSX.Element> {
  const session = await auth()
  console.log({ session })

  if (session) {
    return (
      <article className="pb-4 space-y-6">
        <h1 className="font-bold text-3xl text-center">Register</h1>
        <p className="text-center">Register page</p>
        <p className="text-center">{session?.user?.email}</p>
        <p className="text-center">{JSON.stringify(session, null, 2)}</p>
      </article>
    )
  }

  return <SignIn />
}
