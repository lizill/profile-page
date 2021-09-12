import React from "react";

import styles from './styles/header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <menu className={styles.menu}>
        <p>ドンのプロフィール</p>
        <div className={styles.aTags}>
          <a href="#">KR</a>
          <a href="#">JP</a>
        </div>
      </menu>
    </header>
  )
}

export default Header;
