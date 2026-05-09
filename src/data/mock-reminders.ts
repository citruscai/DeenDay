import type { Reminder } from '@/types/reminder';

export const mockReminders: Reminder[] = [
  { id: 'r1', title: 'Morning Dhikr', message: 'Remember Allah after Fajr prayer.', timeLabel: 'After Fajr' },
  { id: 'r2', title: 'Read Quran', message: 'Read at least one page today.', timeLabel: 'Anytime' },
  { id: 'r3', title: 'Prepare for Isha', message: 'Pause and reset before Isha prayer.', timeLabel: 'Before Isha' }
];
