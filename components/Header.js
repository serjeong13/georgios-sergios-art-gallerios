import styles from '../styles/Header.module.css';  // If you wish to style using CSS Modules

function Header() {
  return (
    <header className={styles.header}>
      <h1>Art Gallery</h1>
    </header>
  );
}

export default Header;
