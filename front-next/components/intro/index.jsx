import React from 'react'
import Wave from 'react-wavify'

import styles from './styles/intro.module.css';

const Intro = () => {
  return (
    <div className={styles.introWrap}>
      <div className={styles.moonWrap}>
        <img src="/images/intro/moon.png" alt="moon" />
      </div>
      <Wave className={styles.wave} fill='#040037'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.5,
          points: 3
        }}
      />
      <div className={styles.intro}>
        <h1>ドンの</h1>
        <h1>ポートフォリオ</h1>
        <p>1ST PORTFOLIO</p>
      </div>
      <div className={styles.shipWrap}>
        <img src="/images/intro/ship.png" alt="ship" />
      </div>
      <Wave className={styles.wave} fill='#06004d'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.4,
          points: 3
        }}
      />
    </div>
  )
}

export default Intro;
