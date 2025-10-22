import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.webp" alt="הדסים" className={styles.logo} />
      </div>

      <h1 className={styles.headerTitle}>חנות אונליין</h1>

      <div className={styles.buttonGroup}>
        <Link href="/register" className={styles.button}>
          רישום
        </Link>
        <Link href="/" className={styles.button}>
          דף הבית
        </Link>
      </div>
    </header>
  );
};

export default Header;
