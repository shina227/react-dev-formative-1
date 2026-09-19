import type { Post as PostType } from '../types/post';
import Post from './Post';

interface PostListProps {
  posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
  if (posts.length === 0) return <p>No posts yet.</p>;

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;