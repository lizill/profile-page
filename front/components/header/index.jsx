import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import styles from './styles/header.module.scss'

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className={styles.header}>
      <menu className={styles.menu}>
        <p>{t("title")}</p>
        <div className={styles.aTags}>
          <Link href="/" locale="en">
            <a>EN</a>
          </Link>
          <Link href="/" locale="ja">
            <a>JP</a>
          </Link>
        </div>
      </menu>
    </header>
  )
}

export default Header;
