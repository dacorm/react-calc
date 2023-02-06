import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.headerNavLink}>
        Главная
      </a>
    </header>
  );
};
