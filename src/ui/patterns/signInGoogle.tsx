// authjs
import { signInWithGoogle } from '@/app/actions/auth-actions';
import { signIn } from '../../../auth';

// nextjs
import Image from 'next/image';

export default function signInGoogle() {
  return (
    <form autoComplete="off" action={signInWithGoogle}>
      <button className="button tertiary flex justify-between w-full" type="submit">Sign in with Google <Image src="/assets/i/icons/google.svg" width="24" height="24" alt="Google Logo" /></button>
    </form>
  );
}
