
import { signInWithGoogle } from "../app/actions/auth-actions";
import { signIn } from "../../auth"
export default function GoogleSignIn() {
  return (
    <form autoComplete="off"
      action={signInWithGoogle}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
}