import type { Post as PostType } from '../types/post';
import Post from './Post';
import styles from './PostList.module.css';

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) return <p className={styles.empty}>No posts yet.</p>;

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;