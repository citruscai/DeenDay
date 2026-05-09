import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ramadan', label: 'Ramadan' },
  { href: '/quran', label: 'Quran' },
  { href: '/reminders', label: 'Reminders' }
];

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-4xl gap-4 p-4 text-sm">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="underline-offset-2 hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
