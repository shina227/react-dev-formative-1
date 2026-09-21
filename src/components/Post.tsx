import { memo } from 'react';
import type { Post as PostType } from '../types/post';
import { formatDate, isNew } from '../utils/date';
import { truncate } from '../utils/text';
import Badge from './Badge';
import styles from './Post.module.css';

interface PostProps {
  post: PostType;
  featured?: boolean;
}

const Post = ({ post, featured = false }: PostProps) => {
  const { title, author, content, publishedAt } = post;

  return (
    <article className={featured ? `${styles.card} ${styles.featured}` : styles.card}>
      {featured && <span className={styles.label}>Featured</span>}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.meta}>
        <span>{author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        {isNew(publishedAt) && <Badge>New!</Badge>}
      </p>
      <p className={styles.preview}>{truncate(content, featured ? 200 : 100)}</p>
    </article>
  );
};

// Skips re-render unless post or featured change
const MemoizedPost = memo(Post);
MemoizedPost.displayName = 'Memo(Post)';

export default MemoizedPost;