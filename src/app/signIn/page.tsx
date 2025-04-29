import { signIn } from "../../../auth"
import  GoogleSignIn  from "@/components/GoogleSignIn"
export default function SignIn() {
  return (
    <div  className=''>
<GoogleSignIn />
        <form  className='flex flex-col items-center justify-center h-screen'
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <label>
        Email:
        <input name="email" type="email" />
      </label>
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
    </div>

  )
}
