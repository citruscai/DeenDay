import type { Verse } from '@/types/verse';

type VerseCardProps = {
  verse: Verse;
};

export function VerseCard({ verse }: VerseCardProps) {
  return (
    <article className="rounded border bg-white p-4">
      <h2 className="font-semibold">{verse.surahName}</h2>
      <p className="mt-2 text-sm">{verse.arabicText}</p>
      <p className="mt-1 text-sm text-gray-600">{verse.translation}</p>
    </article>
  );
}
