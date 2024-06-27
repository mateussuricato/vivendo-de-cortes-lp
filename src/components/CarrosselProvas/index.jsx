import React from 'react';
import * as S from './style';
import { useRef, useState, useEffect } from 'react';

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

const duplicatedImages = [...images, ...images]; // Duplicate the images

const CarrosselProvas = () => {
    const carousel = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const startY = useRef(0);
    const isHorizontalScroll = useRef(false);

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
        const walk = (x - startX.current) * 2; // Adjust scroll speed
        carousel.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches[0].pageX - carousel.current.offsetLeft;
        scrollLeft.current = carousel.current.scrollLeft;
        startY.current = e.touches[0].pageY;
        isHorizontalScroll.current = false;
        carousel.current.style.scrollBehavior = 'auto';
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        carousel.current.style.scrollBehavior = 'smooth';
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const x = e.touches[0].pageX - carousel.current.offsetLeft;
        const y = e.touches[0].pageY;

        if (!isHorizontalScroll.current) {
            const moveY = Math.abs(y - startY.current);
            const moveX = Math.abs(x - startX.current);
            if (moveX > moveY) {
                isHorizontalScroll.current = true;
            } else {
                isDragging.current = false;
                return;
            }
        }

        const walk = (x - startX.current) * 2; // Adjust scroll speed
        carousel.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleScroll = () => {
        if (!carousel.current) return;
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
        currentCarousel.addEventListener('touchend', handleTouchEnd);
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
            currentCarousel.removeEventListener('touchend', handleTouchEnd);
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

export default CarrosselProvas;