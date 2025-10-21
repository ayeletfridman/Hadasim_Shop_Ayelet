import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>🛍️ חנות אונליין</h1>
      <div className={styles.logoContainer}>
        <img src="/logo.webp" alt="הדסים" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
