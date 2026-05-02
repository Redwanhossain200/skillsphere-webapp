'use client';

import Link from 'next/link';
import { LuBookOpen } from 'react-icons/lu';
import { signOut } from '@/lib/auth-client';
import { useRouter, usePathname } from 'next/navigation';
import MobileNav from './navbar/MobileNav';
import DesktopNav from './navbar/DesktopNav';
import UserMenu from './navbar/UserMenu';

export default function Navbar({ session }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'My Profile', href: '/profile' },
  ];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname?.startsWith(path + '/');
  };

  return (
    <div className="sticky top-0 z-50 border-b border-base-300 bg-base-100/60 backdrop-blur-md">
      <div className="navbar max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <MobileNav
            navLinks={navLinks}
            session={session}
            isActive={isActive}
          />

          <Link
            href="/"
            className="flex items-center gap-1.5 ml-1 sm:ml-0 group">
            <LuBookOpen className="text-primary w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-bold text-lg md:text-2xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
              SkillSphere
            </span>
          </Link>
        </div>

        <DesktopNav navLinks={navLinks} isActive={isActive} />

        <UserMenu
          session={session}
          handleLogout={handleLogout}
          pathname={pathname}
        />
      </div>
    </div>
  );
}
