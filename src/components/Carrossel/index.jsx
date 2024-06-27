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

const duplicatedImages = [...images, ...images]; // Duplicate the images

const Carrossel = () => {
    const carousel = useRef(null);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        startX.current = e.pageX - carousel.current.offsetLeft;
        scrollLeft.current = carousel.current.scrollLeft;
        carousel.current.style.cursor = 'grabbing';
        carousel.current.style.scrollBehavior = 'auto';
    };

    const handleMouseLeave = () => {
        carousel.current.style.cursor = 'grab';
        carousel.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseUp = () => {
        carousel.current.style.cursor = 'grab';
        carousel.current.style.scrollBehavior = 'smooth';
    };

    const handleMouseMove = (e) => {
        const x = e.pageX - carousel.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Adjust scroll speed
        carousel.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].pageX - carousel.current.offsetLeft;
        scrollLeft.current = carousel.current.scrollLeft;
        carousel.current.style.scrollBehavior = 'auto';
    };

    const handleTouchMove = (e) => {
        const x = e.touches[0].pageX - carousel.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Adjust scroll speed
        carousel.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = carousel.current;

        if (scrollLeft <= 0) {
            carousel.current.scrollLeft = scrollWidth / 2 - clientWidth;
        } else if (scrollLeft + clientWidth >= scrollWidth) {
            carousel.current.scrollLeft = scrollWidth / 2 - clientWidth;
        }
    };

    useEffect(() => {
        const currentCarousel = carousel.current;

        currentCarousel.addEventListener('mousedown', handleMouseDown);
        currentCarousel.addEventListener('mouseleave', handleMouseLeave);
        currentCarousel.addEventListener('mouseup', handleMouseUp);
        currentCarousel.addEventListener('mousemove', handleMouseMove);
        currentCarousel.addEventListener('scroll', handleScroll);

        currentCarousel.addEventListener('touchstart', handleTouchStart);
        currentCarousel.addEventListener('touchmove', handleTouchMove);

        // Initial scroll to middle of the duplicated images
        currentCarousel.scrollLeft = currentCarousel.scrollWidth / 4;

        return () => {
            currentCarousel.removeEventListener('mousedown', handleMouseDown);
            currentCarousel.removeEventListener('mouseleave', handleMouseLeave);
            currentCarousel.removeEventListener('mouseup', handleMouseUp);
            currentCarousel.removeEventListener('mousemove', handleMouseMove);
            currentCarousel.removeEventListener('scroll', handleScroll);

            currentCarousel.removeEventListener('touchstart', handleTouchStart);
            currentCarousel.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <S.Depoimentos ref={carousel} className="depoimentos">
            {duplicatedImages.map((image, index) => (
                <img key={index} src={image} alt={`Depoimento ${index + 1}`} />
            ))}
        </S.Depoimentos>
    );
};

export default Carrossel;