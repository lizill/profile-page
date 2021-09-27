import React from "react";

import styles from './styles/skills.module.css'

const Skills = ({ scrollY, mouseX }) => {

  return (
    <div className={styles.skillsWrap}>
      <div className={styles.stickyWrap}>
        <div className={styles.backLight}>
          <div className={styles.moonWrap}>
            <div style={{ transform: `translate(${mouseX/100}px)` }}>
              <img src="/images/skills/moon.png" alt="moon"/>
            </div>
          </div>
          <div className={styles.cloud} style={{ transform: `translateX(${-scrollY/3}px)` }}/>
          <div className={styles.cloud} style={{ transform: `translateX(${-scrollY/1.5}px)` }}/>
          <div className={styles.content} style={{ transform: `translateX(${-scrollY}px)` }}>
            <div className={styles.skills}>
              <p>わたしは</p>
              <p>こーゆう事が</p>
              <p>すこし</p>
              <p>できます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
