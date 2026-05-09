export function getDaysUntil(targetDate: Date): number {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
}

// TODO: Add helper functions for Islamic dates when introducing real calendar features.
