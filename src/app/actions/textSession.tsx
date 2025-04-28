import { auth } from "../../../auth"
import Image from "next/image"

export default async function UserAvatar() {
  const session = await auth()
 console.log('session', session)
  if (!session?.user) return <p>Not signed in</p>

  return (
    <div>
      <p>user logged In</p>


    </div>

  )
}
