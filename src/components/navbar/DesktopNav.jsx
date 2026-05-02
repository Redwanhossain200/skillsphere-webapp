import Link from 'next/link';

export default function DesktopNav({ navLinks, isActive }) {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-1 px-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'bg-primary text-white shadow-sm'
                  : 'btn-ghost hover:bg-primary/10 hover:text-primary'
              }`}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
