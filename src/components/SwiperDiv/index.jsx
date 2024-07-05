import * as S from "./style"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import slide_image1 from '../../images/modulos/1.png';
import slide_image2 from "../../images/modulos/2.png"
import slide_image3 from "../../images/modulos/3.png"
import slide_image4 from "../../images/modulos/4.webp"
import slide_image5 from "../../images/modulos/5.png"
import slide_image6 from "../../images/modulos/6.webp"

export default function SwiperDiv() {
    return (
        <S.Container>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image6} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        </S.Container>
    )
}