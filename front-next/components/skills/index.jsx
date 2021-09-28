import React, { useRef, useEffect, useState, createRef } from "react";

import styles from './styles/skills.module.css'

const Skills = ({ scrollY, mouseX }) => {
  const [sectionHeight, setSectionHeight] = useState(0);
  const skillsRef = useRef(null);
  const stackRef = useRef([]);

  if(stackRef.current.length !== stacks.length) {
    stackRef.current = stacks.map((_, i) => stackRef.current[i] || createRef());
  }

  useEffect(() => {
    window.addEventListener('resize', () => 
      setSectionHeight(skillsRef.current.offsetWidth + window.innerWidth/2)
    );
    setSectionHeight(skillsRef.current.offsetWidth + window.innerWidth/2);
    return (
      window.removeEventListener('resize', () => 
        setSectionHeight(skillsRef.current.offsetWidth + window.innerWidth/2)
      )
    );
  }, []);

  useEffect(() => {
    // console.log(scrollY, window.innerHeight*2+window.innerWidth/2)
    let left = window.innerHeight*2+window.innerWidth/2-720
    if(scrollY >= left) {
      stackRef.current[0].current.style.transform = `translateY(${50-stacks[0].level}%)`;
      stackRef.current[0].current.style.opacity = 1;
    }
    if(scrollY >= left+500) {
      stackRef.current[1].current.style.transform = `translateY(${50-stacks[1].level}%)`;
      stackRef.current[1].current.style.opacity = 1;
    }
    if(scrollY >= left+500*2) {
      stackRef.current[2].current.style.transform = `translateY(${50-stacks[2].level}%)`;
      stackRef.current[2].current.style.opacity = 1;
    }
    if(scrollY >= left+500*3) {
      stackRef.current[3].current.style.transform = `translateY(${50-stacks[3].level}%)`;
      stackRef.current[3].current.style.opacity = 1;
    }
    if(scrollY >= left+500*4) {
      stackRef.current[4].current.style.transform = `translateY(${50-stacks[4].level}%)`;
      stackRef.current[4].current.style.opacity = 1;
    }

  }, [scrollY])

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
                わたしは <br/>
                こーゆう事が <br/>
                すこし <br/>
                できます。
              </h3>
              {stacks && stacks.map((v, i) => (
                <div className={styles.stack} ref={stackRef.current[i]} key={v.id}>
                  {/* <p style={{ transform: `translateY(${50-v.level}%)` }}> */}
                  <p className={styles.tag}>{v.tag}</p>
                  <p>{v.stack}</p>
                  <p className={styles.level}>{v.level}%</p>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills;

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
    level: '90',
  },
  {
    id: 4,
    tag: 'Back-End',
    stack: 'Laravel',
    level: '80',
  },
  {
    id: 5,
    tag: 'Andriod',
    stack: 'Java',
    level: '100',
  },
  // {
  //   id: 6,
  //   tag: 'Front-End',
  //   stack: 'HTML5, SCC3(SCSS)',
  //   level: '60',
  // },
];