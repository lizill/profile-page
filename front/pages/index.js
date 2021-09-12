import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Main from '../components/main';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dong's Profile</title>
        <meta name="description" content="Dong's profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 헤더 */}
      <Header/>

      {/* 메인 화면 */}
      <Main/>

      {/* 기술 스택 */}
      {/* <Stack/> */}

      {/* 목표 */}
      {/* <Goal/> */}

      {/* 작품 */}
      {/* <Work/> */}

      {/* 활동 */}
      {/* <Activity/> */}

      {/* 사이트 */}
      {/* <Site/> */}

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
