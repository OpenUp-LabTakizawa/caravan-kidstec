import { auth, signIn } from "@/auth"
import type { JSX } from "react"

export default async function RegisterPage(): Promise<JSX.Element> {
  const session = await auth()

  if (session) {
    return (
      <article className="pb-4 space-y-6">
        <h1 className="font-bold text-3xl text-center">Register</h1>
        <p className="text-center">Register page</p>
        <p className="text-center">{session.user?.name}</p>
      </article>
    )
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("line")
      }}
      className="text-center"
    >
      <ul className="flex flex-col gap-2">
        <li className="">LINEログイン</li>
      </ul>
      <button type="submit">Signin with LINE</button>
    </form>
  )
}
