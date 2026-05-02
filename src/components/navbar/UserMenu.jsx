import Link from 'next/link';
import { LuUser, LuLogOut } from 'react-icons/lu';
import { CiLogin } from 'react-icons/ci';
import { FaRegRegistered } from 'react-icons/fa';

export default function UserMenu({ session, handleLogout, pathname }) {
  return (
    <div className="navbar-end gap-1.5 sm:gap-3">
      {session ? (
        <div className="flex items-center gap-3 sm:gap-4">
          <div
            className="avatar tooltip tooltip-bottom"
            data-tip={session.user.name || 'User'}>
            <div className="w-10 md:w-10 rounded-full border-2 border-primary shadow-xs">
              {session.user.image ? (
                <img
                  alt="User Avatar"
                  src={session.user.image}
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              ) : (
                <div className="bg-neutral text-neutral-content rounded-full w-full h-full flex items-center justify-center">
                  <LuUser size={18} />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="btn btn-xs sm:btn-sm btn-outline text-error hover:bg-error hover:text-white border-error/50 hover:border-error rounded-full transition-all">
            <LuLogOut size={16} className="hidden xs:block" />
            <span className="text-xs sm:text-sm font-medium">Logout</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={`btn btn-xs sm:btn-sm rounded-full transition-all ${pathname === '/login' ? 'btn-neutral' : 'btn-ghost'}`}>
            <CiLogin size={18} className="hidden xs:block" />
            <span className="text-xs sm:text-sm font-medium">Login</span>
          </Link>
          <Link
            href="/register"
            className={`btn btn-xs sm:btn-sm btn-primary rounded-full shadow-md hover:shadow-primary/20 transition-all ${
              pathname === '/register'
                ? 'ring-2 ring-primary ring-offset-2'
                : ''
            }`}>
            <FaRegRegistered size={16} className="hidden xs:block" />
            <span className="text-xs sm:text-sm font-semibold">Register</span>
          </Link>
        </div>
      )}
    </div>
  );
}
