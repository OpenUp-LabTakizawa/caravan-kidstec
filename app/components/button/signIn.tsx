import { signIn } from "@/auth"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        console.log({ signIn })
        await signIn("line")
      }}
    >
      <button type="submit">Signin with LINE</button>
    </form>
  )
}
