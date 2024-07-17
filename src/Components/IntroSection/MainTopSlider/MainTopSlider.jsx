import React, { useContext } from 'react';
import { Swiper } from 'swiper/react';
import { SwiperContext1 } from './../../../utils/SwiperProvider';
import { PresentationSwiper1 } from '../../../utils/Swipers';
import style from './style.module.scss';

const IntroSection = () => {
	
  const swiperConfig = useContext(SwiperContext1);

  return (
    <div className={style.swiperWrapper}>
      <Swiper {...swiperConfig}>
        <PresentationSwiper1></PresentationSwiper1>
      </Swiper>
    </div>
  );
};

export default IntroSection;
