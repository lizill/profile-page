import React, {useState, useEffect, useRef} from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
// import classNames from 'classnames';

import styles from './styles/header.module.scss'

const Header = () => {
  const { t } = useTranslation("common");
  const [changeHeader, setChangeHeader] = useState(false);
  const target = useRef(null);
  const onIntersect = ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setChangeHeader(true);
      observer.observe(entry.target);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 1.0 });
    observer.observe(target.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={target} className={changeHeader < 100 ? styles.change_header : styles.header}>
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
