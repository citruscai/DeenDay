import { ReminderCard } from '@/components/reminders/ReminderCard';
import { mockReminders } from '@/data/mock-reminders';

export function ReminderList() {
  return (
    <section className="space-y-3">
      <ReminderCard reminder={mockReminders[0]} />
      {/* TODO: Render all reminders with .map once list behavior is added in a future issue. */}
    </section>
  );
}
