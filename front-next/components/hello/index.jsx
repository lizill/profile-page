import React, { memo } from "react";

import styles from './styles/hello.module.css'

const Hello = () => {
  return (
    <div className={styles.helloWrap}>
      <div className={styles.hello}>
        <p>
          こんばんは
          <span className={styles.hand}>👋</span>
        </p>
        <div>
          <hr/><p>よろしくお願いします。</p><hr/>
        </div>
        <p>
          <span className={styles.name}>ドン</span>
          と申します。
        </p>
      </div>
    </div>
  )
}

export default memo(Hello);
