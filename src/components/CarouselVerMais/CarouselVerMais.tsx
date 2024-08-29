import './CarouselVerMais.css'
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";

type props = {
    images: string[]
}

const CarouselVerMais = ({ images }:props) => {

    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carouselRef.current?.scrollWidth! - carouselRef.current?.offsetWidth!);
    }, []);

    return (

        <motion.div ref={carouselRef} className="carousel-ver-mais" whileTap={{ cursor: "grabbing" }}>
            <motion.div className="inner-carousel-ver-mais" drag="x" dragConstraints={{ right: 0, left: -width }} initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 0.2 }}>

                {images.map(image => (
                    <motion.div className="item-carousel-ver-mais" key={image}>
                        <img src={image} alt=""/>
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>

    )
}

export default CarouselVerMais
