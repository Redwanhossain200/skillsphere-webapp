'use client';

import { signIn } from '@/lib/auth-client';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full gap-2 mb-1">
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
}
