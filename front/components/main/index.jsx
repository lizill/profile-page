import React from "react";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './styles/main.module.scss';
import ATags from "./ATags";

const images = [
  { id: 1, name: 'guitar', url: '/images/main/guitar.jpg' },
  { id: 2, name: 'code', url: '/images/main/code.jpg' },
]

const StyledSlider = styled(Slider)`
  div img {
    transition: 2s;
    transform: scale(1.2);
  }
  .slick-current div img {
    transform: scale(1);
  }
`

const Main = () => {
  const { t } = useTranslation("common");

  return (
    <main className={styles.main}>
      <div className="absolute w-screen h-screen overflow-hidden">
        <StyledSlider fade infinite autoplay
          autoplaySpeed={6000}
          speed={1000}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
          focusOnSelect
        >
          {images.map(v => (
            <img className={styles.img} key={v.id} src={v.url} alt={v.name} width="100%"/>
          ))}
        </StyledSlider>
      </div>
      <div className={styles.container}>
        <article className={styles.article}>
          <h1>{t("main")}</h1>
          <p>{t("main-sub")}</p>
          <div className={styles.aTags}>
            <ATags link="#" content={t("frontend")} />
            <ATags link="#" content={t("backend")} />
            <ATags link="#" content={t("application")} />
          </div>
        </article>
        <HiOutlineArrowNarrowDown className={styles.arrowDown} />
      </div>
    </main>
  )
}

export default Main;
