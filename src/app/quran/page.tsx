import { PageHeader } from '@/components/layout/PageHeader';
import { VerseCard } from '@/components/quran/VerseCard';
import { mockVerses } from '@/data/mock-verses';

export default function QuranPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quran"
        description="Use this page to practice rendering verses from mock data in small beginner-friendly steps."
      />

      <VerseCard verse={mockVerses[0]} />

      <section className="rounded border bg-white p-4 text-sm text-gray-600">
        TODO: Render multiple <code>VerseCard</code> components from <code>mockVerses</code> using <code>.map()</code>.
      </section>
    </div>
  );
}
