import { PageHeader } from '@/components/layout/PageHeader';
import { HabitChecklist } from '@/components/ramadan/HabitChecklist';
import { RamadanCountdown } from '@/components/ramadan/RamadanCountdown';

export default function RamadanPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ramadan"
        description="This page introduces Ramadan-focused widgets with placeholder content for beginner contributors."
      />

      <RamadanCountdown />
      <HabitChecklist />

      <section className="rounded border bg-white p-4">
        <h2 className="font-semibold">Last 10 Nights</h2>
        <p className="mt-2 text-sm text-gray-600">TODO: Add a dedicated section for nightly goals and reflection prompts.</p>
      </section>
    </div>
  );
}
