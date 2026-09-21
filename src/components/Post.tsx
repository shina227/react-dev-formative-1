import { memo } from 'react';
import type { Post as PostType } from '../types/post';
import { formatDate, isNew } from '../utils/date';
import { truncate } from '../utils/text';
import Badge from './Badge';
import styles from './Post.module.css';
import withLogger from '../hoc/withLogger';

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

const LoggedPost = withLogger(Post);

// memo outermost: withLogger's wrapper would otherwise re-render with the parent
const MemoizedPost = memo(LoggedPost);
MemoizedPost.displayName = `Memo(${LoggedPost.displayName})`; // Memo(withLogger(Post))

export default MemoizedPost;