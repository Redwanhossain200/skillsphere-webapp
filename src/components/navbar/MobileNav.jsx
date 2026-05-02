import Link from 'next/link';
import { CiLogin } from 'react-icons/ci';
import { FaRegRegistered } from 'react-icons/fa';

export default function MobileNav({ navLinks, session, isActive }) {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden p-1 sm:p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`text-sm font-medium ${isActive(link.href) ? 'bg-primary text-white' : ''}`}>
              {link.name}
            </Link>
          </li>
        ))}
        {!session && (
          <>
            <div className="divider my-1"></div>
            <li>
              <Link
                href="/login"
                className={`text-sm ${isActive('/login') ? 'bg-base-200' : ''}`}>
                <CiLogin size={16} /> Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className={`text-sm ${isActive('/register') ? 'bg-base-200' : ''}`}>
                <FaRegRegistered size={16} /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
