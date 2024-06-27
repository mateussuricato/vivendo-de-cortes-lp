import React, { useRef, useState, useEffect } from 'react';
import * as S from './style';

import image1 from '../../images/perfils/1.webp';
import image2 from '../../images/perfils/2.webp';
import image3 from '../../images/perfils/3.webp';
import image4 from '../../images/perfils/4.webp';
import image5 from '../../images/perfils/5.webp';
import image6 from '../../images/perfils/6.webp';
import image7 from '../../images/perfils/7.webp';
import image8 from '../../images/perfils/8.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

export default function Carrosel() {
    const carousel = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
        carousel.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        carousel.current.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
        setIsDown(false);
        carousel.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade de rolagem
        carousel.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
        setIsDown(true);
        setStartX(e.touches[0].pageX - carousel.current.offsetLeft);
        setScrollLeft(carousel.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsDown(false);
    };

    const handleTouchMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.current.offsetLeft;
        const walk = (x - startX) * 2; // Velocidade de rolagem
        carousel.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const currentCarousel = carousel.current;

        currentCarousel.addEventListener('mousedown', handleMouseDown);
        currentCarousel.addEventListener('mouseleave', handleMouseLeave);
        currentCarousel.addEventListener('mouseup', handleMouseUp);
        currentCarousel.addEventListener('mousemove', handleMouseMove);

        currentCarousel.addEventListener('touchstart', handleTouchStart);
        currentCarousel.addEventListener('touchend', handleTouchEnd);
        currentCarousel.addEventListener('touchmove', handleTouchMove);

        return () => {
            currentCarousel.removeEventListener('mousedown', handleMouseDown);
            currentCarousel.removeEventListener('mouseleave', handleMouseLeave);
            currentCarousel.removeEventListener('mouseup', handleMouseUp);
            currentCarousel.removeEventListener('mousemove', handleMouseMove);

            currentCarousel.removeEventListener('touchstart', handleTouchStart);
            currentCarousel.removeEventListener('touchend', handleTouchEnd);
            currentCarousel.removeEventListener('touchmove', handleTouchMove);
        };
    }, [handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove, handleTouchStart, handleTouchEnd, handleTouchMove]);

    return (
        <S.Container ref={carousel}>
            {images.map((image, index) => (
                <div className="item" key={index}>
                    <img src={image} alt={`Imagem ${index + 1}`} />
                </div>
            ))}
        </S.Container>
    );
}
