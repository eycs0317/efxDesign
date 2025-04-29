'use server';

// authjs
import { signIn } from '../../../auth';

export async function signInWithGoogle() {
  await signIn('google', {redirectTo:'/dashboard'});
}
