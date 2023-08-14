import styles from "../styles/Footer.module.css";  // If you wish to style using CSS Modules

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Art Gallery Inc.</p>
    </footer>
  );
}

export default Footer;
