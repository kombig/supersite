import React from 'react';

import {SwiperSlide} from "swiper/react";

import SwiperExamplesWorkItem from "./swiper-examples-work-item/swiper-examples-work-item";
import SwiperExamplesWork from "./swiper-examples-work";
import {StaticImageData} from "next/image";

type slidesType = {
    image: StaticImageData,
    imageAlt: string
}

type propTypes = {
    slidesInfo: Array<slidesType>
}

const SwiperExamplesWorkContainer: React.FC<propTypes> = ({slidesInfo}) => {
    const slides = slidesInfo.map((slide, index) => {
        return <SwiperSlide key={index}>
            <SwiperExamplesWorkItem image={slide.image} imageAlt={slide.imageAlt}/>
        </SwiperSlide>
    })

    return <SwiperExamplesWork slides={slides}/>
}

export default SwiperExamplesWorkContainer;
