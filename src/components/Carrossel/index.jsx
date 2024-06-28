import React from 'react';
import * as S from './style';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import image1 from '../../images/perfils/1.webp';
import image2 from '../../images/perfils/2.webp';
import image3 from '../../images/perfils/3.webp';
import image4 from '../../images/perfils/4.webp';
import image5 from '../../images/perfils/5.webp';
import image6 from '../../images/perfils/6.webp';
import image7 from '../../images/perfils/7.webp';
import image8 from '../../images/perfils/8.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function carrossel() {
    return (
        <S.Container>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map((image, index) => (
                <SwiperSlide><img key={index} src={image} alt="" /></SwiperSlide>
            ))}
          </Swiper>
        </S.Container>
      );
}