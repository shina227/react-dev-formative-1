import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>Dev Insights</a>
    <nav aria-label="Primary">
      <a href="#new-post" className={styles.navLink}>New Post</a>
    </nav>
  </header>
);

export default Header;