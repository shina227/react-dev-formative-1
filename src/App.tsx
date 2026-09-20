import Header from './components/Header';
import PostList from './components/PostList';
import { posts } from './data/posts';
import styles from './App.module.css';

const App = () => (
  <>
    <Header />
    <main>
      <section aria-labelledby="latest-heading">
        <div className={styles.intro}>
          <h1 id="latest-heading">Latest posts</h1>
          <p className={styles.lede}>Quick tips and insights from the team.</p>
        </div>
        <PostList posts={posts} />
      </section>
    </main>
  </>
);

export default App;