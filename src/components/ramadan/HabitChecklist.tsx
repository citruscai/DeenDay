export function HabitChecklist() {
  const placeholderHabits = ['Pray Fajr on time', 'Read 1 page of Quran'];

  return (
    <section className="rounded border bg-white p-4">
      <h2 className="font-semibold">Habit Checklist (Placeholder)</h2>
      <ul className="mt-2 space-y-2 text-sm">
        {placeholderHabits.map((habit) => (
          <li key={habit} className="flex items-center gap-2">
            <input type="checkbox" disabled aria-label={habit} />
            <span>{habit}</span>
          </li>
        ))}
      </ul>
      {/* TODO: Connect this checklist to mock data and then add state handling in a future issue. */}
    </section>
  );
}
