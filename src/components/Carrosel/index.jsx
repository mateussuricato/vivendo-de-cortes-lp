import React from 'react';
import * as S from './style';
import { useRef, useState, useEffect } from 'react';

import image1 from '../../images/perfils/1.webp';
import image2 from '../../images/perfils/2.webp';
import image3 from '../../images/perfils/3.webp';
import image4 from '../../images/perfils/4.webp';
import image5 from '../../images/perfils/5.webp';
import image6 from '../../images/perfils/6.webp';
import image7 from '../../images/perfils/7.webp';
import image8 from '../../images/perfils/8.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Carrosel = () => {
    const carousel = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - carousel.current.offsetLeft;
        scrollLeft.current = carousel.current.scrollLeft;
        carousel.current.style.cursor = 'grabbing';
        carousel.current.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
        carousel.current.style.cursor = 'grab';
        carousel.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        carousel.current.style.cursor = 'grab';
        carousel.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Ajuste a velocidade do arrasto
        carousel.current.scrollLeft = scrollLeft.current - walk;
    };

    useEffect(() => {
        const currentCarousel = carousel.current;

        currentCarousel.addEventListener('mousedown', handleMouseDown);
        currentCarousel.addEventListener('mouseleave', handleMouseLeave);
        currentCarousel.addEventListener('mouseup', handleMouseUp);
        currentCarousel.addEventListener('mousemove', handleMouseMove);

        return () => {
            currentCarousel.removeEventListener('mousedown', handleMouseDown);
            currentCarousel.removeEventListener('mouseleave', handleMouseLeave);
            currentCarousel.removeEventListener('mouseup', handleMouseUp);
            currentCarousel.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <S.Depoimentos ref={carousel} className="depoimentos">
            {images.map((image, index) => (
                <div className="imageContainer">
                    <img key={index} src={image} alt={`Depoimento ${index + 1}`} />
                </div>
            ))}
        </S.Depoimentos>
    );
};

export default Carrosel;