import React from "react";

import styles from './styles/stack.module.scss';
import Item from "./Item";

const items = [
  { image: '', title: '프론트엔드', content: 'next.js, react.js, vue.js, sass' },
  { image: '', title: '백엔드', content: 'laravel, express.js, node.js' },
  { image: '', title: '어플리케이션', content: 'android, java' },
  { image: '', title: '디자인', content: 'Photoshop, PremierePro' },
]

const Stack = () => {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <div>
          <h1>기술스택</h1>
          <p>다양한 경험을 바탕으로 엔지니어 기술 발전에 기여합니다.</p>
        </div>
        <ul className={styles.items}>
          {items && items.map(v => (
            <Item image={v.image} title={v.title} content={v.content} />
          ))}
        </ul>
        <div className={styles.backgroundImageContainer}>
          <img src="/images/stack/gearwheel.png" alt="" />
        </div>
      </article>
    </div>
  );
}

export default Stack;
