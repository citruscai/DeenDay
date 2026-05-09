import Link from 'next/link';
import { PageHeader } from '@/components/layout/PageHeader';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/ramadan', label: 'Ramadan' },
  { href: '/quran', label: 'Quran' },
  { href: '/reminders', label: 'Reminders' }
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="DeenDay"
        description="A beginner-friendly Islamic reminders starter app for learning through issues and pull requests."
      />

      <section className="rounded border bg-white p-4">
        <h2 className="font-semibold">Start exploring</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline-offset-2 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* TODO: Add a beginner task board section here (good first issue list). */}
      {/* TODO: Add a tiny "How to contribute" area linking to future docs. */}
    </div>
  );
}
