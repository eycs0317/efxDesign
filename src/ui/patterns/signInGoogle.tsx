// authjs
import { signIn } from '../../../auth';

// ui
import FormField from '@/ui/foundations/formField';

export default function signInGoogle() {
  return (
    <form autoComplete="off" action={async (formData) => {
      'use server'
      await signIn('google', {redirectTo:'/dashboard'});
    }}>
      <FormField type='button' fieldData={{type: 'submit', id: 'btGoogleSignIn', className: 'button tertiary flex justify-between w-full', value: 'Sign in with Google', image: {width: 24, height: 24, alt: 'Google Logo', src: '/assets/i/icons/google.svg'}}} />
    </form>
  );
}
