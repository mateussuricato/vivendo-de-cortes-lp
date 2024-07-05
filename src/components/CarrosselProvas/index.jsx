import React from 'react';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import image0 from '../../images/provas/0.webp';
import image1 from '../../images/provas/1.webp';
import image2 from '../../images/provas/2.webp';
import image3 from '../../images/provas/3.webp';
import image4 from '../../images/provas/4.webp';
import image5 from '../../images/provas/5.webp';
import image6 from '../../images/provas/6.webp';
import image7 from '../../images/provas/7.webp';
import image8 from '../../images/provas/8.webp';
import image9 from '../../images/provas/9.webp';
import image10 from '../../images/provas/10.webp';
import image11 from '../../images/provas/11.webp';
import image12 from '../../images/provas/12.webp';
import image13 from '../../images/provas/13.webp';
import image14 from '../../images/provas/14.webp';
import image15 from '../../images/provas/15.webp';
import image16 from '../../images/provas/16.webp';
import image17 from '../../images/provas/17.webp';


const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17];

export default function carrosselProvas() {
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