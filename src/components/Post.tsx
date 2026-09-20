import type { Post as PostType } from '../types/post';
import { formatDate, isNew } from '../utils/date';
import { truncate } from '../utils/text';
import Badge from './Badge';
import styles from './Post.module.css';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { title, author, content, publishedAt } = post;

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.meta}>
        <span>{author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
        {isNew(publishedAt) && <Badge>New!</Badge>}
      </p>
      <p className={styles.preview}>{truncate(content)}</p>
    </article>
  );
};

export default Post;