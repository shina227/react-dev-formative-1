const MS_PER_HOUR = 60 * 60 * 1000;
const NEW_POST_WINDOW_MS = 24 * MS_PER_HOUR;

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeZone: 'UTC',
});

export const isNew = (publishedAt: string, now: number = Date.now()): boolean => {
  const age = now - new Date(publishedAt).getTime();
  return age >= 0 && age < NEW_POST_WINDOW_MS; // NaN (invalid date) => false
};

export const formatDate = (publishedAt: string): string => {
  const date = new Date(publishedAt);
  return Number.isNaN(date.getTime()) ? '' : dateFormatter.format(date);
};