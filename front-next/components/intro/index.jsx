import React, { useEffect, useState, useCallback, memo } from 'react';
import Wave from 'react-wavify';

import styles from './styles/intro.module.css';

const Intro = ({ scrollY, mouseX }) => {
  const [starArr, setStarArr] = useState([]);
  const [shootingLocate, setShootingLocate] = useState(null);
  const [shoot, setShoot] = useState('block');

  const settingStarArr = useCallback(() => {
    // 1920 * 1080 / 10000 = 207.3600
    let starsCount = window.innerWidth * window.innerHeight / 20000
    let stars = [];
    for(let i = 0; i<starsCount; i++) {
      let toLeft = Math.round(Math.random() * window.innerWidth);
      let toTop = Math.round(Math.random() * window.innerHeight - 120);
      stars.push({ id: i, toLeft, toTop });
    }
    setStarArr((prevArr) => prevArr = stars);
  }, []);

  const settingShootingStar = useCallback(() => {
    let toLeft = Math.round(Math.random() * window.innerWidth);
    let toTop = Math.round(Math.random() * window.innerHeight - 300);
    setShootingLocate({ top: toTop, left: toLeft });
    setShoot('block');
  }, []);

  useEffect(() => {
    window.addEventListener('resize', settingStarArr);
    settingStarArr();
    return () => {
      window.removeEventListener('resize', settingStarArr);
    }
  }, []);

  useEffect(() => {
    setInterval(() => settingShootingStar(), 5000);
    return () => {
      clearInterval(() => settingShootingStar(), 5000);
    }
  }, []);

  return (
    <div className={styles.introWrap}>
      {starArr && starArr.map(v => (
        <div className={styles.star} style={{ top: v.toTop, left: v.toLeft }} key={v.id}/>
      ))}
      {shootingLocate && (
        <div className={styles.shootingWrap} style={{ top: shootingLocate.top, left: shootingLocate.left, display: shoot }}>
          <div className={styles.shooting_star} onAnimationEnd={() => setShoot('none')}/>
        </div>
      )}
      <div className={styles.moonWrap} style={{ transform: `translate(${-mouseX/300}px)` }}>
        <img src="/images/intro_moon.png" alt="moon" />
      </div>
      <div className={styles.waveWrap}>
        <Wave className={styles.wave} fill='#040037'
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.4,
            points: 3
          }}
          style={{ height: 150 + scrollY/3 }}
        />
      </div>
      <div className={styles.title}>
        <h1>ドンの</h1>
        <h1>ポートフォリオ</h1>
        <p>1ST PORTFOLIO</p>
      </div>
      <div className={styles.shipWrap}>
        <div style={{ transform: `translate(${mouseX/100}px)` }}>
          <img src="/images/intro_ship.png" alt="ship" />
        </div>
      </div>
      <Wave className={styles.wave} fill='#06004d'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.8,
          points: 3
        }}
      />
    </div>
  )
}

export default memo(Intro);
