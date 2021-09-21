import React from "react";

import styles from './styles/skills.module.css'

const Skills = () => {
  return (
    <div className={styles.skillsWrap}>
      <div className={styles.backLight}>
        <div className={styles.moonWrap}>
          <img src="/images/skills/moon.png" alt="moon" />
        </div>
        <div className={styles.cloud}/>
      </div>
    </div>
  )
}

export default Skills;
