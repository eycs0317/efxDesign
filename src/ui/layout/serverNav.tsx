import { auth } from "../../../auth"
import Navigation from "./navigation"
export default async function ServerNav() {
  const session = await auth()

  return <Navigation session={session}
}