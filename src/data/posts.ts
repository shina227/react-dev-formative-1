import type { Post } from '../types/post';

export const FEATURED_AUTHOR = 'Amara Okafor';

const hoursAgo = (hours: number): string =>
  new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();

export const posts: Post[] = [
  {
    id: 'post-1',
    title: 'Stop fighting useEffect: derive state instead',
    author: FEATURED_AUTHOR,
    content:
      'If a value can be computed from props or state during render, do not store it in state and sync it with an effect. Derive it inline, or wrap it in useMemo only if profiling shows a real cost. Fewer effects means fewer bugs.',
    publishedAt: hoursAgo(3), // new (<24h)
  },
  {
    id: 'post-2',
    title: 'Use `satisfies` to keep literal types and still get checking',
    author: 'Liam Chen',
    content:
      'Annotating a config object with a type widens its literals. The satisfies operator validates the shape while preserving the narrow inferred types, so you get autocomplete on keys and exact values downstream.',
    publishedAt: hoursAgo(72), // old (>24h)
  },
  {
    id: 'post-3',
    title: 'Vite tip: alias imports to escape ../../../ hell',
    author: 'Sofia Rossi',
    content:
      'Add a resolve.alias entry in vite.config.ts and mirror it under paths in tsconfig so the editor agrees. Imports like @/components/Header stay stable when you move files around.',
    publishedAt: hoursAgo(96), // old (>24h)
  },
];