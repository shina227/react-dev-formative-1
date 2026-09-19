import Header from './components/Header';
import PostList from './components/PostList';
import { posts } from './data/posts';

const App = () => (
  <>
    <Header />
    <main>
      <section aria-labelledby="latest-heading">
        <h1 id="latest-heading">Latest posts</h1>
        <PostList posts={posts} />
      </section>
    </main>
  </>
);

export default App;