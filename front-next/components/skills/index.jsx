import React, { useRef, useEffect, useState, createRef, memo } from "react";
import CountUp from 'react-countup';

import styles from './styles/skills.module.css';

const toggleArr = [];

const Skills = ({ scrollY, mouseX }) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  const skillsRef = useRef(null);
  const stackRef = useRef([]);

  if(stackRef.current.length !== stacks.length) {
    stackRef.current = stacks.map((_, i) => stackRef.current[i] || createRef());
  }

  useEffect(() => {
    let height = skillsRef.current.offsetWidth + window.innerWidth/2;
    window.addEventListener('resize', setSectionHeight(height));
    setSectionHeight(height);
    return window.removeEventListener('resize', setSectionHeight(height));
  }, []);

  useEffect(() => {
    let left = window.innerHeight*2 + 720 - window.innerWidth/4;
    stacks.map((v, i) => {
      let elementX = left+stackRef.current[i].current.offsetWidth*i;
      if(scrollY >= elementX && !toggleArr[i]) {
        stackRef.current[i].current.style.transform = `translateY(${50-v.level}%)`;
        stackRef.current[i].current.style.opacity = 1;
        toggleArr.push(true);
      }
    });
  }, [scrollY]);

  return (
    <div className={styles.skillsWrap} style={{ height: sectionHeight }}>
      <div className={styles.stickyWrap}>
        <div className={styles.backLight}>
        </div>
          <div className={styles.moonWrap}>
            <div style={{ transform: `translate(${mouseX/100}px)` }}>
              <img src="/images/skills/moon.png" alt="moon"/>
            </div>
          </div>
          <div className={styles.cloud} style={{ transform: `translateX(${-scrollY/3}px)` }}/>
          <div className={styles.cloud} style={{ transform: `translateX(${-scrollY/1.5}px)` }}/>
          <div className={styles.content} style={{ transform: `translateX(${-scrollY}px)` }}>
            <div className={styles.skills} ref={skillsRef}>
              <div className={styles.lineWrap}>
                <ul className={styles.line}>
                  <li><hr/></li>
                  <li><hr/></li>
                  <li><hr/></li>
                  <li><hr/></li>
                  <li><hr/></li>
                </ul>
                <div className={styles.lineEnd}></div>
                <div className={styles.lineEnd}></div>
              </div>
              <h3>
                わたしは<br/>
                こーゆう事が<br/>
                すこし<br/>
                できます。
              </h3>
              {stacks && stacks.map((v, i) => (
                <div className={styles.stack} ref={stackRef.current[i]} key={v.id}>
                  <p className={styles.tag}>{v.tag}</p>
                  <p>{v.stack}</p>
                  {
                    toggleArr[i]
                      ? <p className={styles.level} >
                          <CountUp end={v.level} duration={0.5}/>%
                        </p>
                      : <p className={styles.level}>0%</p>
                  }
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default memo(Skills);

const stacks = [
  {
    id: 1,
    tag: 'Front-End',
    stack: 'React',
    level: '60',
  },
  {
    id: 2,
    tag: 'Front-End',
    stack: 'Next.js',
    level: '20'
  },
  {
    id: 3,
    tag: 'Front-End',
    stack: 'Vue.js',
    level: '70',
  },
  {
    id: 4,
    tag: 'Front-End',
    stack: 'HTML5, CSS3(SCSS)',
    level: '90',
  },
  {
    id: 5,
    tag: 'Back-End',
    stack: 'Laravel',
    level: '60',
  },
  {
    id: 6,
    tag: 'Back-End',
    stack: 'Node.js',
    level: '70'
  },
  {
    id: 7,
    tag: 'Andriod',
    stack: 'Java',
    level: '90',
  },
];
