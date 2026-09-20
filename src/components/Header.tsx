import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a href="/" className={styles.logo}>Dev Insights</a>
      <nav aria-label="Primary">
        <a href="#new-post" className={styles.navLink}>New Post</a>
      </nav>
    </div>
  </header>
);

export default Header;