import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'DeenDay',
  description: 'Beginner-friendly Islamic reminders starter app'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-4xl space-y-6 p-6">{children}</main>
      </body>
    </html>
  );
}
