import { PageHeader } from '@/components/layout/PageHeader';

const placeholders = [
  {
    title: 'Ramadan Countdown',
    todo: 'TODO: Replace this with <RamadanCountdown /> from components/ramadan.'
  },
  {
    title: 'Habit Tracker',
    todo: 'TODO: Replace this with <HabitChecklist /> from components/ramadan.'
  },
  {
    title: 'Daily Quran Verse',
    todo: 'TODO: Replace this with <VerseCard /> from components/quran.'
  },
  {
    title: 'Daily Reminders',
    todo: 'TODO: Replace this with <ReminderList /> from components/reminders.'
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="This is a simple scaffold view. Contributors can swap each placeholder with real components over time."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {placeholders.map((card) => (
          <section key={card.title} className="rounded border bg-white p-4">
            <h2 className="font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{card.todo}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
