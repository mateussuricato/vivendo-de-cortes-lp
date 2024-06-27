import * as S from "./style"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react";

import image1 from '../../images/perfils/1.webp';
import image2 from '../../images/perfils/2.webp';
import image3 from '../../images/perfils/3.webp';
import image4 from '../../images/perfils/4.webp';
import image5 from '../../images/perfils/5.webp';
import image6 from '../../images/perfils/6.webp';
import image7 from '../../images/perfils/7.webp';
import image8 from '../../images/perfils/8.webp';

const images = [image1, image2, image3,image4, image5, image6, image7, image8]

export default function Carrosel() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <S.Container>
           <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div 
            className="inner"
            drag="x"
            dragConstraints={{right: 0, left: -1430}}
            initial={{x: 300}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            >

                {images.map(image => (
                    <motion.div className="item" key={image}>
                        <img src={image} alt="" />           
                    </motion.div>
                ))}
                
            </motion.div>
           </motion.div>
        </S.Container>
    )
}