import type { Reminder } from '@/types/reminder';

type ReminderCardProps = {
  reminder: Reminder;
};

export function ReminderCard({ reminder }: ReminderCardProps) {
  return (
    <article className="rounded border bg-white p-4">
      <h2 className="font-semibold">{reminder.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{reminder.message}</p>
      <p className="mt-1 text-xs text-gray-500">Time: {reminder.timeLabel}</p>
    </article>
  );
}
