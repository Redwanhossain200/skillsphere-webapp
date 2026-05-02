import { headers } from 'next/headers';
import Link from 'next/link';
import { LuUser, LuMail, LuCalendar, LuPencil } from 'react-icons/lu';
import { auth } from '@/lib/auth';

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-base-200/30">
        <LuUser size={80} className="text-base-content/20 mb-6" />
        <h2 className="text-3xl font-bold text-base-content mb-2">
          Profile is Empty
        </h2>
        <p className="text-base-content/60 mb-8">
          Please login to view your profile details.
        </p>
        <Link href="/login" className="btn btn-primary px-8">
          Login
        </Link>
      </div>
    );
  }

  const { user } = session;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-base-200/30">
      <div className="w-full max-w-xl bg-base-100 rounded-3xl shadow-xl border border-base-200 overflow-hidden transition-all hover:shadow-2xl">
        <div className="h-40 bg-linear-to-br from-primary/90 via-primary to-secondary/90 relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        </div>

        <div className="px-8 pb-10">
          <div className="flex justify-between items-end -mt-16 mb-6 relative z-10">
            <div className="w-32 h-32 rounded-full ring-8 ring-base-100 bg-base-200 shadow-lg flex items-center justify-center overflow-hidden shrink-0">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                  className="object-cover w-full h-full"
                />
              ) : (
                <LuUser size={50} className="text-base-content/40" />
              )}
            </div>

            <Link
              href="/profile/update"
              className="btn btn-sm btn-primary rounded-full px-5 shadow-md gap-2 mb-2 hover:scale-105 transition-transform">
              <LuPencil size={14} /> Update
            </Link>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-base-content">
              {user.name}
            </h1>
            <p className="text-base-content/60 flex items-center gap-2 font-medium">
              <LuMail size={18} className="text-primary" />{' '}
              <span>{user.email}</span>
            </p>
          </div>

          <div className="divider my-8 opacity-50"></div>

          <div className="bg-base-200/50 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-2">
              <LuCalendar className="text-primary" size={20} />
              Account Details
            </h3>

            <div className="flex justify-between items-center py-1 border-b border-base-content/5">
              <span className="text-base-content/60 font-medium">
                Member Since
              </span>
              <span className="font-semibold italic text-base-content/80">
                {formatDate(user.createdAt)}
              </span>
            </div>

            <div className="flex justify-between items-center py-1">
              <span className="text-base-content/60 font-medium">
                Verification Status
              </span>
              <span
                className={`badge ${user.emailVerified ? 'badge-success' : 'badge-warning'} badge-md font-bold py-3`}>
                {user.emailVerified ? 'Verified' : 'Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
