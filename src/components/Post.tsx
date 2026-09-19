import type { Post as PostType } from '../types/post';
import { formatDate } from '../utils/date';
import { truncate } from '../utils/text';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const { title, author, content, publishedAt } = post;

  return (
    <article>
      <h2>{title}</h2>
      <p>
        {author} · <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </p>
      <p>{truncate(content)}</p>
    </article>
  );
};

export default Post;