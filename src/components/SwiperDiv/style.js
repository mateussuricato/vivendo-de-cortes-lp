import styled from "styled-components";

export const Container = styled.div`

    h1 {
        color: yellow;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    :root {
        --primary: #ffff00;
        --white: #ffffff;
        --bg: #f5f5f5;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    @media (min-width: 1440px) {
        html {
            zoom: 1.5;
        }
    }

    @media (min-width: 2560px) {
        html {
            zoom: 1.7;
        }
    }

    @media (min-width: 3860px) {
        html {
            zoom: 2.5;
        }
    }

    ::-webkit-scrollbar {
        width: 1.3rem;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #797979;
        transition: all 0.5s ease-in-out;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #ff00ff;
    }

    ::-webkit-scrollbar-track {
        background: #f9f9f9;
    }

    .swiper_container {
        height: 39.5rem;
        padding: 2rem 0;
        position: relative;
    }

    .swiper-slide {
        width: 364px;
        height: 490px;
        position: relative;
    }

    @media (max-width: 500px) {
        .swiper_container {
          
        }
        .swiper-slide {
          
        }
        .swiper-slide img {

        }
    }

    .swiper-slide img {
        width: 364px;
        height: 490px;
        object-fit: cover;
    }

    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right {
        display: none;
    }

    .slider-controler {
        position: relative;
        bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider-controler .swiper-button-next {
        left: 58% !important;
        transform: translateX(-58%) !important;
    }

    @media (max-width: 990px) {
        .slider-controler .swiper-button-next {
            left: 70% !important;
            transform: translateX(-70%) !important;
        }
    }

    @media (max-width: 450px) {
        .slider-controler .swiper-button-next {
            left: 80% !important;
            transform: translateX(-80%) !important;
        }
    }

    @media (max-width: 990px) {
        .slider-controler .swiper-button-prev {
            left: 30% !important;
            transform: translateX(-30%) !important;
        }
    }

    @media (max-width: 450px) {
        .slider-controler .swiper-button-prev {
            left: 20% !important;
            transform: translateX(-20%) !important;
        }
    }

    .slider-controler .slider-arrow {
        background: var(--white);
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        left: 42%;
        transform: translateX(-42%);
        filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    .slider-controler .slider-arrow ion-icon {
        font-size: 2rem;
        color: #222224;
    }

    .slider-controler .slider-arrow::after {
        content: '';
    }

    .swiper-pagination {
        position: relative;
        width: 15rem !important;
        bottom: 1rem;
    }

    .swiper-pagination .swiper-pagination-bullet {
        background: white;
    }

    .swiper-pagination .swiper-pagination-bullet-active {
        background: orange;
    }
`;
