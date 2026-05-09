import { PageHeader } from '@/components/layout/PageHeader';
import { ReminderList } from '@/components/reminders/ReminderList';

export default function RemindersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reminders"
        description="A starter page for daily reminder cards. Keep it simple while learning component composition."
      />

      <ReminderList />

      <section className="rounded border bg-white p-4 text-sm text-gray-600">
        TODO: Render full reminder data from <code>src/data/mock-reminders.ts</code> in this list.
      </section>
    </div>
  );
}
