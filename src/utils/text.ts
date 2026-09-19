/** Truncates at a word boundary, appending "…". Returns short text untouched. */
export const truncate = (text: string, max = 100): string => {
  const clean = text.trim().replace(/\s+/g, ' ');
  if (clean.length <= max) return clean;

  // Look one char past `max` so a word ending exactly at `max` is kept whole.
  const head = clean.slice(0, max + 1);
  const lastSpace = head.lastIndexOf(' ');
  const cut = lastSpace > 0 ? head.slice(0, lastSpace) : clean.slice(0, max); // single long word fallback

  return `${cut.replace(/[\s.,;:!?–—-]+$/, '')}…`; // no dangling punctuation before the ellipsis
};