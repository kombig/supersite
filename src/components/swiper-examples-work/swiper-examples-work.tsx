import React from 'react';

import "swiper/swiper.min.css"

import {Swiper} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";

SwiperCore.use([Navigation]);

type propTypes = {
    slides: Array<JSX.Element>
}

const SwiperExamplesWork: React.FC<propTypes> = ({slides}) => {
    return <div className={"swiperExamplesWork"}>
        <Swiper loop={true}
                navigation
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: -10,
                        allowTouchMove: true
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: -80,
                        allowTouchMove: true
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: -160,
                        allowTouchMove: false
                    },
                    1600: {
                        slidesPerView: 4,
                        spaceBetween: -160,
                        allowTouchMove: false
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: -360,
                        allowTouchMove: false
                    }
                }}>
            {slides}
        </Swiper>
    </div>
}

export default SwiperExamplesWork;
