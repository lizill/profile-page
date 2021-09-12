import React, { useMemo } from "react";

import styles from './styles/main.module.scss';
import ATags from "./ATags";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

const Main = () => {
  const backgroundImage = useMemo(() => (
    // { backgroundImage: "url('../../main/guitar.jpg')" }
    { backgroundImage: "url('../../main/code.jpg')" }
  ), []);

  return (
    <main className={styles.main}>
      <div className={styles.background} style={backgroundImage}/>
      <div className={styles.container}>
        <article className={styles.article}>
          <h1>Creating a Better Life</h1>
          <p>革新的な技術により良い暮らしを創造するエンジニア</p>
          <div className={styles.aTags}>
            <ATags link="#" content="フロントエンド" />
            <ATags link="#" content="バックエンド" />
            <ATags link="#" content="アプリケーション" />
          </div>
        </article>
        <HiOutlineArrowNarrowDown className={styles.arrowDown} />
      </div>
    </main>
  )
}

export default Main;
