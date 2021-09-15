import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'react-i18next';
import Main from '../components/main';
import Header from '../components/header';
import Stack from '../components/stack';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Home() {
  const { t } = useTranslation("common");
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Dong's profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 헤더 */}
      <Header/>

      {/* 메인 화면 */}
      <Main/>

      {/* 기술 스택 */}
      <Stack/>

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
