import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import UpdateProfileForm from '@/components/UpdateProfileForm';
import { auth } from '@/lib/auth';

export default async function UpdateProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect('/login');
  }

  const { user } = session;

  return <UpdateProfileForm user={user} />;
}
