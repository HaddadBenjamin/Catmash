import styles from "./index.module.css";

const Header = () => (
  <header className={styles.header}>
    <img src="/logo.png" alt="Logo" className={styles.logo} />
    <h1>CATMASH</h1>
  </header>
);

export default Header;
